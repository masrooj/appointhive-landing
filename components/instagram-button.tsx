const INSTAGRAM_URL = "https://www.instagram.com/appointhive/";

export function InstagramButton() {
  return (
    <a className="btn btn-ig" href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="AppointHive on Instagram">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.4" cy="6.6" r="1" fill="currentColor" />
      </svg>
    </a>
  );
}
