import Image from "next/image";
import { faqJsonLd } from "@/lib/seo";
import { ContactForm } from "./contact-form";
import { ContactLink } from "./contact-link";
import { InstagramButton } from "./instagram-button";
import { JsonLd } from "./json-ld";
import { ServiceGlyph } from "./service-glyph";

const iconTones = ["gold", "teal", "lime"] as const;

const pains = [
  {
    src: "/film/pain-phone.jpg",
    alt: "A barber paused mid-cut with a phone at his ear",
    title: "Phones ringing while you’re with a client",
    text: "The cut stops. The caller wants a time. The person in the chair waits.",
  },
  {
    src: "/film/pain-next.jpg",
    alt: "Two barbers looking at each other while clients wait on a bench",
    title: "Staff asking who’s next",
    text: "Three people on the bench. Two chairs. Nobody has the same answer.",
  },
  {
    src: "/film/pain-payroll.jpg",
    alt: "A shop owner at night with a calculator and paper receipts",
    title: "Sunday payroll with a calculator",
    text: "Receipts, a spreadsheet, and a lamp. Commission is a guess until Monday.",
  },
];

const solutions = [
  {
    src: "/film/solve-book.jpg",
    alt: "A client booking on their phone while a haircut continues",
    title: "Clients book themselves",
    text: "They pick a time. You get a ping. They get a confirmation. The chair stays in the cut.",
  },
  {
    src: "/film/solve-queue.jpg",
    alt: "Two barbers checking the same live queue on a phone",
    title: "One live queue everyone sees",
    text: "Waiting, in the chair, done. Walk-ins land on the same list as booked visits.",
  },
  {
    src: "/film/solve-payroll.jpg",
    alt: "An owner at closing reviewing the day’s numbers on a tablet",
    title: "Pay is ready before you lock up",
    text: "Commission, revenue, and the payslip come from the same visit. No Sunday calculator.",
  },
];

const features = [
  {
    name: "Book",
    image: "/product/book.jpg",
    alt: "Elite Cuts public booking page on the hosted AppointHive app",
    items: [
      "Online booking and an embed for your site",
      "More than one location",
      "Assign the chair: least busy, round robin, highest rated, or by hand",
      "Visit statuses, from booked through done",
      "Email confirmation and reminders",
      "Your branding and a business page you can edit",
    ],
  },
  {
    name: "Operate",
    image: "/product/operate.jpg",
    alt: "Owner schedule calendar in the hosted AppointHive workspace",
    items: [
      "Owner dashboard and a bookings calendar",
      "Live queue and walk-ins",
      "Staff profiles, leave, and timesheets",
      "Staff floor access by PIN or magic link",
      "Customer history on the visit, with no customer login",
      "Activity log, in English, Spanish, or French",
    ],
  },
  {
    name: "Grow",
    image: "/product/grow.jpg",
    alt: "Waitlist in the hosted AppointHive owner workspace",
    items: [
      "Ask for a review after the visit",
      "Waitlist in order, with a time-limited claim",
      "A nudge when a client is due back",
      "A bell on the owner side when someone books",
      "Email always sends",
      "WhatsApp only after a Meta-approved number",
    ],
  },
  {
    name: "Earn",
    image: "/product/earn.jpg",
    alt: "Reports overview in the hosted AppointHive owner workspace",
    items: [
      "Reports by staff, service, and location",
      "Trends, utilization, and CSV export",
      "Payroll periods and a payslip PDF",
      "Commission you can explain",
      "Service invoices for your clients",
      "Those invoices are their bill, not a platform fee",
    ],
  },
];

const services = [
  { icon: "calendar", label: "Online booking" },
  { icon: "embed", label: "Embed for your website" },
  { icon: "pins", label: "More than one location" },
  { icon: "chair", label: "Smart chair assignment" },
  { icon: "queue", label: "Live queue" },
  { icon: "walk", label: "Walk-ins" },
  { icon: "key", label: "Staff PIN and magic link" },
  { icon: "timesheet", label: "Leave and timesheets" },
  { icon: "history", label: "Customer history" },
  { icon: "mail", label: "Email confirmations and reminders" },
  { icon: "wait", label: "Waitlist" },
  { icon: "star", label: "Reviews and return nudges" },
  { icon: "chart", label: "Reports and CSV" },
  { icon: "payslip", label: "Payroll and payslip PDF" },
  { icon: "percent", label: "Commission" },
  { icon: "invoice", label: "Service invoices" },
  { icon: "chat", label: "WhatsApp after Meta approval" },
];

const visitRecord = [
  { icon: "calendar", label: "Booking", text: "The time is taken." },
  { icon: "staff", label: "Staff", text: "The chair is named." },
  { icon: "history", label: "Client history", text: "The visit stays." },
  { icon: "mail", label: "Email", text: "They get the note." },
  { icon: "chart", label: "Reports", text: "The day is counted." },
  { icon: "payslip", label: "Payroll", text: "Pay comes from it." },
];

const faqs = [
  {
    q: "Who is AppointHive for?",
    a: "AppointHive is salon and barber shop software for shops that need online booking, a live floor queue, and staff pay from one visit. It takes the phone mid-cut, the who’s-next argument, and the Sunday calculator off the floor.",
  },
  {
    q: "Do clients need an account?",
    a: "No. On AppointHive, customers never create a login. They pick a time, get email confirmation, and show up.",
  },
  {
    q: "What is the difference between Standalone and Hosted?",
    a: "AppointHive is the same product either way; hosting is the only split. Standalone is a single-business license on servers you control. Hosted is the cloud we run—monthly or annual, with a 7-day trial—and you can cancel when you want. No card is taken when self-serve signup is open.",
  },
  {
    q: "What does one visit carry?",
    a: "In AppointHive, one visit record carries the booking, staff member, client history, email, reports, and payroll. Nothing is copied into a second book.",
  },
  {
    q: "How does the floor staff get in?",
    a: "AppointHive floor staff get in by PIN or magic link. There is no password for the chair to remember.",
  },
  {
    q: "Does WhatsApp send with the email?",
    a: "On AppointHive, email confirmation and reminders always send. WhatsApp sends only after a Meta-approved number is in place.",
  },
  {
    q: "What is a service invoice?",
    a: "A service invoice in AppointHive is the client’s bill for the visit. It is not a platform fee charged by AppointHive.",
  },
  {
    q: "How do we start?",
    a: "Email hello@appointhive.com with how many chairs you run and whether AppointHive should live on your servers or on ours. A note starts a conversation; it does not buy a license or open a subscription.",
  },
];

const frames = [
  { src: "/film/cut.jpg", alt: "A barber cutting a client’s hair beside a shop window", caption: "Mid-cut" },
  { src: "/film/floor.jpg", alt: "A real barbershop floor with chairs and someone waiting", caption: "The floor" },
  { src: "/film/desk.jpg", alt: "A salon counter with a paper diary, coffee, and a phone", caption: "The desk" },
];

export function Stage() {
  const loop = [...frames, ...frames];

  return (
    <>
      <JsonLd
        data={faqJsonLd(faqs.map((item) => ({ question: item.q, answer: item.a })))}
      />
      <section className="hero">
        <Image
          className="hero-bg"
          src="/film/floor.jpg"
          alt="A barbershop floor with a cut in progress and a client waiting"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-veil" aria-hidden="true" />
        <div className="shell stage">
        <div>
          <p className="kicker">
            <i />
              Appointment operations
          </p>
          <h1 className="display">
            AppointHive
            <span>Schedule smarter.</span>
            <span>Operate better.</span>
          </h1>
          <p className="lede">
              Run your chair, not your inbox. Booking, the live floor, and staff pay in one product for
              barber shops and salons.
          </p>
          <div className="hero-actions">
            <ContactLink />
            <a className="btn btn-ghost" href="#tour">
              <svg className="btn-icon" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <path d="M10 9.2v5.6L15.2 12z" fill="currentColor" />
              </svg>
              Watch tour
            </a>
          </div>
        </div>
        <figure className="stage-art">
          <Image
            className="hero-shot"
            src="/film/hero-devices.jpg"
            alt="A laptop on a barber counter showing the Elite Cuts dashboard, with the booking page open on a phone beside it"
            width={864}
            height={1152}
            priority
          />
        </figure>
        </div>
      </section>

      <section className="shell story" id="floor">
        <p className="kicker">
          <i />
          The floor today
        </p>
        <h2 className="display">Three things that steal the chair.</h2>
        <div className="shot-grid">
          {pains.map((item) => (
            <article key={item.src}>
              <Image src={item.src} alt={item.alt} width={1200} height={900} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="shell story" id="solution">
        <p className="kicker">
          <i />
          What AppointHive does
        </p>
        <h2 className="display">The same three moments, handled.</h2>
        <div className="shot-grid">
          {solutions.map((item) => (
            <article key={item.src}>
              <Image src={item.src} alt={item.alt} width={1200} height={900} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="visit-record">
          <div className="visit-record-head">
            <p className="kicker">
              <i />
              One visit record
            </p>
            <p>Booking, the floor, the email, and the payslip read the same visit.</p>
          </div>
          <ol className="visit-steps">
            {visitRecord.map((step, index) => (
              <li key={step.label}>
                <span className="visit-index">{String(index + 1).padStart(2, "0")}</span>
                <span className={`service-mark tone-${iconTones[index % iconTones.length]}`}>
                  <ServiceGlyph name={step.icon} />
                </span>
                <strong>{step.label}</strong>
                <span className="visit-detail">{step.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="shell ways" id="ways">
        <p className="kicker">
          <i />
          Two ways to run it
        </p>
        <h2 className="display">Same product. Two ways to own it.</h2>
        <p className="lede">
          The feature list is the product. Hosting is the only split. Customers never create a login.
        </p>
        <div className="ways-grid">
          <article>
            <Image
              src="/film/way-standalone.jpg"
              alt="A shop owner beside the computer and server in his own back room"
              width={1600}
              height={900}
            />
            <div>
            <p className="face">Standalone</p>
            <h3>Your servers. One business.</h3>
            <ul>
              <li>A single shop, installed on infrastructure you control.</li>
              <li>Sales-led. A license or a quote, not a monthly rent.</li>
              <li>No Super Admin control plane, and no public signup for other businesses.</li>
              <li>It does not phone home to check a license.</li>
            </ul>
            </div>
          </article>
          <article>
            <Image
              src="/film/way-hosted.jpg"
              alt="A shop floor running with a phone in hand and no server in the room"
              width={1600}
              height={900}
            />
            <div>
            <p className="face">Hosted</p>
            <h3>We run the cloud.</h3>
            <ul>
              <li>Many shops on the service we host and upgrade.</li>
              <li>Monthly or annual. A 7-day trial. Cancel when you want.</li>
              <li>No card when self-serve signup is open.</li>
              <li>You do not run a server, and you do not install anything.</li>
            </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="shell features" id="product">
        <p className="kicker">
          <i />
          The whole product
        </p>
        <h2 className="display">Everything the floor needs.</h2>
        <div className="feature-grid">
          {features.map((group) => (
            <article key={group.name}>
              <Image src={group.image} alt={group.alt} width={1280} height={1100} />
              <div>
              <h3>{group.name}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="reel" aria-hidden="true">
        <div className="reel-track">
          {loop.map((frame, index) => (
            <figure key={`${frame.src}-${index}`}>
              <Image src={frame.src} alt="" width={960} height={640} />
              <figcaption>{frame.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <section className="shell services" id="services">
        <p className="kicker">
          <i />
          Through AppointHive
        </p>
        <h2 className="display">The services on the floor.</h2>
        <ul className="service-list">
          {services.map((service, index) => (
            <li key={service.label}>
              <span className={`service-mark tone-${iconTones[index % iconTones.length]}`}>
                <ServiceGlyph name={service.icon} />
              </span>
              {service.label}
            </li>
          ))}
        </ul>
      </section>

      <section className="shell tour" id="tour">
        <p className="kicker">
          <i />
          Product tour
        </p>
        <h2 className="display">See AppointHive on the floor.</h2>
        <p className="lede">
          A short walk through booking, the live queue, and how a visit becomes pay.
        </p>
        <figure className="tour-frame">
          <video
            controls
            playsInline
            preload="metadata"
            poster="/tour/poster.jpg"
            aria-label="AppointHive product tour"
          >
            <source src="/tour/product-tour.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </figure>
      </section>

      <section className="shell faq" id="faq">
        <p className="kicker">
          <i />
          FAQ
        </p>
        <h2 className="display">Questions from the floor.</h2>
        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="shell contact-band" id="contact">
        <div className="contact-grid">
          <div>
            <p className="kicker">
              <i />
              Write to the shop desk
            </p>
            <h2 className="display">Tell us about the chairs.</h2>
            <p className="contact-note">
              Name the shop, how many chairs you run, and whether AppointHive should live on your servers or on the cloud we run. We answer by email. A note here starts a conversation. It does not buy a license or open a subscription.
            </p>
            <ul className="contact-facts">
              <li>Standalone is one business, on machines you control.</li>
              <li>Hosted is the same product. We run the servers.</li>
              <li>Leave client lists and card numbers out of the message.</li>
            </ul>
            <div className="reach">
              <a href="mailto:hello@appointhive.com">hello@appointhive.com</a>
              <InstagramButton />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
