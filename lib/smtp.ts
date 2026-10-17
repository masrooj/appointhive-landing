import nodemailer from "nodemailer";

const TO = headerText(process.env.CONTACT_TO || "hello@appointhive.com");

function headerText(value: string): string {
  return value.replace(/[\u0000-\u001F\u007F]/g, " ").replace(/\s+/g, " ").trim();
}

export function smtpReady(): boolean {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

export async function sendContactMail(input: {
  name: string;
  business: string;
  email: string;
  interest: string;
  message: string;
}): Promise<void> {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) {
    throw new Error("SMTP is not configured");
  }

  const port = Number(process.env.SMTP_PORT || 587);
  const secure = process.env.SMTP_SECURE === "true" || port === 465;
  const from = headerText(process.env.SMTP_FROM || `AppointHive <${TO}>`);
  const replyTo = headerText(input.email);
  if (!from || !replyTo || !TO) {
    throw new Error("SMTP is not configured");
  }

  const transport = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  await transport.sendMail({
    from,
    to: TO,
    replyTo,
    subject: headerText(`AppointHive — ${input.business}`).slice(0, 200),
    text: [`Name: ${input.name}`, `Shop: ${input.business}`, `Email: ${input.email}`, `Interest: ${input.interest}`, "", input.message].join(
      "\n",
    ),
  });
}
