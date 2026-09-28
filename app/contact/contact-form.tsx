"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

export function ContactForm() {
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;
    const form = event.currentTarget;
    setShowToast(false);
    setIsSubmitting(true);
    timerRef.current = setTimeout(() => {
      form.reset();
      setIsSubmitting(false);
      setShowToast(true);
      timerRef.current = null;
    }, 1000);
  }

  return <>
    <form className="contact-form" onSubmit={submitEnquiry} noValidate aria-busy={isSubmitting}><h3>Send a quick enquiry</h3><div className="form-pair"><label>Full Name<input name="name" placeholder="Your name"/></label><label>Company<input name="company" placeholder="Company name"/></label></div><div className="form-pair"><label>Email<input name="email" type="email" placeholder="you@company.com"/></label><label>Phone<input name="phone" type="tel" placeholder="Your phone number"/></label></div><label>Interested In<select name="interest"><option>Cocopeat</option><option>Coir Fiber</option><option>Bulk / Custom Order</option></select></label><label>Message<textarea name="message" rows={4} placeholder="Quantity, delivery location, timeline..."/></label><button className="button primary submit-button" type="submit" disabled={isSubmitting}>{isSubmitting ? <><span className="submit-spinner" aria-hidden="true"/>Submitting...</> : "Compose Enquiry Email"}</button></form>
    {showToast && <div className="enquiry-toast" role="status" aria-live="polite"><span>Query submitted, we&apos;ll get back to you soon.</span><button type="button" aria-label="Dismiss notification" onClick={() => setShowToast(false)}>×</button></div>}
  </>;
}
