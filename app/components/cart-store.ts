import { products } from "./products-data";
import { OrderPricing, restorePricing } from "./pricing";

export const CART_KEY = "persevex-agro-cart-v1";
export const MAX_QUANTITY = 999;
export type CartItem = { productId: string; quantity: number };
export type Customer = { name: string; email: string; phone: string; address: string; notes: string };
export type Order = { id: string; createdAt: string; items: CartItem[]; customer: Customer; pricing?: OrderPricing };
export type CartData = { items: CartItem[]; lastOrder: Order | null };

export function normalizeItems(value: unknown): CartItem[] {
  if (!Array.isArray(value)) return [];
  const quantities = new Map<string, number>();
  for (const item of value) {
    if (!item || typeof item.productId !== "string" || !products.some(product => product.id === item.productId) || !Number.isSafeInteger(item.quantity) || item.quantity < 1) continue;
    quantities.set(item.productId, Math.min(MAX_QUANTITY, (quantities.get(item.productId) ?? 0) + item.quantity));
  }
  return [...quantities].map(([productId, quantity]) => ({ productId, quantity }));
}

export function parseCart(raw: string | null): CartData {
  const empty: CartData = { items: [], lastOrder: null };
  if (!raw) return empty;
  try {
    const data = JSON.parse(raw);
    if (!data || typeof data !== "object") return empty;
    const order = data.lastOrder;
    const validOrder = order && typeof order.id === "string" && typeof order.createdAt === "string" && order.customer && ["name", "email", "phone", "address", "notes"].every(key => typeof order.customer[key] === "string");
    return { items: normalizeItems(data.items), lastOrder: validOrder && normalizeItems(order.items).length ? { id: order.id, createdAt: order.createdAt, customer: order.customer, items: normalizeItems(order.items), pricing: restorePricing(order.pricing, normalizeItems(order.items)) } : null };
  } catch {
    return empty;
  }
}

export function changeQuantity(items: CartItem[], productId: string, quantity: number): CartItem[] {
  if (!products.some(product => product.id === productId) || !Number.isSafeInteger(quantity) || quantity < 0 || quantity > MAX_QUANTITY) return items;
  const others = items.filter(item => item.productId !== productId);
  return quantity === 0 ? others : normalizeItems([...others, { productId, quantity }]);
}
