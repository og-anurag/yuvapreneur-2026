import { CONTACT } from "../config/contact";

export default function Contact() {
  return (
    <div className="page-enter mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="text-xs font-semibold" style={{ color: "var(--orange-deep)" }}>Contact</p>
      <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl" style={{ color: "var(--green)" }}>
        Talk to a human, not a form.
      </h1>
      <p className="mt-5 max-w-xl text-base leading-relaxed" style={{ color: "var(--green-soft)" }}>
        Questions about a game, a seat, or the schedule? Reach the organizing team directly.
      </p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        <a
          href={`mailto:${CONTACT.email}`}
          className="rounded-2xl border p-6 transition-transform hover:-translate-y-0.5"
          style={{ borderColor: "var(--beige)", backgroundColor: "#fff" }}
        >
          <p className="text-xs font-semibold" style={{ color: "var(--orange-deep)" }}>Email</p>
          <p className="mt-2 font-display text-lg font-semibold" style={{ color: "var(--green)" }}>{CONTACT.email}</p>
        </a>
        <a
          href={`tel:${CONTACT.phone}`}
          className="rounded-2xl border p-6 transition-transform hover:-translate-y-0.5"
          style={{ borderColor: "var(--beige)", backgroundColor: "#fff" }}
        >
          <p className="text-xs font-semibold" style={{ color: "var(--orange-deep)" }}>Phone</p>
          <p className="mt-2 font-display text-lg font-semibold" style={{ color: "var(--green)" }}>{CONTACT.phone}</p>
        </a>
      </div>

      <div className="mt-10">
        <p className="text-xs font-semibold" style={{ color: "var(--orange-deep)" }}>Follow along</p>
        <div className="mt-3 flex flex-wrap gap-3">
          {CONTACT.social.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border px-4 py-2 text-sm font-semibold transition-transform hover:-translate-y-0.5"
              style={{ borderColor: "var(--green)", color: "var(--green)" }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-10 border-t pt-6" style={{ borderColor: "var(--beige)" }}>
        <p className="text-xs font-semibold" style={{ color: "var(--orange-deep)" }}>Find us</p>
        <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--green-soft)" }}>{CONTACT.address}</p>
      </div>
    </div>
  );
}
