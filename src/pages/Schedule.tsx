const QUICK_INFO = [
  { label: "Date", value: "To Be Announced" },
  { label: "Time", value: "09:45 AM – 05:00 PM" },
  { label: "Venue", value: "To Be Announced" },
];

interface ScheduleEntry {
  time: string;
  title: string;
  game?: string;
  isBreak?: boolean;
}

const SCHEDULE_ENTRIES: ScheduleEntry[] = [
  {
    time: "09:45 AM – 10:15 AM",
    title: "Guest Facilitation & Welcome Address",
  },
  {
    time: "10:20 AM – 11:40 AM",
    title: "Game 1",
    game: "Flipvert",
  },
  {
    time: "11:45 AM – 01:50 PM",
    title: "Game 2",
    game: "BrandMobiFlex",
  },
  {
    time: "01:50 PM – 02:20 PM",
    title: "Break (30 Minutes)",
    isBreak: true,
  },
  {
    time: "02:20 PM – 03:25 PM",
    title: "Game 3",
    game: "Trash to Treasure",
  },
  {
    time: "03:30 PM – 04:30 PM",
    title: "Game 4",
    game: "Corporate Conquest Quiz",
  },
  {
    time: "04:30 PM – 05:00 PM",
    title: "Winners Announcement & Vote of Thanks",
  },
];

export default function Schedule() {
  return (
    <div className="page-enter mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="text-xs font-semibold" style={{ color: "var(--orange-deep)" }}>Schedule</p>
      <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl" style={{ color: "var(--green)" }}>
        Event Schedule
      </h1>
      <p className="mt-5 max-w-xl text-base leading-relaxed" style={{ color: "var(--green-soft)" }}>
        Here is the planned schedule for Yuvapreneur 2026. Stay tuned for any official updates.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {QUICK_INFO.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border p-5"
            style={{ borderColor: "var(--beige)", backgroundColor: "#fff" }}
          >
            <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--orange-deep)" }}>
              {item.label}
            </p>
            <p className="mt-2 font-display text-lg font-semibold" style={{ color: "var(--green)" }}>
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        {SCHEDULE_ENTRIES.map((entry) =>
          entry.isBreak ? (
            <div
              key={entry.time}
              className="grid gap-2 border-t py-5 sm:grid-cols-[110px_1fr] sm:gap-8"
              style={{ borderColor: "var(--beige)" }}
            >
              <p className="text-sm font-semibold" style={{ color: "var(--orange-deep)" }}>{entry.time}</p>
              <div
                className="rounded-xl border px-4 py-3"
                style={{ borderColor: "var(--yellow)", backgroundColor: "var(--cream-deep)" }}
              >
                <p className="text-sm font-semibold" style={{ color: "var(--green)" }}>{entry.title}</p>
              </div>
            </div>
          ) : (
            <div
              key={entry.time}
              className="grid gap-2 border-t py-6 sm:grid-cols-[110px_1fr] sm:gap-8"
              style={{ borderColor: "var(--beige)" }}
            >
              <p className="text-sm font-semibold" style={{ color: "var(--orange-deep)" }}>{entry.time}</p>
              <div>
                <h2 className="font-display text-xl font-semibold" style={{ color: "var(--green)" }}>
                  {entry.title}
                </h2>
                {entry.game && (
                  <p className="mt-1 text-sm font-medium" style={{ color: "var(--green-soft)" }}>
                    {entry.game}
                  </p>
                )}
              </div>
            </div>
          )
        )}
      </div>

      <div
        className="mt-10 rounded-2xl border p-5 text-sm leading-relaxed"
        style={{ borderColor: "var(--beige)", backgroundColor: "var(--cream-deep)", color: "var(--green-soft)" }}
      >
        Event details are subject to official updates. Please stay tuned for announcements
        regarding the date and venue.
      </div>
    </div>
  );
}