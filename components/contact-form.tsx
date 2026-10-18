"use client";

import Link from "next/link";
import { useState } from "react";
import { csrfCookieName, csrfHeaderName } from "@/lib/csrf";

type Interest = "STANDALONE" | "SAAS" | "NOT_SURE";

function readCsrfCookie(): string {
  if (typeof document === "undefined") return "";
  const parts = document.cookie.split(";");
  for (const part of parts) {
    const [name, ...rest] = part.trim().split("=");
    if (name === csrfCookieName) {
      return decodeURIComponent(rest.join("=")).trim();
    }
  }
  return "";
}

export function ContactForm() {
  const [interest, setInterest] = useState<Interest>("STANDALONE");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");
    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      business: String(form.get("business") ?? ""),
      email: String(form.get("email") ?? ""),
      message: String(form.get("message") ?? ""),
      productInterest: interest,
      consent: form.get("consent") === "on",
      companyWebsite: String(form.get("companyWebsite") ?? ""),
    };

    try {
      const csrf = readCsrfCookie();
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(csrf ? { [csrfHeaderName]: csrf } : {}),
        },
        body: JSON.stringify(payload),
      });
      const body = (await response.json()) as { error?: unknown };
      if (!response.ok) {
        setStatus("error");
        setError(typeof body.error === "string" ? body.error : "The note did not send. Email hello@appointhive.com.");
        return;
      }
      setStatus("sent");
    } catch {
      setStatus("error");
      setError("The note did not send. Email hello@appointhive.com.");
    }
  }

  if (status === "sent") {
    return (
      <div className="form-success" role="status">
        <h2 className="display" style={{ fontSize: "2.2rem", margin: 0 }}>
          Sent.
        </h2>
        <p>It’s on its way to hello@appointhive.com.</p>
      </div>
    );
  }

  return (
    <>
      <noscript>
        <p className="form-error">
          JavaScript is needed for this form. Email{" "}
          <a href="mailto:hello@appointhive.com">hello@appointhive.com</a> instead.
        </p>
      </noscript>
      <form className="form" onSubmit={onSubmit}>
        <label>
          <span>Interest</span>
          <select name="productInterest" value={interest} onChange={(event) => setInterest(event.target.value as Interest)}>
            <option value="STANDALONE">Standalone install</option>
            <option value="SAAS">Hosted</option>
            <option value="NOT_SURE">Not sure</option>
          </select>
        </label>
        <div className="form-row">
          <label>
            <span>Name</span>
            <input name="name" autoComplete="name" required maxLength={200} />
          </label>
          <label>
            <span>Shop</span>
            <input name="business" autoComplete="organization" required maxLength={200} />
          </label>
        </div>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required maxLength={200} />
        </label>
        <label>
          <span>Message</span>
          <textarea name="message" required maxLength={5000} placeholder="How many chairs, and do you want to host it?" />
        </label>
        <label className="hp" aria-hidden="true">
          Website
          <input name="companyWebsite" tabIndex={-1} autoComplete="off" />
        </label>
        <label className="consent">
          <input name="consent" type="checkbox" required />
          <span>
            I agree to be contacted, and I’ve read the <Link href="/legal/privacy">privacy note</Link>.
          </span>
        </label>
        {error ? <p className="form-error">{error}</p> : null}
        <button className="btn btn-lime" type="submit" disabled={status === "sending"}>
          {status === "sending" ? null : (
            <svg className="btn-icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3.5" y="5.5" width="17" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
              <path d="m4.5 7 7.5 6 7.5-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
          {status === "sending" ? "Sending…" : "Contact us"}
        </button>
      </form>
    </>
  );
}
