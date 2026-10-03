"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { CART_KEY, CartData, Customer, MAX_QUANTITY, changeQuantity, parseCart } from "./cart-store";

import { calculatePricing } from "./pricing";

const CART_EVENT = "persevex-cart-change";
class CartActionError extends Error {}
function subscribe(callback: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === CART_KEY || event.key === null) callback();
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener(CART_EVENT, callback);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(CART_EVENT, callback);
  };
}
function getSnapshot() {
  try { return window.localStorage.getItem(CART_KEY) ?? "{}"; }
  catch { return "{}"; }
}
const getServerSnapshot = () => null;

export function useCart() {
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const data = useMemo(() => parseCart(raw), [raw]);
  const [error, setError] = useState("");

  function update(transform: (current: CartData) => CartData) {
    try {
      const current = parseCart(window.localStorage.getItem(CART_KEY));
      window.localStorage.setItem(CART_KEY, JSON.stringify(transform(current)));
      window.dispatchEvent(new Event(CART_EVENT));
      setError("");
      return true;
    } catch (cause) {
      setError(cause instanceof CartActionError ? cause.message : "Your browser could not save this change. Enable local storage or free up browser storage and try again.");
      return false;
    }
  }

  return {
    ...data,
    ready: raw !== null,
    count: data.items.reduce((total, item) => total + item.quantity, 0),
    error,
    add(productId: string) {
      return update(current => {
        const quantity = current.items.find(item => item.productId === productId)?.quantity ?? 0;
        if (quantity >= MAX_QUANTITY) throw new CartActionError(`You can add up to ${MAX_QUANTITY} units of each product.`);
        return { ...current, items: changeQuantity(current.items, productId, quantity + 1) };
      });
    },
    setQuantity(productId: string, quantity: number) {
      return update(current => ({ ...current, items: changeQuantity(current.items, productId, quantity) }));
    },
    clear() { return update(current => ({ ...current, items: [] })); },
    checkout(customer: Customer) {
      return update(current => {
        if (!current.items.length) throw new CartActionError("Your cart is empty. Add products before checking out.");
        return {
          items: [],
          lastOrder: { id: crypto.randomUUID(), createdAt: new Date().toISOString(), items: current.items, customer, pricing: calculatePricing(current.items) },
        };
      });
    },
  };
}
