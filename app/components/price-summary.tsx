import { formatPrice, OrderPricing } from "./pricing";

export function PriceSummary({ pricing }: { pricing: OrderPricing }) {
  return <dl className="price-summary">
    <div><dt>Subtotal</dt><dd>{formatPrice(pricing.subtotal)}</dd></div>
    <div><dt>Delivery</dt><dd>Free</dd></div>
    <div><dt>Taxes</dt><dd>Included in prices</dd></div>
    <div className="price-summary-total"><dt>Order total</dt><dd>{formatPrice(pricing.total)}</dd></div>
  </dl>;
}
