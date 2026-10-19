"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const KEY = "ah-cookie-notice";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(window.localStorage.getItem(KEY) !== "dismissed");
  }, []);

  if (!visible) return null;

  function dismiss() {
    window.localStorage.setItem(KEY, "dismissed");
    setVisible(false);
  }

  return (
    <aside className="cookie" role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-desc">
      <div className="cookie-copy">
        <p id="cookie-title" className="cookie-title">
          Essential cookies only
        </p>
        <p id="cookie-desc">
          We use one first-party cookie to protect the contact form. We do not use advertising or
          third-party tracking cookies.{" "}
          <Link href="/legal/cookies">Read our cookie policy</Link>
        </p>
      </div>
      <div className="cookie-actions">
        <button className="btn btn-ink btn-small" type="button" onClick={dismiss}>
          Accept
        </button>
      </div>
    </aside>
  );
}
