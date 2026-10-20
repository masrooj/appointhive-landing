"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const KEY = "ah-cookie-notice";

export function CookieNotice() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(window.localStorage.getItem(KEY) !== "dismissed");
  }, []);

  // Hide on legal pages so the policy link can actually reveal the content.
  if (!visible || pathname?.startsWith("/legal")) return null;

  function dismiss() {
    window.localStorage.setItem(KEY, "dismissed");
    setVisible(false);
  }

  return (
    <aside
      className="cookie-notice"
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
    >
      <div className="cookie-notice-copy">
        <strong id="cookie-title" className="cookie-notice-title">
          Essential cookies only
        </strong>
        <p id="cookie-desc" className="cookie-notice-desc">
          We use one first-party cookie to protect the contact form. We do not use advertising or
          third-party tracking cookies.{" "}
          <Link href="/legal/cookies" prefetch>
            Read our cookie policy
          </Link>
        </p>
      </div>
      <div className="cookie-notice-actions">
        <button className="btn btn-lime btn-small" type="button" onClick={dismiss}>
          Accept
        </button>
      </div>
    </aside>
  );
}
