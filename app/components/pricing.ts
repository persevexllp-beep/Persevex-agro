import { products } from "./products-data";

export type PriceItem = { productId: string; quantity: number };
export type PricedLine = PriceItem & { unitPrice: number; lineTotal: number };
export type OrderPricing = { lines: PricedLine[]; subtotal: number; delivery: number; total: number };

export function formatPrice(amount: number) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(amount);
}

export function calculatePricing(items: PriceItem[]): OrderPricing {
  const lines = items.map(item => {
    const product = products.find(product => product.id === item.productId);
    if (!product || !Number.isSafeInteger(item.quantity) || item.quantity < 1) throw new Error("Invalid pricing item");
    return { ...item, unitPrice: product.price, lineTotal: product.price * item.quantity };
  });
  const subtotal = lines.reduce((total, line) => total + line.lineTotal, 0);
  const delivery = 0;
  return { lines, subtotal, delivery, total: subtotal + delivery };
}

// Preserve the original checkout prices when restoring a saved order.
export function restorePricing(value: unknown, items: PriceItem[]): OrderPricing | undefined {
  if (!value || typeof value !== "object" || !("lines" in value) || !Array.isArray(value.lines) || value.lines.length !== items.length) return undefined;
  const lines: PricedLine[] = [];
  for (const item of items) {
    const matches = value.lines.filter(line => line && line.productId === item.productId);
    if (matches.length !== 1) return undefined;
    const line = matches[0];
    if (!Number.isSafeInteger(line.unitPrice) || line.unitPrice < 0 || line.quantity !== item.quantity) return undefined;
    const lineTotal = line.unitPrice * item.quantity;
    if (!Number.isSafeInteger(lineTotal)) return undefined;
    lines.push({ ...item, unitPrice: line.unitPrice, lineTotal });
  }
  const subtotal = lines.reduce((sum, line) => sum + line.lineTotal, 0);
  if (!Number.isSafeInteger(subtotal)) return undefined;
  return { lines, subtotal, delivery: 0, total: subtotal };
}
