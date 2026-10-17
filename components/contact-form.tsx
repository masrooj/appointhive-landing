"use client";

import Link from "next/link";
import { useState } from "react";

type Interest = "STANDALONE" | "SAAS" | "NOT_SURE";

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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = (await response.json()) as { error?: string };
      if (!response.ok) {
        setStatus("error");
        setError(body.error ?? "The note did not send. Email hello@appointhive.com.");
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
        {status === "sending" ? "Sending…" : "Contact us"}
      </button>
    </form>
  );
}
