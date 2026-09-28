"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  return <header className="site-header"><div className="wrap header-inner">
    <Link className="brand" href="/" onClick={() => setOpen(false)}><Image className="brand-logo" src="/logo-persevex-agro.png" alt="Persevex Agro logo" width={299} height={400} priority /><span><strong>Persevex Agro</strong><small>WHERE SUSTAINABLE MEETS GROWTH</small></span></Link>
    <button className="menu-button" type="button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>☰</button>
    <nav className={open ? "nav open" : "nav"} aria-label="Main navigation">
      {links.map(([name, href]) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)}>{name}</Link>)}
      <Link className="nav-cta" href="/contact" aria-current={pathname === "/contact" ? "page" : undefined} onClick={() => setOpen(false)}>Get a Quote</Link>
    </nav>
  </div></header>;
}
