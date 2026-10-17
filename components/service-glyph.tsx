const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ServiceGlyph({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {name === "calendar" && (
        <>
          <rect {...stroke} x="4" y="5" width="16" height="15" rx="2" />
          <path {...stroke} d="M8 3.5v3M16 3.5v3M4 10h16" />
        </>
      )}
      {name === "embed" && (
        <>
          <rect {...stroke} x="3.5" y="4.5" width="17" height="15" rx="2" />
          <path {...stroke} d="M9 12.5 7 14.5 9 16.5M15 12.5l2 2-2 2" />
        </>
      )}
      {name === "pins" && (
        <>
          <path {...stroke} d="M3.5 19V11.2L7.2 8.4l3.8 2.8V19" />
          <path {...stroke} d="M12.2 19V9.2l4-3 4 3V19" />
          <path {...stroke} d="M5.6 19v-3h2.2V19M15.2 19v-4h2.4V19" />
        </>
      )}
      {name === "chair" && (
        <>
          <path {...stroke} d="M8 11V7.5A1.5 1.5 0 0 1 9.5 6h5A1.5 1.5 0 0 1 16 7.5V11" />
          <path {...stroke} d="M6.5 11h11v3.5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V11Z" />
          <path {...stroke} d="M9 16.5V20M15 16.5V20M7.5 20h3M13.5 20h3" />
        </>
      )}
      {name === "queue" && (
        <>
          <path {...stroke} d="M9 7h11M9 12h11M9 17h11" />
          <circle cx="5" cy="7" r="1.2" fill="currentColor" />
          <circle cx="5" cy="12" r="1.2" fill="currentColor" />
          <circle cx="5" cy="17" r="1.2" fill="currentColor" />
        </>
      )}
      {name === "walk" && (
        <>
          <path {...stroke} d="M10 4.2h9.2v15.6H10" />
          <circle cx="16.4" cy="12" r="0.9" fill="currentColor" />
          <path {...stroke} d="M3.2 12h5.2M6 9.5 8.6 12 6 14.5" />
        </>
      )}
      {name === "key" && (
        <>
          <circle {...stroke} cx="8" cy="12" r="3.2" />
          <path {...stroke} d="M11 12h9l-1.6 1.8M17.2 12v2.2" />
        </>
      )}
      {name === "timesheet" && (
        <>
          <rect {...stroke} x="6" y="3.5" width="12" height="17" rx="2" />
          <path {...stroke} d="M9 3.5h6v2.2H9zM9 10h6M9 13.5h6M9 17h3.5" />
        </>
      )}
      {name === "staff" && (
        <>
          <circle {...stroke} cx="12" cy="8" r="2.3" />
          <path {...stroke} d="M6.8 19v-1.2A3.8 3.8 0 0 1 10.6 14h2.8a3.8 3.8 0 0 1 3.8 3.8V19" />
        </>
      )}
      {name === "history" && (
        <>
          <circle {...stroke} cx="12" cy="12" r="7.5" />
          <path {...stroke} d="M12 8.2V12l2.8 1.8" />
        </>
      )}
      {name === "mail" && (
        <>
          <rect {...stroke} x="3.5" y="5.5" width="17" height="13" rx="2" />
          <path {...stroke} d="m4.5 7 7.5 6 7.5-6" />
        </>
      )}
      {name === "wait" && (
        <>
          <path {...stroke} d="M8 4.5h8M8 19.5h8" />
          <path {...stroke} d="M9 4.5c0 3.2 3 4.4 3 7.5s-3 4.3-3 7.5M15 4.5c0 3.2-3 4.4-3 7.5s3 4.3 3 7.5" />
        </>
      )}
      {name === "star" && (
        <path
          {...stroke}
          d="m12 4.2 1.9 4.2 4.6.5-3.4 3.1.9 4.5L12 14.4 8 16.5l.9-4.5L5.5 8.9l4.6-.5L12 4.2Z"
        />
      )}
      {name === "chart" && (
        <>
          <path {...stroke} d="M4.5 19.5h15" />
          <path {...stroke} d="M7 19.5V12M12 19.5V7.5M17 19.5v-5" />
        </>
      )}
      {name === "payslip" && (
        <>
          <path {...stroke} d="M7 3.8h7.2L18.5 8v12.2H7z" />
          <path {...stroke} d="M14 3.8V8h4.5M9.5 12.2h5.5M9.5 15.2h3.5" />
        </>
      )}
      {name === "percent" && (
        <>
          <circle {...stroke} cx="8" cy="8" r="2.2" />
          <circle {...stroke} cx="16" cy="16" r="2.2" />
          <path {...stroke} d="m16.8 6.5-9.6 11" />
        </>
      )}
      {name === "invoice" && (
        <>
          <path {...stroke} d="M7 3.5h10v17l-2-1.3-2 1.3-2-1.3-2 1.3-2-1.3V3.5Z" />
          <path {...stroke} d="M9.5 8h5M9.5 11.5h5M9.5 15h3" />
        </>
      )}
      {name === "chat" && (
        <>
          <path {...stroke} d="M5 6.5h14v9H9.2L5 18.2V6.5Z" />
          <path {...stroke} d="M8.5 11h7" />
        </>
      )}
    </svg>
  );
}
