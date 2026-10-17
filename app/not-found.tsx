import Link from "next/link";

export default function NotFound() {
  return (
    <section className="legal">
      <div className="shell">
        <p className="kicker">
          <i />
          Missing page
        </p>
        <h1 className="display">That page isn’t on the floor.</h1>
        <p>
          <Link href="/">Back to AppointHive</Link>
        </p>
      </div>
    </section>
  );
}
