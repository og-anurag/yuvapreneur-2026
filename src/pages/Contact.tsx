type Coordinator = {
  name: string;
  phone: string;
};

type GameContact = {
  game: string;
  coordinators: Coordinator[];
};

const GAME_CONTACTS: GameContact[] = [
  {
    game: "Flipvert",
    coordinators: [
      { name: "Vinay", phone: "+916392677541" },
      { name: "Raj", phone: "+919115028177" },
    ],
  },
  {
    game: "BrandMobiFlex",
    coordinators: [
      { name: "Anjali", phone: "+919555186112" },
      { name: "Priya", phone: "+919310628860" },
    ],
  },
  {
    game: "Trash to Treasure",
    coordinators: [
      { name: "Priya", phone: "+919310628860" },
      { name: "Vinay", phone: "+916392677541" },
    ],
  },
  {
    game: "Corporate Conquest Quiz",
    coordinators: [
      { name: "Mariya", phone: "+918707887117" },
      { name: "Ujjawal", phone: "+917667182548" },
    ],
  },
];

function formatPhone(phone: string) {
  // Converts +916392677541 -> +91 6392677541
  return `${phone.slice(0, 3)} ${phone.slice(3)}`;
}

export default function Contact() {
  return (
    <div className="page-enter mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="text-xs font-semibold" style={{ color: "var(--orange-deep)" }}>Contact</p>
      <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl" style={{ color: "var(--green)" }}>
        Get in Touch
      </h1>
      <p className="mt-5 max-w-xl text-base leading-relaxed" style={{ color: "var(--green-soft)" }}>
        Have a question about Yuvapreneur 2026? Contact the coordinator responsible for the game
        or reach out to the organizing team.
      </p>

      <div className="mt-14">
        <p className="text-xs font-semibold" style={{ color: "var(--orange-deep)" }}>Game Coordinators</p>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {GAME_CONTACTS.map((entry) => (
            <div
              key={entry.game}
              className="rounded-2xl border p-6 sm:p-7"
              style={{ borderColor: "var(--beige)", backgroundColor: "#fff" }}
            >
              <h2 className="font-display text-xl font-semibold" style={{ color: "var(--green)" }}>
                {entry.game}
              </h2>

              <div className="mt-4 space-y-3">
                {entry.coordinators.map((c) => (
                  <div
                    key={c.name + c.phone}
                    className="flex items-center justify-between gap-3 border-t pt-3 first:border-t-0 first:pt-0"
                    style={{ borderColor: "var(--beige)" }}
                  >
                    <span className="text-sm font-medium" style={{ color: "var(--green-soft)" }}>
                      {c.name}
                    </span>
                    <a
                      href={`tel:${c.phone}`}
                      className="text-sm font-semibold transition-transform hover:-translate-y-0.5"
                      style={{ color: "var(--orange-deep)" }}
                    >
                      {formatPhone(c.phone)}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 rounded-2xl border p-6 sm:p-8" style={{ borderColor: "var(--beige)", backgroundColor: "#fff" }}>
        <p className="text-xs font-semibold" style={{ color: "var(--orange-deep)" }}>Yuvapreneur 2026</p>
        <p className="mt-3 text-sm font-medium" style={{ color: "var(--green)" }}>University of Allahabad</p>
        <p className="mt-1 text-sm" style={{ color: "var(--green-soft)" }}>Integrated Program in Management</p>
        <p className="mt-4 font-display text-lg font-semibold leading-snug" style={{ color: "var(--green)" }}>
          &ldquo;Where Ideas Meet Opportunities and Passion Turns into Action&rdquo;
        </p>

        <div
          className="mt-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold"
          style={{ borderColor: "var(--orange)", color: "var(--orange-deep)" }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: "var(--orange)" }}
          />
          Stay Tuned — Event details are being finalized
        </div>
      </div>
    </div>
  );
}
