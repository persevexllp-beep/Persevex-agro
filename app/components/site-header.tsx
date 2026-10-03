"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "./use-cart";

const links = [
  ["About", "/about"],
  ["Process", "/process"],
  ["Products", "/products"],
  ["Quality", "/quality"],
  ["Guides", "/guides"],
  ["FAQ", "/faq"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const cart = useCart();
  return <header className="site-header"><div className="wrap header-inner">
    <Link className="brand" href="/" onClick={() => setOpen(false)}><Image className="brand-logo" src="/logo-persevex-agro.png" alt="Persevex logo" width={299} height={400} priority /><span><strong>Persevex</strong><small>WHERE SUSTAINABLE MEETS GROWTH</small></span></Link>
    <nav className={open ? "nav open" : "nav"} aria-label="Main navigation">
      {links.map(([name, href]) => <Link key={href} href={href} aria-current={pathname === href || pathname.startsWith(`${href}/`) ? "page" : undefined} onClick={() => setOpen(false)}>{name}</Link>)}
      <Link className="nav-cta" href="/contact" aria-current={pathname === "/contact" ? "page" : undefined} onClick={() => setOpen(false)}>Get a Quote</Link>
    </nav>
    <div className="header-actions">
      <Link className="cart-nav" href="/cart" aria-label={`View cart, ${cart.count} units`} aria-current={pathname === "/cart" ? "page" : undefined} onClick={() => setOpen(false)}>
        <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 3h2l2.4 12h11.2l2-8H6" /><circle cx="9" cy="20" r="1" /><circle cx="18" cy="20" r="1" /></svg>
        <span className="cart-nav-label">Cart</span><span className="cart-badge">{cart.count}</span>
      </Link>
      <button className="menu-button" type="button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>☰</button>
    </div>
  </div></header>;
}
