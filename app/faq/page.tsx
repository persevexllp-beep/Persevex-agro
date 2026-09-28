import type { Metadata } from "next";
import Link from "next/link";
import { faqs } from "../components/site-data";
export const metadata: Metadata = { title: "FAQ" };
export default function FAQ() {
  return <section className="section faq inner-page"><div className="wrap faq-grid"><div><span className="section-kicker">FREQUENTLY ASKED</span><h1>Questions we hear most.</h1><p>For product specifications and pricing, send us your order details.</p><Link className="text-link" href="/contact">Send an enquiry →</Link></div><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>;
}
