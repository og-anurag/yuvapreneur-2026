import { Link } from "react-router-dom";
import yuvapreneurLogo from "../assets/yuvapreneur-logo.png";

const GAMES_PREVIEW = [
  {
    number: "01",
    title: "Flipvert",
    description: "Turn marketing upside down with creativity, humour and strategic thinking.",
    team: "Teams of 3",
  },
  {
    number: "02",
    title: "BrandMobiFlex",
    description: "Build brands, handle crises and think across cultures.",
    team: "Teams of 4",
  },
  {
    number: "03",
    title: "Trash to Treasure",
    description: "Transform waste materials into something useful, creative and meaningful.",
    team: "Teams of 4",
  },
  {
    number: "04",
    title: "Corporate Conquest Quiz",
    description: "Put your knowledge of brands, founders and businesses to the test.",
    team: "Teams of 2",
  },
];

const QUICK_INFO = [
  { label: "Event Date", value: "To Be Announced" },
  { label: "Venue", value: "To Be Announced" },
  { label: "Format", value: "4 Signature Games" },
  { label: "Participants", value: "Integrated Program in Management" },
];

const WHY_PARTICIPATE = [
  { title: "Creativity", description: "Turn ideas into compelling solutions." },
  { title: "Teamwork", description: "Collaborate, communicate and perform as a team." },
  { title: "Strategy", description: "Think fast, adapt and make smart decisions." },
  { title: "Experience", description: "Challenge yourself in an energetic competitive environment." },
];

export default function Home() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <span
              className="inline-block rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide"
              style={{ borderColor: "var(--orange)", color: "var(--orange-deep)" }}
            >
              Event Details Coming Soon
            </span>

            <p className="mt-6 text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--orange-deep)" }}>
              Yuvapreneur 2026
            </p>
            <h1
              className="mt-3 max-w-xl font-display text-4xl font-semibold leading-[1.1] sm:text-5xl"
              style={{ color: "var(--green)" }}
            >
              Where Ideas Meet Opportunities
              <span className="block" style={{ color: "var(--orange-deep)" }}>
                and Passion Turns into Action
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed sm:text-lg" style={{ color: "var(--green-soft)" }}>
              An engaging platform for IPM students to explore creativity, strategy,
              entrepreneurship and teamwork through four unique challenges.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/games"
                className="rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: "var(--orange)", color: "#fff" }}
              >
                Explore Games
              </Link>
              <Link
                to="/participation"
                className="rounded-full border px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
                style={{ borderColor: "var(--green)", color: "var(--green)" }}
              >
                Participation Guidelines
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src={yuvapreneurLogo}
              alt="Yuvapreneur 2026 Logo"
              className="w-full max-w-sm object-contain"
            />
          </div>
        </div>
      </section>

      {/* Quick info */}
      <section className="border-y" style={{ borderColor: "var(--beige)", backgroundColor: "var(--cream-deep)" }}>
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16">
          <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl" style={{ color: "var(--green)" }}>
            About Yuvapreneur
          </h2>
          <div>
            <p className="text-base leading-relaxed" style={{ color: "var(--green-soft)" }}>
              Yuvapreneur 2026 brings together creativity, business thinking, sustainability and
              problem-solving through an exciting lineup of team-based challenges. Participants
              can collaborate, compete and turn ideas into action while experiencing different
              dimensions of entrepreneurship.
            </p>
            <p className="mt-4 font-display text-lg font-semibold" style={{ color: "var(--orange-deep)" }}>
              Think. Create. Adapt. Compete.
            </p>
          </div>
        </div>
      </section>

      {/* Four games highlight */}
      <section className="border-t" style={{ borderColor: "var(--beige)" }}>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl" style={{ color: "var(--green)" }}>
            Four Challenges. One Experience.
          </h2>
          <p className="mt-3 max-w-lg text-base leading-relaxed" style={{ color: "var(--green-soft)" }}>
            Choose your challenge and bring your ideas to life.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {GAMES_PREVIEW.map((g) => (
              <div
                key={g.title}
                className="flex h-full flex-col rounded-2xl border p-5"
                style={{ borderColor: "var(--beige)", backgroundColor: "#fff" }}
              >
                <span className="font-display text-2xl font-semibold" style={{ color: "var(--orange)" }}>
                  {g.number}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold" style={{ color: "var(--green)" }}>
                  {g.title}
                </h3>
                <p className="mt-1 flex-1 text-sm leading-relaxed" style={{ color: "var(--green-soft)" }}>
                  {g.description}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--orange-deep)" }}>
                  {g.team}
                </p>
                <Link
                  to="/games"
                  className="mt-4 text-sm font-semibold"
                  style={{ color: "var(--green)" }}
                >
                  View Game →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why participate */}
      <section style={{ backgroundColor: "var(--cream-deep)" }} className="border-y">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl" style={{ color: "var(--green)" }}>
            Why Participate?
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_PARTICIPATE.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border p-6"
                style={{ borderColor: "var(--beige)", backgroundColor: "#fff" }}
              >
                <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--orange-deep)" }}>
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--green-soft)" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Participation CTA */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div
          className="rounded-3xl px-6 py-14 text-center sm:px-12"
          style={{ backgroundColor: "var(--green)" }}
        >
          <h2 className="font-display text-3xl font-semibold sm:text-4xl" style={{ color: "var(--cream)" }}>
            Ready to Take the Challenge?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed sm:text-base" style={{ color: "var(--beige)" }}>
            Explore the games, understand the requirements and get your team ready for
            Yuvapreneur 2026.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/games"
              className="rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: "var(--orange)", color: "#fff" }}
            >
              Explore Games
            </Link>
            <Link
              to="/participation"
              className="rounded-full border px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
              style={{ borderColor: "var(--cream)", color: "var(--cream)" }}
            >
              Participation Guidelines
            </Link>
          </div>
        </div>
      </section>

      {/* Final event status strip */}
      <section className="border-t" style={{ borderColor: "var(--beige)" }}>
        <div className="mx-auto max-w-6xl px-5 py-8 text-center sm:px-8">
          <p className="text-sm font-medium" style={{ color: "var(--green)" }}>
            Yuvapreneur 2026 event date, timing and venue are currently being finalized.
          </p>
          <p className="mt-1 text-sm" style={{ color: "var(--green-soft)" }}>
            Stay tuned for confirmed updates.
          </p>
        </div>
      </section>
    </div>
  );
}