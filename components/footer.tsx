import Image from "next/image";
import Link from "next/link";
import { legalNav } from "@/content/site";
import { ContactLink } from "./contact-link";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function FooterIcon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {name === "solutions" && <path {...stroke} d="M5 12.5 9.2 17 19 7" />}
      {name === "hosting" && (
        <>
          <path {...stroke} d="M7 17h10a3.5 3.5 0 0 0 0-7 5 5 0 0 0-9.6-1.4A3.5 3.5 0 0 0 7 17Z" />
        </>
      )}
      {name === "features" && (
        <>
          <rect {...stroke} x="4" y="4" width="6.5" height="6.5" rx="1.4" />
          <rect {...stroke} x="13.5" y="4" width="6.5" height="6.5" rx="1.4" />
          <rect {...stroke} x="4" y="13.5" width="6.5" height="6.5" rx="1.4" />
          <rect {...stroke} x="13.5" y="13.5" width="6.5" height="6.5" rx="1.4" />
        </>
      )}
      {name === "services" && <path {...stroke} d="M8 7h11M8 12h11M8 17h11M5 7h.01M5 12h.01M5 17h.01" />}
      {name === "faq" && (
        <>
          <circle {...stroke} cx="12" cy="12" r="7.2" />
          <path {...stroke} d="M9.4 9.3a2.6 2.6 0 1 1 3.4 2.5c-.7.3-1.2.9-1.2 1.6" />
          <circle cx="11.6" cy="16.2" r="0.8" fill="currentColor" />
        </>
      )}
      {name === "contact" && (
        <>
          <path {...stroke} d="M5 16.5V8.2A1.2 1.2 0 0 1 6.2 7h11.6A1.2 1.2 0 0 1 19 8.2v8.3" />
          <path {...stroke} d="M4 17.2 9.2 13l2.8 2.2L14.8 13 20 17.2" />
        </>
      )}
      {name === "mail" && (
        <>
          <rect {...stroke} x="3.5" y="5.5" width="17" height="13" rx="2" />
          <path {...stroke} d="m4.5 7 7.5 6 7.5-6" />
        </>
      )}
      {name === "instagram" && (
        <>
          <rect {...stroke} x="4" y="4" width="16" height="16" rx="4" />
          <circle {...stroke} cx="12" cy="12" r="3.4" />
          <circle cx="16.7" cy="7.3" r="0.9" fill="currentColor" />
        </>
      )}
      {name === "terms" && (
        <>
          <path {...stroke} d="M7 3.8h7.2L18.5 8v12.2H7z" />
          <path {...stroke} d="M14 3.8V8h4.5M9.5 12.2h5.5M9.5 15.5h4" />
        </>
      )}
      {name === "privacy" && <path {...stroke} d="M12 3.8 19 6.5v5.2c0 4.2-2.8 6.8-7 8.5-4.2-1.7-7-4.3-7-8.5V6.5L12 3.8Z" />}
      {name === "cookies" && (
        <>
          <circle {...stroke} cx="12" cy="12" r="7.2" />
          <circle cx="9" cy="10" r="0.9" fill="currentColor" />
          <circle cx="13.5" cy="8.5" r="0.9" fill="currentColor" />
          <circle cx="14.2" cy="13.2" r="0.9" fill="currentColor" />
        </>
      )}
      {name === "license" && (
        <>
          <circle {...stroke} cx="8.5" cy="12" r="3" />
          <path {...stroke} d="M11.2 12H20l-1.5 1.7M16.6 12v2" />
        </>
      )}
      {name === "data" && (
        <>
          <ellipse {...stroke} cx="12" cy="7" rx="6" ry="2.4" />
          <path {...stroke} d="M6 7v5c0 1.3 2.7 2.4 6 2.4s6-1.1 6-2.4V7" />
          <path {...stroke} d="M6 12v5c0 1.3 2.7 2.4 6 2.4s6-1.1 6-2.4v-5" />
        </>
      )}
      {name === "vendors" && (
        <>
          <path {...stroke} d="M4 19.5V10.2L12 5.5l8 4.7v9.3" />
          <path {...stroke} d="M10 19.5v-5h4v5" />
        </>
      )}
    </svg>
  );
}

const productLinks = [
  { href: "/#solution", label: "Solutions", icon: "solutions" },
  { href: "/#ways", label: "Hosting", icon: "hosting" },
  { href: "/#product", label: "Features", icon: "features" },
  { href: "/#services", label: "Services", icon: "services" },
  { href: "/#faq", label: "FAQ", icon: "faq" },
];

const companyLinks = [
  { href: "/#contact", label: "Contact", icon: "contact" },
  { href: "mailto:hello@appointhive.com", label: "hello@appointhive.com", icon: "mail" },
  { href: "https://www.instagram.com/appointhive/", label: "Instagram", icon: "instagram", external: true },
];

const legalIcons: Record<string, string> = {
  "/legal/terms": "terms",
  "/legal/privacy": "privacy",
  "/legal/cookies": "cookies",
  "/legal/license": "license",
  "/legal/dpa": "data",
  "/legal/subprocessors": "vendors",
};

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <div className="footer-brand">
            <Image src="/brand/logo.png" alt="AppointHive" width={1024} height={696} />
            <p>Booking, the live floor, and staff pay for barber shops and salons.</p>
          </div>
          <ContactLink className="btn btn-lime btn-small" />
        </div>

        <div className="footer-cols">
          <nav aria-label="Product">
            <p>Product</p>
            {productLinks.map((item) => (
              <a key={item.label} href={item.href}>
                <FooterIcon name={item.icon} />
                {item.label}
              </a>
            ))}
          </nav>
          <nav aria-label="Company">
            <p>Company</p>
            {companyLinks.map((item) =>
              item.external ? (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                  <FooterIcon name={item.icon} />
                  {item.label}
                </a>
              ) : (
                <a key={item.label} href={item.href}>
                  <FooterIcon name={item.icon} />
                  {item.label}
                </a>
              ),
            )}
          </nav>
          <nav aria-label="Legal">
            <p>Legal</p>
            {legalNav.map((item) => (
              <Link key={item.href} href={item.href}>
                <FooterIcon name={legalIcons[item.href] ?? "terms"} />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer-base">
          <p>© {new Date().getFullYear()} AppointHive</p>
          <p>For barber shops and salons.</p>
        </div>
      </div>
    </footer>
  );
}
