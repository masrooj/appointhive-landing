import Image from "next/image";
import Link from "next/link";
import { InstagramButton } from "./instagram-button";
import { ContactForm } from "./contact-form";

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
      "Eight visit statuses, from booked through done",
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

const frames = [
  { src: "/film/cut.jpg", alt: "A barber cutting a client’s hair beside a shop window", caption: "Mid-cut" },
  { src: "/film/floor.jpg", alt: "A real barbershop floor with chairs and someone waiting", caption: "The floor" },
  { src: "/film/desk.jpg", alt: "A salon counter with a paper diary, coffee, and a phone", caption: "The desk" },
];

export function Stage() {
  const loop = [...frames, ...frames];

  return (
    <>
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
              Schedule smarter.
              <span>Operate better.</span>
            </h1>
            <p className="lede">
              Run your chair, not your inbox. Booking, the live floor, and staff pay in one product.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-lime" href="/#contact">
                Contact us
              </Link>
              <InstagramButton />
            </div>
          </div>
        </div>
      </section>

      <section className="shell story">
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

      <section className="shell story">
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
        <p className="flow-line">One visit record: Booking → Staff → Client history → Email → Reports → Payroll</p>
      </section>

      <section className="shell ways">
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
              src="/product/standalone.jpg"
              alt="Standalone owner dashboard for one salon"
              width={1280}
              height={1100}
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
              src="/product/hosted.jpg"
              alt="Hosted booking page running for Elite Cuts"
              width={1280}
              height={1100}
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

      <section className="shell features">
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

      <section className="shell contact-band" id="contact">
        <div className="contact-grid">
          <div>
            <p className="kicker">
              <i />
              Write to the shop desk
            </p>
            <h2 className="display">Tell us about the chairs.</h2>
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
