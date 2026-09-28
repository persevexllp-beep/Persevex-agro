import type { Metadata } from "next";
import Link from "next/link";
import { processSteps } from "../components/site-data";
export const metadata: Metadata = { title: "Our Process" };
export default function Process() {
  return <><section className="section process-section inner-page"><div className="wrap"><div className="section-heading"><span className="section-kicker">HOW IT WORKS</span><h1>Six steps, one husk, two products.</h1><p>From raw material to packed product, each stage has a clear purpose.</p></div><div className="process-grid">{processSteps.map(([number, title, description]) => <article className="process-card" key={number}><span className="step-number">{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section><section className="cta-band"><div className="wrap"><h2>Have a product requirement?</h2><p>Share the quantity, format and delivery location you need.</p><Link className="button light" href="/contact">Get in Touch</Link></div></section></>;
}
