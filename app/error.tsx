"use client";

import { MissingPage } from "@/components/missing-page";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <MissingPage
      kicker="Something went wrong"
      title="We lost that cut mid-way."
      lede="Refresh, or use the menu to get back to AppointHive. No need to dig into error details."
      showReset
      onReset={reset}
    />
  );
}
