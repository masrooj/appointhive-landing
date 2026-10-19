import { ContactLink } from "./contact-link";

const links = [
  { href: "/", label: "Home" },
  { href: "/#solution", label: "Solutions" },
  { href: "/#tour", label: "Tour" },
  { href: "/#ways", label: "Product" },
  { href: "/#product", label: "Features" },
  { href: "/#services", label: "Services" },
];

export function SiteNav() {
  return (
    <nav className="nav-links" aria-label="Primary">
      <div className="nav-panel">
        {links.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </div>
      <ContactLink className="btn btn-lime btn-small" />
    </nav>
  );
}
