import Link from "next/link";
import { ImagePanel } from "./components/image-panel";
import { faqs, guides } from "./components/site-data";

export default function Home() {
  return <>
    <section className="hero"><div className="wrap hero-grid">
      <div className="hero-copy"><span className="eyebrow">COIR & COCOPEAT MANUFACTURER · FROM HUSK TO GROWTH</span><h1>Every husk becomes <em>growing medium</em> or useful fiber.</h1><p>Persevex Agro transforms coconut husk into coir fiber for industry and cocopeat that helps growers maintain moisture and support healthier roots.</p><div className="button-row"><Link className="button primary" href="/contact">Request Bulk Pricing</Link><Link className="button outline" href="/process">See Our Process</Link></div><div className="hero-facts"><div><strong>02</strong><span>CORE PRODUCTS</span></div><div><strong>06</strong><span>PROCESS STEPS</span></div><div><strong>01</strong><span>SUSTAINABLE SOURCE</span></div></div></div>
      <div className="hero-image"><ImagePanel kind="seedling" label="Seedling growing in cocopeat"/></div>
    </div></section>
    <section className="trust-strip"><div className="wrap trust-grid"><div><b>✳</b><span><strong>Natural coconut coir</strong><small>Made from a renewable byproduct</small></span></div><div><b>↗</b><span><strong>For growers & industry</strong><small>Two useful materials from one husk</small></span></div><div><b>◎</b><span><strong>Bulk enquiries welcome</strong><small>Tell us what your project needs</small></span></div></div></section>
    <section className="section home-intro"><div className="wrap"><span className="section-kicker">EXPLORE PERSEVEX AGRO</span><h2>From raw husk to useful products.</h2><p>Learn how we prepare coconut coir and find the material that fits your needs.</p><div className="home-links"><Link href="/about">About us <span>→</span></Link><Link href="/process">Our process <span>→</span></Link><Link href="/products">Explore products <span>→</span></Link></div></div></section>
    <section className="section guides" id="learn-and-grow"><div className="wrap"><div className="section-heading"><span className="section-kicker">LEARN & GROW</span><h2>Cocopeat does more than most growers realise.</h2><p>A few simple ways to use this versatile material.</p></div><div className="guide-grid">{guides.map(([category, title, description]) => <article className="guide-card" key={title}><span>{category}</span><h3>{title}</h3><p>{description}</p></article>)}</div><Link className="section-more" href="/guides">Explore the guides →</Link></div></section>
    <section className="section faq" id="frequently-asked"><div className="wrap faq-grid"><div><span className="section-kicker">FREQUENTLY ASKED</span><h2>Questions we hear most.</h2><p>For product specifications and pricing, send us your order details.</p><Link className="text-link" href="/faq">View all FAQs →</Link></div><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>
    <section className="cta-band"><div className="wrap"><h2>Sourcing cocopeat or coir fiber?</h2><p>Tell us your product, quantity and delivery location. We’ll help you take the next step.</p><Link className="button light" href="/contact">Request a Quote</Link></div></section>
  </>;
}
