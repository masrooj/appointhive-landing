"use client";

import { useEffect, useId, useRef, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    if (!open) {
      if (wasOpen.current) {
        menuBtnRef.current?.focus();
      }
      wasOpen.current = false;
      return;
    }

    wasOpen.current = true;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    function onResize() {
      if (window.matchMedia("(min-width: 961px)").matches) setOpen(false);
    }

    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <nav className="nav-links" aria-label="Primary">
      <div className="nav-desktop">
        <div className="nav-panel">
          {links.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <ContactLink className="btn btn-lime btn-small" />
      </div>

      <button
        ref={menuBtnRef}
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="nav-toggle-bars" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </button>

      <div
        className={`nav-backdrop${open ? " is-open" : ""}`}
        aria-hidden="true"
        onClick={closeMenu}
      />

      <div
        id={panelId}
        className={`nav-drawer${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal={open}
        aria-label="Site menu"
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        <div className="nav-drawer-head">
          <p className="kicker">
            <i />
            Menu
          </p>
          <button type="button" className="nav-close" aria-label="Close menu" onClick={closeMenu}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6.5 6.5 17.5 17.5M17.5 6.5 6.5 17.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <div className="nav-drawer-links">
          {links.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="nav-drawer-cta">
          <ContactLink className="btn btn-lime" onClick={closeMenu} />
        </div>
      </div>
    </nav>
  );
}
