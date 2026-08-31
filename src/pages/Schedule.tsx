import { SCHEDULE } from "../data/schedule";

export default function Schedule() {
  return (
    <div className="page-enter mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="text-xs font-semibold" style={{ color: "var(--orange-deep)" }}>Schedule</p>
      <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl" style={{ color: "var(--green)" }}>
        How the day unfolds
      </h1>
      <p className="mt-5 max-w-xl text-base leading-relaxed" style={{ color: "var(--green-soft)" }}>
        A single day, four rooms, and a schedule that leaves room to breathe between them.
      </p>

      <div className="mt-12">
        {SCHEDULE.map((item) => (
          <div
            key={`${item.time}-${item.event}`}
            className="grid gap-2 border-t py-6 sm:grid-cols-[110px_1fr] sm:gap-8"
            style={{ borderColor: "var(--beige)" }}
          >
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--orange-deep)" }}>{item.time}</p>
              <p className="text-xs" style={{ color: "var(--green-soft)" }}>{item.date}</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold" style={{ color: "var(--green)" }}>{item.event}</h2>
              <p className="mt-1 text-sm font-medium" style={{ color: "var(--green-soft)" }}>{item.venue}</p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--green-soft)" }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
