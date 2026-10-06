"use client";

import Link from "next/link";
import { FormEvent } from "react";
import { calculatePricing, formatPrice } from "../components/pricing";
import { PriceSummary } from "../components/price-summary";
import { products } from "../components/products-data";
import { Order } from "../components/cart-store";
import { phone } from "../components/site-data";
import { useCart } from "../components/use-cart";

function orderLines(order: Order) {
  const pricing = order.pricing ?? calculatePricing(order.items);
  return pricing.lines.map(item => {
    const product = products.find(product => product.id === item.productId)!;
    return `${product.name}: ${item.quantity} ${product.unit}${item.quantity > 1 && product.unit !== "kg" ? "s" : ""} × ${formatPrice(item.unitPrice)} = ${formatPrice(item.lineTotal)}`;
  });
}

function OrderPayments({ order }: { order: Order }) {
  const pricing = order.pricing ?? calculatePricing(order.items);
  return <section className="cart-summary" aria-labelledby="order-payment-heading">
    <h2 id="order-payment-heading">Pay for your products</h2>
    <p>Each product has its own Razorpay payment page. For multiple products, complete a separate payment for each one. Confirm the quantity and final amount on Razorpay before paying.</p>
    <ul className="checkout-items">{pricing.lines.map(item => {
      const product = products.find(product => product.id === item.productId)!;
      return <li key={product.id}><div><strong>{product.name}</strong><small>{item.quantity} {product.unit} · Expected amount: {formatPrice(item.lineTotal)}</small><a className="text-link" href={product.paymentUrl} target="_blank" rel="noopener noreferrer" aria-label={`Pay for ${product.name} on Razorpay (opens in a new tab)`}>Pay for {product.name} →</a></div></li>;
    })}</ul>
    <p>Opening a payment page does not confirm payment. Keep your Razorpay receipt and share it with our team along with order reference {order.id}.</p>
  </section>;
}

function OrderConfirmation({ order }: { order: Order }) {
  const pricing = order.pricing ?? calculatePricing(order.items);
  const body = [
    `Order enquiry: ${order.id}`,
    `Saved: ${new Date(order.createdAt).toLocaleString()}`,
    "", ...orderLines(order), "",
    `Subtotal: ${formatPrice(pricing.subtotal)}`, "Delivery: Free", "Taxes: Included in prices", `Order total: ${formatPrice(pricing.total)}`, "",
    `Name: ${order.customer.name}`,
    `Phone: ${order.customer.phone}`, `Delivery address: ${order.customer.address}`,
    `Notes: ${order.customer.notes || "None"}`, "",
    "Please confirm availability and delivery arrangements for this order.",
  ].join("\n");
  const messageLink = `sms:${phone}?body=${encodeURIComponent(body)}`;
  return <div className="order-confirmation">
    <span className="section-kicker">ORDER ENQUIRY SAVED</span><h1>Your order is ready for payment.</h1>
    <p>Your order enquiry is saved in this browser and your cart is cleared. Use the product payment links below, then send the text message draft to our team to confirm availability and delivery.</p>
    <p>Saving this order does not send a message or take payment. This website cannot verify payments made on Razorpay; our team will confirm your order and payment.</p>
    <div className="cart-summary"><h2>Order details</h2><p className="order-reference">Reference: {order.id}</p><ul>{orderLines(order).map(line => <li key={line}>{line}</li>)}</ul><PriceSummary pricing={pricing} /><p><strong>{order.customer.name}</strong><br />{order.customer.phone}</p><p className="order-address">{order.customer.address}</p>{order.customer.notes && <p className="order-address">Notes: {order.customer.notes}</p>}</div>
    <OrderPayments order={order} />
    <div className="button-row"><a className="button primary" href={messageLink}>Open order text message →</a><Link className="button outline" href="/products">Continue shopping</Link></div>
    <p>You can also call us about your order on <a className="text-link" href={`tel:${phone}`}>{phone}</a>.</p>
  </div>;
}

export function CheckoutView() {
  const cart = useCart();
  const pricing = calculatePricing(cart.items);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!cart.ready || !cart.items.length) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const fields = new FormData(form);
    const field = (name: string) => String(fields.get(name) ?? "").trim();
    for (const name of ["name", "phone", "address"]) {
      const input = form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement;
      input.setCustomValidity(field(name) ? "" : "Please complete this field.");
    }
    if (!form.reportValidity()) return;
    cart.checkout({ name: field("name"), email: "", phone: field("phone"), address: field("address"), notes: field("notes") });
  }

  return <section className="section inner-page"><div className="wrap">
    {!cart.ready ? <p role="status">Loading checkout…</p> : !cart.items.length ? cart.lastOrder ? <OrderConfirmation order={cart.lastOrder} /> : <div className="cart-empty"><h1>Your cart is empty.</h1><p>Add products before checking out.</p><Link className="button primary" href="/products">Browse products</Link></div> : <>
      <div className="section-heading"><span className="section-kicker">CHECKOUT</span><h1>Complete your checkout.</h1><p>Review your order and enter your delivery details. Save your order to access the Razorpay payment links for your selected products.</p></div>
      <div className="cart-layout"><form className="contact-form checkout-form" onSubmit={submit} onInput={event => { const input = event.target; if (input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement) input.setCustomValidity(""); }}>
        <h2>Contact & delivery details</h2>
        <label>Full name<input name="name" autoComplete="name" required maxLength={120} /></label>
        <label>Phone<input name="phone" type="tel" autoComplete="tel" required maxLength={30} /></label>
        <label>Delivery address<textarea name="address" autoComplete="street-address" rows={3} required maxLength={1000} placeholder="Street address, city, postcode" /></label>
        <label>Order notes (optional)<textarea name="notes" rows={3} maxLength={2000} placeholder="Preferred cuts, varieties, delivery timing or other requirements" /></label>
        <p className="checkout-note">Your cart and most recent order enquiry are saved on this device. After saving, pay through the product links and use the text message draft to share your order with us.</p>
        <p className="checkout-note">Review our <Link className="text-link" href="/cancellation-and-refund-policy">Cancellation and Refund Policy</Link> before confirming an order with our team.</p>
        <button className="button primary" type="submit">Save order & continue to payment →</button>
        {cart.error && <p className="cart-error" role="alert">{cart.error}</p>}
      </form><aside className="cart-summary"><h2>Your order</h2><ul className="checkout-items">{cart.items.map(item => {
        const product = products.find(product => product.id === item.productId)!;
        return <li key={item.productId}><div><strong>{product.name}</strong><small>{item.quantity} {product.unit}{item.quantity > 1 && product.unit !== "kg" ? "s" : ""} × {formatPrice(product.price)}</small></div><span>{formatPrice(product.price * item.quantity)}</span></li>;
      })}</ul><PriceSummary pricing={pricing} /><p>After saving your details, pay for each product through its Razorpay link. Confirm quantities and amounts on the payment pages.</p><Link className="text-link" href="/cart">← Edit cart</Link></aside></div>
    </>}
  </div></section>;
}
