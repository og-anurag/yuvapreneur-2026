import { COMMITTEE } from "../data/committee";

export default function Committee() {
  return (
    <div className="page-enter mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="text-xs font-semibold" style={{ color: "var(--orange-deep)" }}>Committee</p>
      <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl" style={{ color: "var(--green)" }}>
        The people behind it.
      </h1>
      <p className="mt-5 max-w-xl text-base leading-relaxed" style={{ color: "var(--green-soft)" }}>
        A small team of students who planned, tested, and built every part of this day.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {COMMITTEE.map((m) => (
          <div key={m.name} className="rounded-2xl border p-6" style={{ borderColor: "var(--beige)", backgroundColor: "#fff" }}>
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full font-display text-base font-semibold"
              style={{ backgroundColor: "var(--yellow)", color: "var(--green)" }}
            >
              {m.initials}
            </div>
            <h2 className="mt-4 font-display text-xl font-semibold" style={{ color: "var(--green)" }}>{m.name}</h2>
            <p className="text-sm font-medium" style={{ color: "var(--orange-deep)" }}>{m.role}</p>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--green-soft)" }}>{m.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
