import type { Metadata } from "next";
import { ContactForm } from "./contact-form";
import { address, email } from "../components/site-data";
export const metadata: Metadata = { title: "Contact & Quotes" };
export default function Contact() {
  return <section className="section contact inner-page"><div className="wrap contact-grid"><div><span className="section-kicker">GET IN TOUCH</span><h1>Let’s talk volumes.</h1><p>Send your requirements to our team and we’ll get back to you by email.</p><a className="button primary" href={`mailto:${email}`}>Email Persevex Agro</a><div className="contact-detail"><span>@</span><div><small>EMAIL</small><a href={`mailto:${email}`}>{email}</a></div></div><div className="contact-detail"><span>⌖</span><div><small>ADDRESS</small><address>{address}</address></div></div></div><ContactForm /></div></section>;
}
