export type LegalSlug = "terms" | "privacy" | "cookies" | "license" | "dpa" | "subprocessors";

export const legalPages: Record<
  LegalSlug,
  { title: string; lede: string; sections: { heading: string; body: string[] }[] }
> = {
  terms: {
    title: "Terms",
    lede: "AppointHive is sold two ways. These notes say which agreement applies. The document you sign controls.",
    sections: [
      {
        heading: "Standalone",
        body: [
          "A Standalone purchase is a single-business license on infrastructure you run. It is sales-led. It does not include SaaS rent, dunning, or a public signup for many businesses.",
          "Commercial terms for that license are the Standalone terms delivered with the sale.",
        ],
      },
      {
        heading: "Hosted SaaS",
        body: [
          "A SaaS subscription is the workspace we host. Fees, trial, suspension, and cancellation follow the SaaS terms. A SaaS subscription does not include Standalone install rights.",
        ],
      },
      {
        heading: "This website",
        body: [
          "Prices shown here are illustrative until the live catalog responds. Submitting the contact form is a request for a demo or a conversation, not a completed purchase.",
        ],
      },
    ],
  },
  privacy: {
    title: "Privacy",
    lede: "What this marketing site handles, and where customer data actually lives.",
    sections: [
      {
        heading: "Inquiries",
        body: [
          "The contact form collects your name, business, email, message, product interest, and an optional plan or edition. We use that to reply. Do not send client lists or payment card numbers through the form.",
        ],
      },
      {
        heading: "Standalone installs",
        body: [
          "On a Standalone install, your clients’ booking data stays on infrastructure you control. AppointHive, as licensor, does not operate that database.",
        ],
      },
      {
        heading: "Hosted SaaS",
        body: [
          "On SaaS, the hosted service processes account, business, and end-customer data under the SaaS privacy policy and, where it applies, the data processing addendum.",
        ],
      },
    ],
  },
  cookies: {
    title: "Cookies",
    lede: "This marketing site does not run advertising cookies.",
    sections: [
      {
        heading: "What we store",
        body: [
          "Dismissing the notice saves a preference in local storage on your browser. That is not sent to a third-party ad network.",
          "The hosted product and a Standalone install have their own cookie notices. Those apply when you use the product, not this page.",
        ],
      },
    ],
  },
  license: {
    title: "License",
    lede: "Standalone is a license for one business on your servers. Hosted is a subscription to a workspace we run. They are not the same agreement.",
    sections: [
      {
        heading: "Standalone license",
        body: [
          "You receive a license, not a sale of the software. It covers one business. It is not a right to resell AppointHive as a multi-tenant platform, and it does not include the hosted control plane.",
          "The license is sales-led. Scope is agreed before install. It is not a monthly rent for the hosted service.",
        ],
      },
      {
        heading: "Hosted subscription",
        body: [
          "A hosted subscription is a limited right to use the service we run. It does not include source code and it does not include Standalone rights.",
          "Billing is monthly or annual. A trial, cancellation, and upgrades follow the hosted agreement, not the Standalone license.",
        ],
      },
    ],
  },
  dpa: {
    title: "Data processing addendum",
    lede: "The addendum covers the hosted SaaS service. It does not cover a Standalone install.",
    sections: [
      {
        heading: "Hosted processing",
        body: [
          "When AppointHive hosts the workspace, we process personal data on your instructions as described in the SaaS data processing addendum delivered with that subscription.",
        ],
      },
      {
        heading: "Your install",
        body: [
          "On Standalone, you host the software. Client and staff data remains in your environment. You are responsible for that processing.",
        ],
      },
    ],
  },
  subprocessors: {
    title: "Subprocessors",
    lede: "Subprocessors are vendors that help run the hosted service. They are not your Standalone servers.",
    sections: [
      {
        heading: "Hosted SaaS",
        body: [
          "The current subprocessor list ships with the SaaS agreement. This marketing site does not add analytics or advertising vendors of its own.",
        ],
      },
      {
        heading: "Standalone",
        body: [
          "A Standalone install runs on infrastructure you choose. Those machines are yours. They are not listed here as AppointHive subprocessors.",
        ],
      },
    ],
  },
};

export const legalNav: { href: string; label: string }[] = [
  { href: "/legal/terms", label: "Terms" },
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/cookies", label: "Cookies" },
  { href: "/legal/license", label: "License" },
  { href: "/legal/dpa", label: "DPA" },
  { href: "/legal/subprocessors", label: "Subprocessors" },
];
