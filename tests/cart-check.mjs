import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';
import { randomUUID } from 'node:crypto';
let persisted = null;
let blocked = false;
let lastError = '';
const listeners = new Map();
const window = {
  localStorage: {
    getItem: () => persisted,
    setItem: (key, value) => { if (blocked) throw new Error('QuotaExceededError'); persisted = value; },
  },
  addEventListener: (name, callback) => { if (!listeners.has(name)) listeners.set(name, new Set()); listeners.get(name).add(callback); },
  removeEventListener: (name, callback) => listeners.get(name)?.delete(callback),
  dispatchEvent: event => { for (const callback of listeners.get(event.type) ?? []) callback(event); },
};
const modules = new Map();
let subscribe;
let serverSnapshot;
const react = {
  useMemo: fn => fn(),
  useState: () => ['', value => { lastError = value; }],
  useSyncExternalStore: (sub, snapshot, server) => { subscribe = sub; serverSnapshot = server; return snapshot(); },
};
function load(filename) {
  filename = path.resolve(filename);
  if (modules.has(filename)) return modules.get(filename).exports;
  const loadedModule = { exports: {} };
  modules.set(filename, loadedModule);
  const compiled = ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  vm.runInNewContext(compiled, { module: loadedModule, exports: loadedModule.exports, require: name => name === 'react' ? react : load(path.join(path.dirname(filename), name + '.ts')), window, Event, crypto: { randomUUID } }, { filename });
  return loadedModule.exports;
}
const store = load('app/components/cart-store.ts');
// Run the store hook with stubbed React subscriptions to test persistence without a browser.
const { useCart: readCart } = load('app/components/use-cart.ts');
const cart = () => readCart();
assert.equal(cart().count, 0);
assert.equal(serverSnapshot(), null, 'server rendering must not access browser storage');
let notifications = 0;
const unsubscribe = subscribe(() => notifications++);
assert.equal(cart().add('cocopeat'), true);
assert.equal(cart().add('cocopeat'), true);
assert.equal(cart().add('meat-cuts'), true);
assert.equal(cart().items.length, 2);
assert.equal(cart().count, 3);
assert.equal(notifications, 3, 'same-tab updates notify subscribers');
const reloaded = store.parseCart(persisted);
assert.equal(reloaded.items[0].quantity, 2, 'saved cart survives a reload');
window.dispatchEvent({ type: 'storage', key: store.CART_KEY });
assert.equal(notifications, 4, 'other tabs notify subscribers');
cart().setQuantity('cocopeat', 999);
const beforeLimit = persisted;
assert.equal(cart().add('cocopeat'), false);
assert.equal(persisted, beforeLimit, 'quantity limit cannot corrupt cart');
cart().setQuantity('cocopeat', 0);
assert.equal(cart().items.length, 1);
const beforeFailure = persisted;
blocked = true;
assert.equal(cart().add('green-vegetables'), false);
assert.equal(persisted, beforeFailure, 'failed storage keeps the original cart');
assert.ok(lastError);
const customer = { name: 'Test Customer', email: 'test@example.com', phone: '1234567890', address: 'Test address', notes: 'Test order' };
assert.equal(cart().checkout(customer), false);
assert.equal(persisted, beforeFailure, 'failed checkout must not clear cart');
blocked = false;
assert.equal(cart().checkout(customer), true);
assert.equal(cart().count, 0);
assert.equal(cart().lastOrder.items[0].productId, 'meat-cuts');
assert.equal(cart().lastOrder.customer.email, customer.email);
assert.ok(cart().lastOrder.id);
assert.equal(cart().lastOrder.pricing.total, 650);
assert.equal(store.parseCart(persisted).lastOrder.pricing.lines[0].unitPrice, 650);
assert.equal(store.parseCart(persisted).lastOrder.id, cart().lastOrder.id, 'confirmation survives a reload');
const savedOrder = persisted;
assert.equal(cart().checkout(customer), false);
assert.equal(persisted, savedOrder, 'empty checkout cannot replace an order');
cart().add('coir-fiber');
assert.ok(cart().lastOrder, 'new shopping preserves the previous local order');
cart().clear();
assert.equal(cart().count, 0);
assert.ok(cart().lastOrder);
assert.equal(store.parseCart('{broken json').items.length, 0);
assert.equal(store.parseCart('null').items.length, 0);
const sanitized = store.parseCart(JSON.stringify({ items: [ { productId: 'unknown', quantity: 2 }, { productId: 'cocopeat', quantity: -1 }, { productId: 'cocopeat', quantity: 1.5 }, { productId: 'cocopeat', quantity: 2 }, { productId: 'cocopeat', quantity: 3 }, { productId: 'mixed-meat', quantity: 999999 } ], lastOrder: { customer: {} } }));
assert.equal(sanitized.items.length, 2);
assert.equal(sanitized.items[0].quantity, 5);
assert.equal(sanitized.items[1].quantity, 999);
assert.equal(sanitized.lastOrder, null);
unsubscribe();
assert.equal(listeners.get('storage').size, 0);
assert.equal(listeners.get('persevex-cart-change').size, 0);
console.log('Cart checks passed: persistence, quantities, removal, sync, checkout, corrupted data and storage failures.');

const { calculatePricing, restorePricing, formatPrice } = load('app/components/pricing.ts');
const priced = calculatePricing([{ productId: 'meat-cuts', quantity: 2 }, { productId: 'mixed-meat', quantity: 3 }, { productId: 'cocopeat', quantity: 1 }, { productId: 'mixed-vegetables', quantity: 2 }]);
assert.equal(priced.subtotal, 3130);
assert.equal(priced.total, 3130);
assert.equal(priced.delivery, 0);
assert.equal(priced.lines[0].lineTotal, 1300);
assert.equal(calculatePricing([]).total, 0);
assert.equal(calculatePricing([{ productId: 'mixed-meat', quantity: 999 }]).total, 449550);
assert.match(formatPrice(3130), /3,130/);
assert.throws(() => calculatePricing([{ productId: 'unknown', quantity: 1 }]));
assert.throws(() => calculatePricing([{ productId: 'meat-cuts', quantity: -1 }]));
const original = cart().lastOrder;
const legacy = { ...original }; delete legacy.pricing;
assert.equal(store.parseCart(JSON.stringify({ items: [], lastOrder: legacy })).lastOrder.id, original.id, 'orders saved before pricing remain readable');
const historical = { lines: [{ productId: 'meat-cuts', quantity: 1, unitPrice: 600 }], total: 1 };
assert.equal(restorePricing(historical, original.items).total, 600, 'historic unit prices are preserved and totals are recalculated');
const restoredOrder = store.parseCart(JSON.stringify({ items: [], lastOrder: { ...original, pricing: historical } })).lastOrder;
assert.equal(restoredOrder.pricing.total, 600);
assert.equal(restorePricing({ lines: [{ productId: 'meat-cuts', quantity: 1, unitPrice: -10 }] }, original.items), undefined);
assert.equal(restorePricing({ lines: [{ productId: 'meat-cuts', quantity: 2, unitPrice: 600 }] }, original.items), undefined);
const catalog = load('app/components/products-data.ts').products;
const currentMeat = catalog.find(product => product.id === 'meat-cuts');
currentMeat.price = 700;
assert.equal(store.parseCart(JSON.stringify({ items: [], lastOrder: restoredOrder })).lastOrder.pricing.total, 600, 'catalog changes do not change saved receipts');
currentMeat.price = 650;
console.log('Pricing checks passed: mixed orders, quantity totals, currency formatting, historic prices and legacy orders.');
