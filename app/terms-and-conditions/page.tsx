import type { Metadata } from "next";
import { email } from "../components/site-data";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and conditions for using the Persevex website.",
};

export default function TermsAndConditions() {
  return <section className="section legal-page inner-page"><div className="wrap legal-wrap">
    <span className="section-kicker">PERSEVEX</span>
    <h1>Terms and Conditions</h1>
    <p className="legal-updated">Last updated: 29 September 2026</p>
    <p>These terms describe how you may use the Persevex website. Please read them alongside any separate written quotation or agreement you receive from us.</p>

    <section><h2>1. Website information</h2><p>This website provides general information about Persevex, cocopeat, coir fiber, and related uses. Content may be updated, corrected, or removed. Product images and descriptions are illustrative; actual specifications, availability, packing, pricing, and delivery terms must be confirmed in writing for each order.</p></section>

    <section><h2>2. Enquiries and orders</h2><p>Information shown on this website is not an offer to sell. An enquiry does not create an order or a supply commitment. A transaction is agreed only when Persevex and the customer confirm its terms in writing.</p><p>The on-screen enquiry experience currently displays an acknowledgement but does not transmit the entered details to us. To reach us, email <a href={`mailto:${email}`}>{email}</a>.</p></section>

    <section><h2>3. Using the website</h2><p>You may use the website for lawful, personal, or business information purposes. Please do not interfere with its operation, attempt unauthorized access, introduce harmful code, or use its content in a way that infringes another person’s rights.</p></section>

    <section><h2>4. Content rights</h2><p>The text, branding, layout, and other material on this website belong to Persevex or their respective rights holders. You may view and share links to the site. Reproducing substantial content for commercial use requires permission from the relevant rights holder.</p></section>

    <section><h2>5. Product guidance</h2><p>Growing outcomes depend on the crop, environment, preparation, and application. General guidance on this website should be checked against the specification needed for your intended use. Ask us for current product details before relying on a particular characteristic.</p></section>

    <section><h2>6. Availability and liability</h2><p>We aim to keep the website available and accurate, but interruptions and errors may occur. To the extent permitted by applicable law, Persevex is not responsible for loss caused solely by reliance on general website information. Nothing in these terms limits rights or remedies that cannot lawfully be excluded.</p></section>

    <section><h2>7. Changes and applicable law</h2><p>We may revise these terms as the website changes. The date above shows the latest version. These terms are governed by the laws of India, subject to any mandatory rights that apply to you. Any dispute relating to website use is subject to the courts with jurisdiction in Bengaluru, Karnataka, where permitted by law.</p></section>

    <section><h2>8. Contact</h2><p>For questions about these terms, write to <a href={`mailto:${email}`}>{email}</a>.</p></section>
  </div></section>;
}
