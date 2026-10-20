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

type IconName =
  | "solutions"
  | "tour"
  | "product"
  | "features"
  | "services"
  | "faq"
  | "salon"
  | "barber"
  | "appointment"
  | "booking"
  | "queue"
  | "payroll"
  | "contact"
  | "mail"
  | "instagram"
  | "terms"
  | "privacy"
  | "cookies"
  | "license"
  | "data"
  | "vendors";

function FooterIcon({ name }: { name: IconName }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {name === "solutions" && (
        <>
          <path {...stroke} d="M4.5 12.5 9 17l10.5-11" />
        </>
      )}
      {name === "tour" && (
        <>
          <rect {...stroke} x="3.5" y="6" width="17" height="12" rx="2.2" />
          <path {...stroke} d="M10.2 9.6v4.8L15 12z" fill="currentColor" stroke="none" />
        </>
      )}
      {name === "product" && (
        <path {...stroke} d="M7 17h10a3.5 3.5 0 0 0 0-7 5 5 0 0 0-9.6-1.4A3.5 3.5 0 0 0 7 17Z" />
      )}
      {name === "features" && (
        <>
          <rect {...stroke} x="4" y="4" width="6.5" height="6.5" rx="1.4" />
          <rect {...stroke} x="13.5" y="4" width="6.5" height="6.5" rx="1.4" />
          <rect {...stroke} x="4" y="13.5" width="6.5" height="6.5" rx="1.4" />
          <rect {...stroke} x="13.5" y="13.5" width="6.5" height="6.5" rx="1.4" />
        </>
      )}
      {name === "services" && (
        <>
          <path {...stroke} d="M8 7h11M8 12h11M8 17h11" />
          <path {...stroke} d="M4.8 7h.01M4.8 12h.01M4.8 17h.01" />
        </>
      )}
      {name === "faq" && (
        <>
          <path {...stroke} d="M5 16.5V7.2A2.2 2.2 0 0 1 7.2 5h9.6A2.2 2.2 0 0 1 19 7.2v6.1A2.2 2.2 0 0 1 16.8 15.5H9.2L5 19z" />
          <path {...stroke} d="M9.6 9.2a2.2 2.2 0 1 1 2.9 2.1c-.6.3-1 .8-1 1.4" />
          <circle cx="11.5" cy="14.6" r="0.75" fill="currentColor" />
        </>
      )}
      {name === "salon" && (
        <>
          <path {...stroke} d="M8.2 4.5c2.2 2.6 2.2 5.8 0 8.4M15.8 4.5c-2.2 2.6-2.2 5.8 0 8.4" />
          <path {...stroke} d="M9.5 12.2 7 19.5M14.5 12.2 17 19.5" />
          <circle {...stroke} cx="12" cy="11.2" r="1.3" />
        </>
      )}
      {name === "barber" && (
        <>
          <path {...stroke} d="M9 4.2h6v2.2H9zM10.2 6.4h3.6v13.2h-3.6z" />
          <path {...stroke} d="M10.2 9.2c1.2-.9 2.4-.9 3.6 0M10.2 12.4c1.2.9 2.4.9 3.6 0M10.2 15.6c1.2-.9 2.4-.9 3.6 0" />
        </>
      )}
      {name === "appointment" && (
        <>
          <rect {...stroke} x="4" y="5" width="16" height="15" rx="2" />
          <path {...stroke} d="M8 3.5v3M16 3.5v3M4 10h16" />
          <path {...stroke} d="M9 14h2M13 14h2M9 17h2" />
        </>
      )}
      {name === "booking" && (
        <>
          <circle {...stroke} cx="11" cy="11" r="6.5" />
          <path {...stroke} d="M11 4.5v13M4.5 11h13" />
          <path {...stroke} d="M16.8 16.8 20 20" />
          <circle {...stroke} cx="16.8" cy="16.8" r="2.2" />
        </>
      )}
      {name === "queue" && (
        <>
          <circle {...stroke} cx="6.2" cy="8.2" r="2" />
          <circle {...stroke} cx="12" cy="8.2" r="2" />
          <circle {...stroke} cx="17.8" cy="8.2" r="2" />
          <path {...stroke} d="M3.8 18c.4-2.2 1.8-3.4 4.4-3.4s4 1.2 4.4 3.4M9.6 18c.4-2.2 1.8-3.4 4.4-3.4s4 1.2 4.4 3.4" />
        </>
      )}
      {name === "payroll" && (
        <>
          <circle {...stroke} cx="12" cy="12" r="7.2" />
          <path {...stroke} d="M12 8.2v7.6M9.6 10.2c.5-1 1.4-1.5 2.4-1.5 1.5 0 2.5.9 2.5 2.1S13.5 13 12 13s-2.5.8-2.5 2.1c0 1.2 1 2.1 2.5 2.1 1 0 1.9-.5 2.4-1.5" />
        </>
      )}
      {name === "contact" && (
        <path
          {...stroke}
          d="M8.2 5.5h2.4l1.2 3-1.5 1a8.4 8.4 0 0 0 4.2 4.2l1-1.5 3 1.2v2.4A1.4 1.4 0 0 1 17 17.2 11.2 11.2 0 0 1 6.8 7a1.4 1.4 0 0 1 1.4-1.5Z"
        />
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
      {name === "privacy" && (
        <path {...stroke} d="M12 3.8 19 6.5v5.2c0 4.2-2.8 6.8-7 8.5-4.2-1.7-7-4.3-7-8.5V6.5L12 3.8Z" />
      )}
      {name === "cookies" && (
        <>
          <path
            {...stroke}
            d="M18.2 11.4A6.4 6.4 0 1 1 11.2 5.2c.2 1.4 1.2 2.5 2.6 2.8.2 1.5 1.4 2.7 2.9 2.9.5.9 1.1 1.3 1.5.5Z"
          />
          <circle cx="9.2" cy="11" r="0.85" fill="currentColor" />
          <circle cx="12.4" cy="14.2" r="0.85" fill="currentColor" />
          <circle cx="11" cy="8.8" r="0.7" fill="currentColor" />
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

const productLinks: { href: string; label: string; icon: IconName }[] = [
  { href: "/#solution", label: "Solutions", icon: "solutions" },
  { href: "/#tour", label: "Tour", icon: "tour" },
  { href: "/#ways", label: "Product", icon: "product" },
  { href: "/#product", label: "Features", icon: "features" },
  { href: "/#services", label: "Services", icon: "services" },
  { href: "/#faq", label: "FAQ", icon: "faq" },
];

const exploreLinks: { href: string; label: string; icon: IconName }[] = [
  { href: "/salon-booking-software", label: "Salon booking software", icon: "salon" },
  { href: "/barber-shop-software", label: "Barber shop software", icon: "barber" },
  { href: "/appointment-booking-software", label: "Appointment booking", icon: "appointment" },
  { href: "/features/online-booking", label: "Online booking", icon: "booking" },
  { href: "/features/live-queue", label: "Live queue", icon: "queue" },
  { href: "/features/salon-payroll", label: "Salon payroll", icon: "payroll" },
];

const companyLinks: { href: string; label: string; icon: IconName; external?: boolean }[] = [
  { href: "/#contact", label: "Contact", icon: "contact" },
  { href: "mailto:hello@appointhive.com", label: "hello@appointhive.com", icon: "mail" },
  {
    href: "https://www.instagram.com/appointhive/",
    label: "Instagram",
    icon: "instagram",
    external: true,
  },
];

const legalIcons: Record<string, IconName> = {
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
          <nav aria-label="Explore">
            <p>Explore</p>
            {exploreLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                <FooterIcon name={item.icon} />
                {item.label}
              </Link>
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
          <p suppressHydrationWarning>© {new Date().getFullYear()} AppointHive</p>
          <p>For barber shops and salons.</p>
        </div>
      </div>
    </footer>
  );
}
