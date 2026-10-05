import Link from "next/link";
import Image from "next/image";
import { phone } from "./site-data";

const footerAddress = [
  ["Building No./Flat No.", "No 9"],
  ["Road/Street", "5th block, 3rd phase"],
  ["Locality/Sub Locality", "2 Bhuvaneshwarinagar, Bsk 3rd stage"],
  ["City/Town/Village", "Bengaluru"],
  ["District", "Bengaluru Urban"],
  ["State", "Karnataka"],
  ["PIN Code", "560085"],
];

export function SiteFooter() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div>
          <Link className="brand footer-brand" href="/">
            <Image
              className="brand-logo"
              src="/logo-persevex-agro.png"
              alt="Persevex logo"
              width={400}
              height={400}
            />
            <span>
              <strong>Persevex</strong>
              <small>WHERE SUSTAINABLE MEETS GROWTH</small>
            </span>
          </Link>
          <p>Meat, fruits, vegetables and growing essentials for your home or business.</p>
        </div>
        <div>
          <h4>EXPLORE</h4>
          <Link href="/about">About</Link>
          <Link href="/process">Our Process</Link>
          <Link href="/products">Products</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/terms-and-conditions">Terms and Conditions</Link>
          <Link href="/cancellation-and-refund-policy">Cancellation & Refund Policy</Link>
        </div>
        <div>
          <h4>CONTACT</h4>
          <a href={`tel:${phone}`}>{phone}</a>
          <address className="footer-address">
            {footerAddress.map(([label, value]) => (
              <span key={label}>
                <strong>{label}:</strong> {value}
              </span>
            ))}
          </address>
        </div>
      </div>
      <div className="wrap footer-bottom">
        © {new Date().getFullYear()} Persevex. All rights reserved.
      </div>
    </footer>
  );
}
