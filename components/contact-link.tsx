import Link from "next/link";

export function ContactLink({
  className = "btn btn-lime",
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link className={className} href="/#contact" onClick={onClick}>
      <svg className="btn-icon" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="5.5" width="17" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="m4.5 7 7.5 6 7.5-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Contact us
    </Link>
  );
}
