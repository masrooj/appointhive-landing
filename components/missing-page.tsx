import Link from "next/link";
import { ContactLink } from "./contact-link";

const menu = [
  { href: "/", label: "Home" },
  { href: "/#solution", label: "Solutions" },
  { href: "/#tour", label: "Tour" },
  { href: "/#ways", label: "Hosting" },
  { href: "/#product", label: "Features" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
];

const explore = [
  { href: "/salon-booking-software", label: "Salon booking software" },
  { href: "/barber-shop-software", label: "Barber shop software" },
  { href: "/appointment-booking-software", label: "Appointment booking" },
  { href: "/features/online-booking", label: "Online booking" },
  { href: "/features/live-queue", label: "Live queue" },
  { href: "/features/salon-payroll", label: "Salon payroll" },
];

type Props = {
  title?: string;
  lede?: string;
  kicker?: string;
  showReset?: boolean;
  onReset?: () => void;
};

export function MissingPage({
  title = "That page isn’t on the floor.",
  lede = "The link may be old, mistyped, or the page moved. Use the menu below to get back to AppointHive.",
  kicker = "Missing page",
  showReset = false,
  onReset,
}: Props) {
  return (
    <section className="missing">
      <div className="shell">
        <p className="kicker">
          <i />
          {kicker}
        </p>
        <h1 className="display">{title}</h1>
        <p className="missing-lede">{lede}</p>

        <div className="missing-actions">
          <Link className="btn btn-lime" href="/">
            Back to home
          </Link>
          <ContactLink className="btn btn-ghost" />
          {showReset && onReset ? (
            <button className="btn btn-ghost" type="button" onClick={onReset}>
              Try again
            </button>
          ) : null}
        </div>

        <nav className="missing-nav" aria-label="Site menu">
          <p>Menu</p>
          <ul>
            {menu.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="missing-nav" aria-label="Explore">
          <p>Explore</p>
          <ul>
            {explore.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
