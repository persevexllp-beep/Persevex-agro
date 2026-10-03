"use client";

import { useState } from "react";
import { MAX_QUANTITY } from "./cart-store";
import { useCart } from "./use-cart";

export function AddToCart({ productId }: { productId: string }) {
  const cart = useCart();
  const [added, setAdded] = useState(false);
  const quantity = cart.items.find(item => item.productId === productId)?.quantity ?? 0;
  return <div>
    <button className="button primary" type="button" disabled={!cart.ready || quantity >= MAX_QUANTITY} onClick={() => setAdded(cart.add(productId))}>Add to cart</button>
    <p className="cart-feedback" role="status">{cart.error || (added && quantity > 0 ? `In cart: ${quantity}` : "")}</p>
  </div>;
}
