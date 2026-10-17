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

  return (
    <aside className="cookie" role="dialog" aria-label="Cookie notice">
      <p>
        This marketing site does not set advertising cookies. A dismissal stays in this browser.{" "}
        <Link href="/legal/cookies">Cookie details</Link>
      </p>
      <button
        className="btn btn-ink btn-small"
        type="button"
        onClick={() => {
          window.localStorage.setItem(KEY, "dismissed");
          setVisible(false);
        }}
      >
        OK
      </button>
    </aside>
  );
}
