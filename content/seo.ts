export type FaqItem = { question: string; answer: string };

export type ComparisonTable = {
  headers: string[];
  rows: string[][];
};

export type IntentPage = {
  slug: string;
  path: string;
  title: string;
  description: string;
  kicker: string;
  h1: string;
  definition: string;
  lede: string;
  image: { src: string; alt: string };
  sections: { heading: string; body: string[] }[];
  bullets: string[];
  faqs: FaqItem[];
  related: { href: string; label: string }[];
  comparison?: ComparisonTable;
};

export const brandDescription =
  "AppointHive runs booking, the live floor, and staff pay for barber shops and salons. Clients book online, the shop shares one queue, and commission comes from the same visit.";

export const defaultKeywords = [
  "salon booking software",
  "barber shop appointment system",
  "appointment booking software",
  "salon queue management",
  "salon payroll software",
  "online booking for salons",
  "barber booking app",
  "multi-location salon booking",
];

export const intentPages: IntentPage[] = [
  {
    slug: "salon-booking-software",
    path: "/salon-booking-software",
    title: "Salon booking software for chairs, queue & pay",
    description:
      "Salon booking software that lets clients book themselves, keeps one live queue on the floor, and builds staff pay from the same visit. Hosted or on your servers.",
    kicker: "For salons",
    h1: "Salon booking software that stays with the chair.",
    definition:
      "AppointHive is salon booking software for shops that need online appointments, a live floor queue, and staff pay from one visit record. Clients book without creating an account. You run Hosted cloud or a Standalone install on your own servers.",
    lede: "Stop pausing the cut to answer the phone. Clients pick a time. The floor sees the same list. Pay is ready before you lock up.",
    image: {
      src: "/film/solve-book.jpg",
      alt: "A client booking a salon appointment on their phone while a haircut continues",
    },
    sections: [
      {
        heading: "What salon booking software should do",
        body: [
          "Good salon booking software is not only a public calendar. It has to survive a busy floor: walk-ins, rebooks, no-shows, and staff who need the next name without a debate.",
          "AppointHive keeps booking, visit status, reminders, and commission on the same visit. That is how Sunday payroll stops being a calculator session.",
        ],
      },
      {
        heading: "Online booking your clients actually use",
        body: [
          "Clients book on a page that carries your branding, or through an embed on your site. They choose a time. You get a ping. They get a confirmation and reminders by email.",
          "Assign the chair by least busy, round robin, highest rated, or by hand. Multi-location shops keep one product across addresses.",
        ],
      },
      {
        heading: "Hosted or Standalone",
        body: [
          "Hosted is the same product on infrastructure we run: trial, monthly or annual, cancel when you want.",
          "Standalone is a single-business license on servers you control. Sales-led. No public signup for other shops, and it does not phone home to check a license.",
        ],
      },
    ],
    bullets: [
      "Online booking and website embed",
      "Live queue with walk-ins on the same list",
      "Email confirmations and reminders",
      "Reports, commission, and payslip PDF",
      "English, Spanish, or French on the floor",
      "Customers never create a login",
    ],
    faqs: [
      {
        question: "What is salon booking software?",
        answer:
          "Salon booking software lets clients reserve appointments online and helps the shop run the day—queue, staff, reminders, and often pay—from those visits. AppointHive is built for salons and barber shops that need booking plus a live floor and staff pay.",
      },
      {
        question: "Can clients book without creating an account?",
        answer:
          "Yes. On AppointHive, customers never create a login. They book, get email confirmation, and show up. History stays on the visit for the shop.",
      },
      {
        question: "Does AppointHive support more than one salon location?",
        answer:
          "Yes. You can run more than one location in the same product, with booking and reports that respect each address.",
      },
      {
        question: "Is AppointHive only a cloud subscription?",
        answer:
          "No. Hosted SaaS is one option. Standalone is a single-business install on infrastructure you control, sold as a license rather than monthly rent.",
      },
      {
        question: "Does salon booking software include payroll?",
        answer:
          "Many tools stop at the appointment. AppointHive ties commission, revenue, and payslip PDFs to the same visit record so pay is ready at close.",
      },
    ],
    related: [
      { href: "/barber-shop-software", label: "Barber shop software" },
      { href: "/appointment-booking-software", label: "Appointment booking software" },
      { href: "/features/online-booking", label: "Online booking" },
      { href: "/features/salon-payroll", label: "Salon payroll" },
      { href: "/guides/salon-commission-from-visits", label: "Salon commission from visits" },
      { href: "/alternatives/fresha-alternative", label: "Fresha alternative" },
    ],
  },
  {
    slug: "barber-shop-software",
    path: "/barber-shop-software",
    title: "Barber shop software for booking, queue & pay",
    description:
      "Barber shop appointment software for online booking, a live chair queue, walk-ins, and commission from the same visit. Built for real floors, not paper diaries.",
    kicker: "For barber shops",
    h1: "Barber shop software for the floor, not the inbox.",
    definition:
      "AppointHive is barber shop software that combines online appointments, a live queue everyone can see, and staff pay from each visit. Walk-ins land on the same list as booked cuts. Run it hosted in the cloud or as a Standalone install you own.",
    lede: "Phones ring mid-cut. Staff argue who’s next. Sunday becomes a calculator. AppointHive handles those three moments in one product.",
    image: {
      src: "/film/floor.jpg",
      alt: "A real barbershop floor with chairs and someone waiting",
    },
    sections: [
      {
        heading: "Built for barber shop appointment systems",
        body: [
          "A barber shop appointment system has to respect the chair. The cut should not stop so someone can find a free slot in a paper book.",
          "Clients book themselves. The floor shares one live list. Waiting, in the chair, done—walk-ins included.",
        ],
      },
      {
        heading: "From the desk to the payslip",
        body: [
          "Staff profiles, leave, timesheets, and floor access by PIN or magic link keep the day moving.",
          "At close, reports by staff and service feed commission you can explain. The payslip PDF comes from the same visit that started as a booking.",
        ],
      },
      {
        heading: "Two ways to run the shop",
        body: [
          "Standalone puts the product on machines in your back room or your host—one business, sales-led license.",
          "Hosted means we run the cloud. Same features. Monthly or annual with a short trial.",
        ],
      },
    ],
    bullets: [
      "Public booking page with your branding",
      "Smart chair assignment or pick by hand",
      "Live queue and walk-ins",
      "Customer history without customer logins",
      "Waitlist with a time-limited claim",
      "Commission and payslip from the visit",
    ],
    faqs: [
      {
        question: "What is barber shop appointment software?",
        answer:
          "It is software that lets clients book cuts online and helps the shop run the floor—who is next, who is in the chair, and often how staff are paid. AppointHive is appointment software made for barber shops and salons.",
      },
      {
        question: "Can walk-ins use the same queue as bookings?",
        answer:
          "Yes. Walk-ins land on the same live list as booked visits, so the floor has one answer for who’s next.",
      },
      {
        question: "Do barbers need phones for every booking?",
        answer:
          "No. Clients book themselves online. You get a notification. The chair stays in the cut instead of answering every call.",
      },
      {
        question: "Does AppointHive work for a single-chair shop?",
        answer:
          "Yes. Standalone and Hosted both work for one business. Scale to more chairs and locations when you need them.",
      },
      {
        question: "Is there a barber booking app for clients?",
        answer:
          "Clients use your booking page or embed on the web—no separate customer app login. Staff use the workspace on phone or desk for the live floor.",
      },
    ],
    related: [
      { href: "/salon-booking-software", label: "Salon booking software" },
      { href: "/features/live-queue", label: "Live queue" },
      { href: "/appointment-booking-software", label: "Appointment booking software" },
      { href: "/features/online-booking", label: "Online booking" },
      { href: "/guides/barbershop-walk-in-queue", label: "Barbershop walk-in queue" },
      { href: "/compare/appointhive-vs-fresha", label: "AppointHive vs Fresha" },
    ],
  },
  {
    slug: "appointment-booking-software",
    path: "/appointment-booking-software",
    title: "Appointment booking software for salons & barbers",
    description:
      "Appointment booking software for barber shops and salons: online scheduling, confirmations, live floor queue, and staff pay from one visit record.",
    kicker: "Appointment operations",
    h1: "Appointment booking software that runs the whole visit.",
    definition:
      "AppointHive is appointment booking software for service shops—especially barber shops and salons—where the booking must connect to the live floor and to pay. One visit record feeds confirmation email, queue status, reports, and commission.",
    lede: "An appointment application should do more than hold a time slot. It should carry the visit from book to payslip.",
    image: {
      src: "/film/hero-devices.jpg",
      alt: "Laptop and phone on a barber counter showing AppointHive booking and dashboard",
    },
    sections: [
      {
        heading: "From appointment application to operations",
        body: [
          "Many appointment applications stop when the slot is reserved. Shops still juggle walk-ins, reminders, and payroll in other tools.",
          "AppointHive treats the booking as the start of a visit: status, history, email, reports, and payroll read the same record.",
        ],
      },
      {
        heading: "What you get in the booking layer",
        body: [
          "Online booking, website embed, multi-location, chair assignment rules, visit statuses from booked through done, and email confirmation plus reminders.",
          "Your branding and a business page you can edit. WhatsApp only after a Meta-approved number.",
        ],
      },
      {
        heading: "Who it is for",
        body: [
          "Barber shops and salons that want booking software without forcing clients to create accounts.",
          "Owners who want Hosted convenience or a Standalone license on their own infrastructure.",
        ],
      },
    ],
    bullets: [
      "Self-serve online booking",
      "Embed for your website",
      "Confirmations and reminders",
      "Live queue after the booking",
      "Reports and CSV export",
      "Hosted SaaS or Standalone license",
    ],
    faqs: [
      {
        question: "What is appointment booking software?",
        answer:
          "Appointment booking software lets clients reserve a time online and helps the business confirm, remind, and manage that visit. AppointHive also connects the appointment to the live floor queue and staff pay.",
      },
      {
        question: "Is AppointHive a general appointment application?",
        answer:
          "It is focused on barber shops and salons—booking, floor queue, and staff pay—rather than every industry vertical.",
      },
      {
        question: "How do appointment reminders work?",
        answer:
          "Email confirmation and reminders are part of the product. WhatsApp is available only after a Meta-approved number.",
      },
      {
        question: "Can I embed booking on my website?",
        answer:
          "Yes. Online booking includes an embed for your site, plus a branded business page you can edit.",
      },
      {
        question: "What’s the difference between Hosted and Standalone?",
        answer:
          "Hosted is a subscription on infrastructure we run. Standalone is a single-business license on servers you control. The feature list is the same product; hosting is the split.",
      },
    ],
    related: [
      { href: "/salon-booking-software", label: "Salon booking software" },
      { href: "/barber-shop-software", label: "Barber shop software" },
      { href: "/features/online-booking", label: "Online booking features" },
      { href: "/features/live-queue", label: "Live queue features" },
      { href: "/alternatives/vagaro-alternative", label: "Vagaro alternative" },
    ],
  },
];

export const featurePages: IntentPage[] = [
  {
    slug: "online-booking",
    path: "/features/online-booking",
    title: "Online booking for salons and barber shops",
    description:
      "Online booking with branding, website embed, multi-location, chair assignment, and email confirmations—built into AppointHive.",
    kicker: "Feature",
    h1: "Online booking clients finish without a call.",
    definition:
      "AppointHive online booking lets salon and barber shop clients pick a time on your branded page or site embed. They get confirmation by email. You get the visit on the same record the floor and payroll will use.",
    lede: "They pick a time. You get a ping. The chair stays in the cut.",
    image: {
      src: "/product/book.jpg",
      alt: "Elite Cuts public booking page on the hosted AppointHive app",
    },
    sections: [
      {
        heading: "Booking that matches the shop",
        body: [
          "Your branding, a business page you can edit, and an embed for your website. More than one location when you need it.",
          "Assign the chair by least busy, round robin, highest rated, or by hand. Visit statuses run from booked through done.",
        ],
      },
      {
        heading: "After they book",
        body: [
          "Email confirmation and reminders keep the slot honest. The visit feeds the live queue, customer history, and later the payslip—no separate systems to reconcile.",
        ],
      },
    ],
    bullets: [
      "Branded booking page",
      "Website embed",
      "Multi-location",
      "Chair assignment rules",
      "Email confirmation and reminders",
      "No customer login",
    ],
    faqs: [
      {
        question: "Can I embed online booking on my salon website?",
        answer: "Yes. AppointHive includes an embed for your site as well as a standalone branded booking page.",
      },
      {
        question: "Do clients need an app to book?",
        answer: "No. They book on the web. Customers never create a login.",
      },
      {
        question: "Can I choose which barber or stylist gets the booking?",
        answer:
          "Yes. Assign by least busy, round robin, highest rated, or pick the chair by hand.",
      },
    ],
    related: [
      { href: "/salon-booking-software", label: "Salon booking software" },
      { href: "/features/live-queue", label: "Live queue" },
      { href: "/appointment-booking-software", label: "Appointment booking software" },
      { href: "/alternatives/fresha-alternative", label: "Fresha alternative" },
    ],
  },
  {
    slug: "live-queue",
    path: "/features/live-queue",
    title: "Live salon queue and walk-in management",
    description:
      "One live queue for booked visits and walk-ins. Waiting, in the chair, done—so the floor stops asking who’s next.",
    kicker: "Feature",
    h1: "One live queue everyone sees.",
    definition:
      "AppointHive’s live queue shows waiting, in the chair, and done for the whole floor. Walk-ins land on the same list as booked appointments so barbers and stylists share one answer for who’s next.",
    lede: "Three people on the bench. Two chairs. One list.",
    image: {
      src: "/film/solve-queue.jpg",
      alt: "Two barbers checking the same live queue on a phone",
    },
    sections: [
      {
        heading: "Floor clarity",
        body: [
          "Staff access the floor by PIN or magic link. Customer history sits on the visit without forcing a customer account.",
          "A waitlist can hold overflow with a time-limited claim when a slot opens.",
        ],
      },
      {
        heading: "Tied to booking and pay",
        body: [
          "The queue is not a sticky note app. It reads the same visit that started as a booking and later feeds reports and commission.",
        ],
      },
    ],
    bullets: [
      "Waiting / in chair / done",
      "Walk-ins on the same list",
      "Staff PIN or magic link",
      "Customer history on the visit",
      "Waitlist with timed claim",
      "Works with online booking",
    ],
    faqs: [
      {
        question: "What is a live salon queue?",
        answer:
          "A live queue is a shared list of who is waiting, in service, and done. AppointHive keeps booked clients and walk-ins on that same list.",
      },
      {
        question: "Can walk-ins join without an online booking?",
        answer: "Yes. Walk-ins are added to the live queue alongside appointments.",
      },
      {
        question: "Do staff need separate logins on the floor?",
        answer: "Staff can use floor access by PIN or magic link instead of wrestling with full accounts mid-service.",
      },
    ],
    related: [
      { href: "/barber-shop-software", label: "Barber shop software" },
      { href: "/features/online-booking", label: "Online booking" },
      { href: "/features/salon-payroll", label: "Salon payroll" },
      { href: "/guides/barbershop-walk-in-queue", label: "Barbershop walk-in queue" },
    ],
  },
  {
    slug: "salon-payroll",
    path: "/features/salon-payroll",
    title: "Salon payroll and commission from each visit",
    description:
      "Salon payroll software that builds commission, revenue, and payslip PDFs from the same visit as the booking—no Sunday calculator.",
    kicker: "Feature",
    h1: "Pay ready before you lock up.",
    definition:
      "AppointHive salon payroll ties commission and payslip PDFs to the visit record that started as a booking. Reports by staff, service, and location replace the night desk calculator.",
    lede: "Commission you can explain. A payslip from the same cut.",
    image: {
      src: "/film/solve-payroll.jpg",
      alt: "An owner at closing reviewing the day’s numbers on a tablet",
    },
    sections: [
      {
        heading: "Earn from the visit",
        body: [
          "Reports by staff, service, and location. Trends, utilization, and CSV export when you need a deeper look.",
          "Payroll periods and a payslip PDF. Service invoices for your clients are their bill, not a platform fee.",
        ],
      },
      {
        heading: "Why it belongs with booking",
        body: [
          "When payroll lives in a spreadsheet and booking lives elsewhere, commission becomes a guess. One visit record keeps the story straight from appointment to pay.",
        ],
      },
    ],
    bullets: [
      "Commission from the visit",
      "Payslip PDF",
      "Payroll periods",
      "Staff, service, and location reports",
      "CSV export",
      "Service invoices for clients",
    ],
    faqs: [
      {
        question: "Does AppointHive include salon payroll software?",
        answer:
          "Yes. Commission, payroll periods, and payslip PDFs are part of the Earn side of the product, fed by the same visits as booking.",
      },
      {
        question: "Can I export reports?",
        answer: "Yes. You get reports in the product and CSV export when you need the numbers elsewhere.",
      },
      {
        question: "Are service invoices platform fees?",
        answer:
          "No. Service invoices are bills for your clients. They are not a platform fee charged by AppointHive.",
      },
    ],
    related: [
      { href: "/salon-booking-software", label: "Salon booking software" },
      { href: "/features/online-booking", label: "Online booking" },
      { href: "/barber-shop-software", label: "Barber shop software" },
      { href: "/guides/salon-commission-from-visits", label: "Salon commission from visits" },
    ],
  },
];

export const comparePages: IntentPage[] = [
  {
    slug: "appointhive-vs-fresha",
    path: "/compare/appointhive-vs-fresha",
    title: "AppointHive vs Fresha for salons and barber shops",
    description:
      "Compare AppointHive and Fresha for barber shops and salons: live walk-in queue, staff pay from the visit, client logins, and Hosted vs Standalone.",
    kicker: "Compare",
    h1: "AppointHive vs Fresha for the floor that books and pays.",
    definition:
      "AppointHive is salon and barber shop software that connects online booking, a live walk-in queue, and staff pay on one visit record—available as Hosted SaaS or a Standalone license. Fresha is a widely used marketplace-style booking platform for beauty businesses. This page compares how shops that care about queue, payroll, client logins, and install options may choose.",
    lede: "Pick the stack that matches how your chairs actually run—not only how clients find a time slot.",
    image: {
      src: "/film/hero-devices.jpg",
      alt: "Laptop and phone on a barber counter showing AppointHive booking and dashboard",
    },
    comparison: {
      headers: ["Capability", "AppointHive", "Fresha (typical public positioning)"],
      rows: [
        ["Online booking", "Branded page + website embed", "Online booking + marketplace discovery"],
        ["Client account", "Customers never create a login", "Client accounts / app common for marketplace"],
        ["Walk-in + booked queue", "One live queue for both", "Strong booking; queue depth varies by setup"],
        ["Staff pay from the visit", "Commission + payslip PDF on same visit", "Business tools; payroll depth varies by plan"],
        ["Hosting choice", "Hosted SaaS or Standalone license", "Cloud / marketplace-hosted model"],
        ["Best fit signal", "Floor ops + pay tied to booking", "Discovery + booking-led beauty shops"],
      ],
    },
    sections: [
      {
        heading: "What this comparison is (and is not)",
        body: [
          "Feature grids change. We describe AppointHive from our product and Fresha from how it is commonly marketed to salons and barbers—not from a paid partnership or scraped private admin screens.",
          "If your shop needs marketplace discovery above all, Fresha’s reach may matter more. If you need booking, walk-ins, and commission from one visit—and optionally software on your own servers—AppointHive is built for that wedge.",
        ],
      },
      {
        heading: "Where AppointHive is built to win",
        body: [
          "One visit record feeds confirmation email, live queue status, reports, and payslip PDF. Walk-ins land on the same list as booked cuts.",
          "Clients book without creating an account. You can run Hosted cloud or a Standalone single-business install that does not phone home for license checks.",
        ],
      },
      {
        heading: "When Fresha may still be the better fit",
        body: [
          "Shops that prioritize consumer marketplace visibility and a large beauty ecosystem may prefer Fresha’s discovery model.",
          "Always verify current Fresha plans, fees, and floor features against your chairs before you switch—public marketing is not a contract.",
        ],
      },
    ],
    bullets: [
      "Honest capability table, not fake star scores",
      "AppointHive: queue + pay on the visit",
      "No client login on AppointHive",
      "Hosted or Standalone on AppointHive",
      "Fresha: strong marketplace-led booking",
      "Contact us to map your chairs",
    ],
    faqs: [
      {
        question: "Is AppointHive a Fresha competitor?",
        answer:
          "Yes for shops comparing salon and barber booking tools. AppointHive focuses on booking plus live queue and staff pay from one visit, with Hosted or Standalone options—not on running a consumer marketplace.",
      },
      {
        question: "Does AppointHive replace Fresha’s marketplace?",
        answer:
          "No. AppointHive does not claim Fresha-scale marketplace discovery. It replaces the shop’s booking, floor queue, and pay workflow when that is the pain.",
      },
      {
        question: "Can clients book AppointHive without an app login?",
        answer:
          "Yes. On AppointHive, customers never create a login. They book on your page or embed and get email confirmation.",
      },
      {
        question: "Can I run AppointHive on my own servers?",
        answer:
          "Yes. Standalone is a single-business license on infrastructure you control. Hosted is the same product on cloud we run.",
      },
      {
        question: "How current is this AppointHive vs Fresha page?",
        answer:
          "It reflects AppointHive’s product and Fresha’s typical public positioning. Re-check competitor plans before you buy; email hello@appointhive.com if a row looks wrong for your use case.",
      },
    ],
    related: [
      { href: "/alternatives/fresha-alternative", label: "Fresha alternative" },
      { href: "/alternatives/vagaro-alternative", label: "Vagaro alternative" },
      { href: "/barber-shop-software", label: "Barber shop software" },
      { href: "/features/live-queue", label: "Live queue" },
      { href: "/features/salon-payroll", label: "Salon payroll" },
    ],
  },
];

export const alternativePages: IntentPage[] = [
  {
    slug: "fresha-alternative",
    path: "/alternatives/fresha-alternative",
    title: "Fresha alternative for salons and barber shops",
    description:
      "Looking for a Fresha alternative? AppointHive pairs online booking with a live walk-in queue and staff pay from the same visit—Hosted or Standalone.",
    kicker: "Alternative",
    h1: "A Fresha alternative built for queue and pay.",
    definition:
      "AppointHive is a Fresha alternative for barber shops and salons that want online booking without forcing client logins, a live queue for walk-ins and appointments, and commission from the same visit—plus the choice of Hosted SaaS or a Standalone license.",
    lede: "Keep the chairs moving. Keep pay honest. Skip the marketplace if that is not your growth channel.",
    image: {
      src: "/film/solve-queue.jpg",
      alt: "Two barbers checking the same live queue on a phone",
    },
    sections: [
      {
        heading: "Why shops look past marketplace-first tools",
        body: [
          "Marketplace booking helps discovery. Many floors still need one shared answer for who’s next, and a payslip that matches the cut that happened.",
          "AppointHive treats the booking as the start of a visit: queue status, history, email, reports, and payroll read the same record.",
        ],
      },
      {
        heading: "What you get instead",
        body: [
          "Branded online booking and website embed. Walk-ins on the same live list. Staff PIN or magic link on the floor. English, Spanish, or French.",
          "Hosted trial when you want cloud. Standalone when the shop should live on servers you control.",
        ],
      },
    ],
    bullets: [
      "No customer login",
      "Live queue for bookings and walk-ins",
      "Commission and payslip from the visit",
      "Hosted or Standalone",
      "Multi-location ready",
      "Email confirmations and reminders",
    ],
    faqs: [
      {
        question: "What is a good Fresha alternative for a barber shop?",
        answer:
          "A good Fresha alternative depends on whether you need marketplace traffic or floor operations. AppointHive is built for booking, live walk-in queue, and staff pay from one visit—with Hosted or Standalone hosting.",
      },
      {
        question: "Does AppointHive include a client marketplace?",
        answer:
          "No. AppointHive focuses on your shop’s booking page, embed, queue, and payroll—not a consumer marketplace that sends strangers for a booking fee.",
      },
      {
        question: "Will my clients need a new app?",
        answer:
          "No. Clients book on the web with AppointHive and never create a login.",
      },
      {
        question: "Can I switch from Fresha without losing the floor?",
        answer:
          "You can run AppointHive for booking and queue while you migrate habits. Contact hello@appointhive.com with chair count and whether you want Hosted or Standalone.",
      },
    ],
    related: [
      { href: "/compare/appointhive-vs-fresha", label: "AppointHive vs Fresha" },
      { href: "/alternatives/vagaro-alternative", label: "Vagaro alternative" },
      { href: "/salon-booking-software", label: "Salon booking software" },
      { href: "/features/live-queue", label: "Live queue" },
    ],
  },
  {
    slug: "vagaro-alternative",
    path: "/alternatives/vagaro-alternative",
    title: "Vagaro alternative for salons and barber shops",
    description:
      "AppointHive is a Vagaro alternative focused on online booking, a live walk-in queue, and salon payroll from the same visit—Hosted SaaS or Standalone.",
    kicker: "Alternative",
    h1: "A Vagaro alternative when the visit must pay the chair.",
    definition:
      "AppointHive is a Vagaro alternative for salons and barber shops that want self-serve booking, one live queue for walk-ins and appointments, and staff commission from the same visit record. Choose Hosted cloud or a Standalone single-business license.",
    lede: "All-in-one suites are wide. AppointHive is deep on the visit from book to payslip.",
    image: {
      src: "/film/solve-payroll.jpg",
      alt: "An owner at closing reviewing the day’s numbers on a tablet",
    },
    sections: [
      {
        heading: "When an all-in-one still feels split",
        body: [
          "Broad salon platforms cover many modules. Shops still struggle when walk-ins live in one place and commission lives in a spreadsheet.",
          "AppointHive keeps booking, floor status, and pay on one visit so Sunday is not a calculator session.",
        ],
      },
      {
        heading: "Fit signals for AppointHive",
        body: [
          "You care that clients never create a login. You need walk-ins on the same list as bookings. You want payslip PDFs from the cut that happened.",
          "You may also want Standalone—software on your servers—rather than only a subscription cloud.",
        ],
      },
    ],
    bullets: [
      "Online booking + embed",
      "Live queue and walk-ins",
      "Payroll and commission from the visit",
      "No customer accounts",
      "Hosted or Standalone",
      "Reports and CSV export",
    ],
    faqs: [
      {
        question: "Is AppointHive a Vagaro alternative?",
        answer:
          "Yes for shops comparing salon and barber booking platforms. AppointHive emphasizes booking plus live queue and staff pay from one visit, with Hosted or Standalone options.",
      },
      {
        question: "Does AppointHive include POS and retail inventory?",
        answer:
          "AppointHive focuses on appointment operations—booking, floor queue, and earn/payroll from visits. If you need a full retail POS suite, confirm that requirement before you switch.",
      },
      {
        question: "Can I embed booking on my website?",
        answer:
          "Yes. AppointHive online booking includes an embed for your site and a branded business page.",
      },
      {
        question: "How do I evaluate AppointHive against Vagaro?",
        answer:
          "List must-haves: walk-in queue, client login policy, payroll depth, and Hosted vs on-prem. Then write hello@appointhive.com with chair count and product interest.",
      },
    ],
    related: [
      { href: "/compare/appointhive-vs-fresha", label: "AppointHive vs Fresha" },
      { href: "/alternatives/fresha-alternative", label: "Fresha alternative" },
      { href: "/appointment-booking-software", label: "Appointment booking software" },
      { href: "/features/salon-payroll", label: "Salon payroll" },
    ],
  },
];

export const guidePages: IntentPage[] = [
  {
    slug: "barbershop-walk-in-queue",
    path: "/guides/barbershop-walk-in-queue",
    title: "Barbershop walk-in queue: bookings and walk-ins on one list",
    description:
      "How a barbershop walk-in queue should work with online bookings. AppointHive keeps waiting, in the chair, and done on one live list.",
    kicker: "Guide",
    h1: "Barbershop walk-in queue that matches the chairs.",
    definition:
      "A barbershop walk-in queue is a shared live list of who is waiting, in the chair, and done—including walk-ins and clients who booked online. AppointHive runs that queue on the same visit record as the booking so the floor has one answer for who’s next.",
    lede: "Three people on the bench. Two chairs. One list.",
    image: {
      src: "/film/floor.jpg",
      alt: "A real barbershop floor with chairs and someone waiting",
    },
    sections: [
      {
        heading: "Why paper and separate apps fail",
        body: [
          "When bookings live in one app and walk-ins live on a sticky note, staff argue mid-cut. The person who booked online feels skipped; the walk-in feels invisible.",
          "A live queue only works if both arrival types share statuses: waiting, in the chair, done.",
        ],
      },
      {
        heading: "How AppointHive runs the floor",
        body: [
          "Booked visits appear on the queue. Walk-ins are added to the same list. Staff open the floor with PIN or magic link.",
          "A waitlist can hold overflow with a time-limited claim when a chair frees. Customer history stays on the visit without a customer login.",
        ],
      },
      {
        heading: "Tied to pay, not only to order",
        body: [
          "The queue is not a separate sticky-note product. It reads the visit that later feeds reports and commission—so the cut that happened is the cut that pays.",
        ],
      },
    ],
    bullets: [
      "Waiting / in chair / done",
      "Walk-ins beside bookings",
      "Staff PIN or magic link",
      "Waitlist with timed claim",
      "No customer login",
      "Same visit feeds payroll",
    ],
    faqs: [
      {
        question: "What is a barbershop walk-in queue?",
        answer:
          "A barbershop walk-in queue is a shared live list of who is waiting, in service, and done. In AppointHive, walk-ins and online bookings share that same list.",
      },
      {
        question: "Can walk-ins join without booking online?",
        answer:
          "Yes. AppointHive adds walk-ins to the live queue alongside appointments.",
      },
      {
        question: "Do barbers need phones to manage the queue?",
        answer:
          "Staff can use the AppointHive floor on phone or desk with PIN or magic link—without wrestling a full password mid-cut.",
      },
      {
        question: "How does the queue connect to payroll?",
        answer:
          "AppointHive uses one visit record for queue status and later for reports, commission, and payslip PDF.",
      },
    ],
    related: [
      { href: "/features/live-queue", label: "Live queue feature" },
      { href: "/barber-shop-software", label: "Barber shop software" },
      { href: "/guides/salon-commission-from-visits", label: "Salon commission from visits" },
      { href: "/compare/appointhive-vs-fresha", label: "AppointHive vs Fresha" },
    ],
  },
  {
    slug: "salon-commission-from-visits",
    path: "/guides/salon-commission-from-visits",
    title: "Salon commission from visits: pay without the Sunday calculator",
    description:
      "How salon commission should come from the same visit as the booking. AppointHive builds payslip PDFs from that visit record.",
    kicker: "Guide",
    h1: "Salon commission from the visit that happened.",
    definition:
      "Salon commission from visits means staff pay is calculated from the same appointment or walk-in record that ran on the floor—not from a separate spreadsheet rebuilt on Sunday. AppointHive ties commission, revenue reports, and payslip PDFs to that visit.",
    lede: "Commission you can explain. A payslip from the same cut.",
    image: {
      src: "/film/solve-payroll.jpg",
      alt: "An owner at closing reviewing the day’s numbers on a tablet",
    },
    sections: [
      {
        heading: "Why spreadsheets drift",
        body: [
          "When booking lives in one tool and pay lives in another, tips, add-ons, and no-shows become arguments. The floor finished; the numbers did not.",
          "One visit record keeps staff, service, location, and status aligned from book through done.",
        ],
      },
      {
        heading: "What AppointHive’s Earn side does",
        body: [
          "Reports by staff, service, and location. Payroll periods and a payslip PDF. CSV export when you need the numbers elsewhere.",
          "Service invoices are the client’s bill for the visit—not a platform fee charged by AppointHive.",
        ],
      },
      {
        heading: "Start from booking, finish at lock-up",
        body: [
          "Online booking and the live queue write the visit. At close, commission is ready because pay reads the same record—Hosted or Standalone.",
        ],
      },
    ],
    bullets: [
      "Commission from the visit",
      "Payslip PDF",
      "Payroll periods",
      "Staff and service reports",
      "CSV export",
      "Works with booking and queue",
    ],
    faqs: [
      {
        question: "How should salon commission from visits work?",
        answer:
          "Salon commission from visits should use the same visit record as the booking and floor status. AppointHive builds commission and payslip PDFs from that record.",
      },
      {
        question: "Does AppointHive include salon payroll software?",
        answer:
          "Yes. Commission, payroll periods, and payslip PDFs are part of AppointHive’s Earn side, fed by the same visits as booking.",
      },
      {
        question: "Can I export payroll numbers?",
        answer:
          "Yes. AppointHive includes reports in the product and CSV export when you need the numbers elsewhere.",
      },
      {
        question: "Are service invoices a fee to use AppointHive?",
        answer:
          "No. Service invoices are bills for your clients. They are not a platform fee charged by AppointHive.",
      },
    ],
    related: [
      { href: "/features/salon-payroll", label: "Salon payroll feature" },
      { href: "/salon-booking-software", label: "Salon booking software" },
      { href: "/guides/barbershop-walk-in-queue", label: "Barbershop walk-in queue" },
      { href: "/alternatives/vagaro-alternative", label: "Vagaro alternative" },
    ],
  },
];

export function allSeoPages(): IntentPage[] {
  return [...intentPages, ...featurePages, ...comparePages, ...alternativePages, ...guidePages];
}

export function getIntentPage(slug: string): IntentPage | undefined {
  return intentPages.find((page) => page.slug === slug);
}

export function getFeaturePage(slug: string): IntentPage | undefined {
  return featurePages.find((page) => page.slug === slug);
}

export function getComparePage(slug: string): IntentPage | undefined {
  return comparePages.find((page) => page.slug === slug);
}

export function getAlternativePage(slug: string): IntentPage | undefined {
  return alternativePages.find((page) => page.slug === slug);
}

export function getGuidePage(slug: string): IntentPage | undefined {
  return guidePages.find((page) => page.slug === slug);
}