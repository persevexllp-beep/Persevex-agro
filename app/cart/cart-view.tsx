"use client";

import Image from "next/image";
import Link from "next/link";
import { calculatePricing, formatPrice } from "../components/pricing";
import { PriceSummary } from "../components/price-summary";
import { products } from "../components/products-data";
import { MAX_QUANTITY } from "../components/cart-store";
import { useCart } from "../components/use-cart";

export function CartView() {
  const cart = useCart();
  const pricing = calculatePricing(cart.items);
  return <section className="section inner-page"><div className="wrap">
    <div className="section-heading"><span className="section-kicker">YOUR CART</span><h1>Your selected products.</h1><p>Choose quantities, then checkout to save your delivery details and access product payment links. Your order total updates as you change quantities.</p></div>
    {!cart.ready ? <p role="status">Loading your cart…</p> : !cart.items.length ? <div className="cart-empty"><h2>Your cart is empty.</h2><p>Explore our products to start your order.</p><Link className="button primary" href="/products">Browse products</Link></div> : <div className="cart-layout">
      <div className="cart-items">{cart.items.map(item => {
        const product = products.find(product => product.id === item.productId)!;
        return <article className="cart-item" key={item.productId}>
          <div className="cart-image"><Image src={product.image ?? (product.kind === "cocopeat" ? "/images/products1.jpeg" : "/images/products2.jpeg")} alt={product.imageLabel} fill sizes="120px" style={{ objectFit: "cover" }} /></div>
          <div className="cart-item-copy"><h2><Link href={`/products/${product.id}`}>{product.name}</Link></h2><p>{formatPrice(product.price)} per {product.unit}</p><label className="quantity-label" htmlFor={`quantity-${product.id}`}>Quantity ({product.unit})</label>
            <div className="quantity-controls"><button type="button" aria-label={`Decrease ${product.name} quantity`} disabled={item.quantity <= 1} onClick={() => cart.setQuantity(product.id, item.quantity - 1)}>−</button><input id={`quantity-${product.id}`} type="number" min="1" max={MAX_QUANTITY} step="1" value={item.quantity} onChange={event => { const quantity = Number(event.target.value); if (Number.isInteger(quantity) && quantity >= 1 && quantity <= MAX_QUANTITY) cart.setQuantity(product.id, quantity); }} /><button type="button" aria-label={`Increase ${product.name} quantity`} disabled={item.quantity >= MAX_QUANTITY} onClick={() => cart.setQuantity(product.id, item.quantity + 1)}>+</button></div>
            <p className="cart-line-total">Line total: <strong>{formatPrice(product.price * item.quantity)}</strong></p>
          </div>
          <button className="text-button" type="button" aria-label={`Remove ${product.name} from cart`} onClick={() => cart.setQuantity(product.id, 0)}>Remove</button>
        </article>;
      })}<button className="text-button" type="button" onClick={() => cart.clear()}>Clear cart</button></div>
      <aside className="cart-summary"><h2>Order summary</h2><p>{cart.items.length} product {cart.items.length === 1 ? "type" : "types"}</p><PriceSummary pricing={pricing} /><Link className="button primary" href="/checkout">Proceed to checkout →</Link><Link className="text-link" href="/products">Continue shopping</Link></aside>
    </div>}
    {cart.error && <p className="cart-error" role="alert">{cart.error}</p>}
  </div></section>;
}
