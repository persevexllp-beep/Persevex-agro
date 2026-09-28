"use client";

import { FormEvent } from "react";
import { email } from "../components/site-data";

export function ContactForm() {
  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Persevex Agro enquiry — ${data.get("interest")}`;
    const body = [`Name: ${data.get("name")}`, `Company: ${data.get("company")}`, `Email: ${data.get("email")}`, `Phone: ${data.get("phone")}`, `Interested in: ${data.get("interest")}`, "", String(data.get("message") || "")].join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return <form className="contact-form" onSubmit={submitEnquiry}><h3>Send a quick enquiry</h3><div className="form-pair"><label>Full Name<input name="name" required placeholder="Your name"/></label><label>Company<input name="company" placeholder="Company name"/></label></div><div className="form-pair"><label>Email<input name="email" type="email" required placeholder="you@company.com"/></label><label>Phone<input name="phone" type="tel" placeholder="Your phone number"/></label></div><label>Interested In<select name="interest"><option>Cocopeat</option><option>Coir Fiber</option><option>Bulk / Custom Order</option></select></label><label>Message<textarea name="message" rows={4} placeholder="Quantity, delivery location, timeline..."/></label><button className="button primary" type="submit">Compose Enquiry Email</button><small>This opens your email app with the enquiry filled in.</small></form>;
}
