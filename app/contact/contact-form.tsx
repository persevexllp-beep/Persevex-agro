"use client";

import { products } from "../components/products-data";
import { phone } from "../components/site-data";
import { FormEvent } from "react";

export function ContactForm() {
  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const value = (name: string) => String(fields.get(name) ?? "").trim();
    const body = ["Product enquiry", `Name: ${value("name")}`, `Company: ${value("company")}`, `Phone: ${value("phone")}`, `Interested in: ${value("interest")}`, `Requirements: ${value("message")}`].join("\n");
    window.location.href = `sms:${phone}?body=${encodeURIComponent(body)}`;
  }

  return <form className="contact-form" onSubmit={submitEnquiry}>
    <h3>Prepare a quick enquiry</h3>
    <div className="form-pair"><label>Full Name<input name="name" placeholder="Your name" required autoComplete="name" /></label><label>Company<input name="company" placeholder="Company name (optional)" /></label></div>
    <label>Phone<input name="phone" type="tel" placeholder="Your phone number" required autoComplete="tel" /></label>
    <label>Interested In<select name="interest">{products.map(product => <option key={product.id}>{product.name}</option>)}<option>Bulk / Custom Order</option></select></label>
    <label>Message<textarea name="message" rows={4} placeholder="Quantity, preferred cuts, delivery location, timeline..." required /></label>
    <button className="button primary" type="submit">Open text message draft →</button>
    <small>Review and send the draft in your messaging app, or call <a href={`tel:${phone}`}>{phone}</a> to discuss your requirements.</small>
  </form>;
}
