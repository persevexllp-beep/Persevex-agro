import type { Metadata } from "next";
import { ContactForm } from "./contact-form";
import { address, phone } from "../components/site-data";
export const metadata: Metadata = { title: "Contact & Quotes" };
export default function Contact() {
  return <section className="section contact inner-page"><div className="wrap contact-grid"><div><span className="section-kicker">GET IN TOUCH</span><h1>Let’s talk volumes.</h1><p>Call our team to discuss products, quantities and delivery requirements.</p><a className="button primary" href={`tel:${phone}`}>Call Persevex</a><div className="contact-detail"><span>☎</span><div><small>PHONE</small><a href={`tel:${phone}`}>{phone}</a></div></div><div className="contact-detail"><span>⌖</span><div><small>ADDRESS</small><address>{address}</address></div></div></div><ContactForm /></div></section>;
}
