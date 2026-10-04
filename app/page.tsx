import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AddToCart } from "./components/add-to-cart";
import { products } from "./components/products-data";
import { formatPrice } from "./components/pricing";
import { ImagePanel } from "./components/image-panel";
import { faqs } from "./components/site-data";

export const metadata: Metadata = {
  title: { absolute: "Persevex | Fruits, Vegetables & Growing Essentials" },
  description: "Explore apples, oranges, bananas, potatoes and more alongside Persevex cocopeat and coir fiber. Browse products, check prices and build your order.",
};

const featuredIds = ["apples", "oranges", "bananas", "potatoes", "sweet-potatoes", "red-peppers"];
const featuredProduce = featuredIds.map(id => products.find(product => product.id === id)!);

export default function Home() {
  return <>
    <section className="hero"><div className="wrap hero-grid">
      <div className="hero-copy"><span className="eyebrow">COIR & COCOPEAT MANUFACTURER · FROM HUSK TO GROWTH</span><h1>Every husk becomes <em>growing medium</em> or useful fiber.</h1><p>Persevex transforms coconut husk into coir fiber for industry and cocopeat that helps growers maintain moisture and support healthier roots. We also offer fruits and vegetables, from apples, oranges and bananas to potatoes, sweet potatoes and red peppers.</p><div className="button-row"><Link className="button primary" href="/contact">Request Bulk Pricing</Link><Link className="button outline" href="/process">See Our Process</Link></div><div className="hero-facts"><div><strong>{products.length}</strong><span>PRODUCTS TO EXPLORE</span></div><div><strong>06</strong><span>PROCESS STEPS</span></div><div><strong>01</strong><span>SUSTAINABLE SOURCE</span></div></div></div>
      <div className="hero-image"><ImagePanel kind="seedling" label="Seedling growing in cocopeat"/></div>
    </div></section>
    <section className="trust-strip"><div className="wrap trust-grid"><div><b>✳</b><span><strong>Natural coconut coir</strong><small>Made from a renewable byproduct</small></span></div><div><b>↗</b><span><strong>For growers & industry</strong><small>Two useful materials from one husk</small></span></div><div><b>◎</b><span><strong>Bulk enquiries welcome</strong><small>Tell us what your project needs</small></span></div></div></section>
    <section className="section home-intro"><div className="wrap"><span className="section-kicker">EXPLORE PERSEVEX</span><h2>From raw husk to useful products.</h2><p>Learn how we prepare coconut coir and explore fruits and vegetables for your everyday kitchen needs.</p><div className="home-links"><Link href="/about">About us <span>→</span></Link><Link href="/process">Our process <span>→</span></Link><Link href="/products">Explore products <span>→</span></Link></div></div></section>
    <section className="section home-produce" id="fruits-and-vegetables"><div className="wrap">
      <div className="section-heading"><span className="section-kicker">FRUITS & VEGETABLES</span><h2>Colour, flavour and everyday favourites.</h2><p>Pick apples, oranges and bananas for fruit bowls and snacks, or potatoes, sweet potatoes and red peppers for your next meal. Explore the selection, check prices and add what you need to your cart.</p></div>
      <div className="product-grid">{featuredProduce.map(product => <article className="product-card" key={product.id}>
        <Link className="product-image-link" href={`/products/${product.id}`} aria-label={`View ${product.name} details`}><div className="image-panel"><Image src={product.image!} alt={product.imageLabel} fill sizes="(max-width: 600px) calc(100vw - 36px), (max-width: 720px) calc((100vw - 56px) / 2), (max-width: 1000px) calc((100vw - 76px) / 2), (max-width: 1236px) calc((100vw - 96px) / 3), 380px" style={{ objectFit: "cover" }} /></div></Link>
        <div className="product-copy"><span>{product.category}</span><h3><Link href={`/products/${product.id}`}>{product.name}</Link></h3><p>{product.description}</p><div className="product-price"><span>PRICE</span><strong>{formatPrice(product.price)}</strong><small>per {product.unit}</small></div><div className="product-actions"><AddToCart productId={product.id} /><Link href={`/products/${product.id}`}>View details →</Link></div></div>
      </article>)}</div>
      <Link className="section-more" href="/products">Explore all fruits, vegetables and products →</Link>
    </div></section>
    <section className="section faq" id="frequently-asked"><div className="wrap faq-grid"><div><span className="section-kicker">FREQUENTLY ASKED</span><h2>Questions we hear most.</h2><p>For product specifications and pricing, send us your order details.</p><Link className="text-link" href="/faq">View all FAQs →</Link></div><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>
    <section className="cta-band"><div className="wrap"><h2>Sourcing produce or growing essentials?</h2><p>Tell us your product, quantity and delivery location. We’ll help you take the next step.</p><Link className="button light" href="/contact">Request a Quote</Link></div></section>
  </>;
}
