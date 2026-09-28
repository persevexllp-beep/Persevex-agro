"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [showToast, setShowToast] = useState(false);

  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowToast(true);
    event.currentTarget.reset();
  }

  return <>
    <form className="contact-form" onSubmit={submitEnquiry} noValidate><h3>Send a quick enquiry</h3><div className="form-pair"><label>Full Name<input name="name" placeholder="Your name"/></label><label>Company<input name="company" placeholder="Company name"/></label></div><div className="form-pair"><label>Email<input name="email" type="email" placeholder="you@company.com"/></label><label>Phone<input name="phone" type="tel" placeholder="Your phone number"/></label></div><label>Interested In<select name="interest"><option>Cocopeat</option><option>Coir Fiber</option><option>Bulk / Custom Order</option></select></label><label>Message<textarea name="message" rows={4} placeholder="Quantity, delivery location, timeline..."/></label><button className="button primary" type="submit">Compose Enquiry Email</button></form>
    {showToast && <div className="enquiry-toast" role="status" aria-live="polite"><span>Query submitted, we&apos;ll get back to you soon.</span><button type="button" aria-label="Dismiss notification" onClick={() => setShowToast(false)}>×</button></div>}
  </>;
}
