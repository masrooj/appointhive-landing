import { headers } from "next/headers";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export async function JsonLd({ data }: JsonLdProps) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <script
      type="application/ld+json"
      nonce={nonce}
      // Browsers strip nonce from the DOM after CSP evaluation, so SSR HTML
      // and the hydrated tree always disagree on this attribute.
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
