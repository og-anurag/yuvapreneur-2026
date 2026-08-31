import { Link } from "react-router-dom";
import { GAMES } from "../data/games";
import { SCHEDULE } from "../data/schedule";
import { COMMITTEE } from "../data/committee";

export default function Home() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pt-20">
        <p className="text-xs font-semibold" style={{ color: "var(--orange-deep)" }}>
          University of Allahabad · 14 March 2026
        </p>
        <h1
          className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.08] sm:text-6xl"
          style={{ color: "var(--green)" }}
        >
          Bring the idea. Find the people. Make it real.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg" style={{ color: "var(--green-soft)" }}>
          Yuvapreneur 2026 is a one-day student entrepreneurship gathering — four rooms, four ways
          to test an idea, and a campus full of people building things worth building.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            to="/games"
            className="rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: "var(--orange)", color: "#fff" }}
          >
            Explore the Games →
          </Link>
          <Link
            to="/schedule"
            className="rounded-full border px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
            style={{ borderColor: "var(--green)", color: "var(--green)" }}
          >
            View Schedule →
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="border-y" style={{ borderColor: "var(--beige)", backgroundColor: "var(--cream-deep)" }}>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:gap-16">
          <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl" style={{ color: "var(--green)" }}>
            What Yuvapreneur is
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--green-soft)" }}>
            Yuvapreneur is a day built around one question: what would you build if you had a room,
            a team, and a deadline? Students from across the university step into four different
            formats — branding, reinvention, sustainability, and business knowledge — each designed
            to test a different founder muscle. No single background wins here; designers, engineers,
            marketers, and first-time builders all find a room that fits.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl" style={{ color: "var(--green)" }}>
          Event highlights
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {[
            { n: "4", label: "Game rooms", d: "Each with its own brief, brief time limit, and judging panel." },
            { n: "1", label: "Day, on campus", d: "Everything runs across a single day at the University of Allahabad." },
            { n: "28", label: "Total seats", d: "Across all four rooms combined, first come, first placed." },
          ].map((h) => (
            <div key={h.label} className="rounded-2xl border p-6" style={{ borderColor: "var(--beige)" }}>
              <span className="font-display text-4xl font-semibold" style={{ color: "var(--orange)" }}>{h.n}</span>
              <p className="mt-2 text-sm font-semibold" style={{ color: "var(--green)" }}>{h.label}</p>
              <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--green-soft)" }}>{h.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Games preview */}
      <section className="border-t" style={{ borderColor: "var(--beige)" }}>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl" style={{ color: "var(--green)" }}>
              Four games, four rooms
            </h2>
            <Link to="/games" className="text-sm font-semibold" style={{ color: "var(--orange-deep)" }}>
              See all games →
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {GAMES.map((g) => (
              <div key={g.id} className="rounded-2xl border p-5" style={{ borderColor: "var(--beige)", backgroundColor: "#fff" }}>
                <span className="font-display text-2xl font-semibold" style={{ color: "var(--orange)" }}>{g.number}</span>
                <h3 className="mt-2 font-display text-xl font-semibold" style={{ color: "var(--green)" }}>{g.title}</h3>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--green-soft)" }}>{g.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule preview */}
      <section style={{ backgroundColor: "var(--cream-deep)" }} className="border-y" >
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8" style={{ borderColor: "var(--beige)" }}>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl" style={{ color: "var(--green)" }}>
              How the day runs
            </h2>
            <Link to="/schedule" className="text-sm font-semibold" style={{ color: "var(--orange-deep)" }}>
              Full schedule →
            </Link>
          </div>
          <div className="mt-8 space-y-0">
            {SCHEDULE.slice(0, 4).map((s) => (
              <div
                key={s.event}
                className="flex flex-col gap-1 border-t py-4 sm:flex-row sm:items-baseline sm:gap-6"
                style={{ borderColor: "var(--beige)" }}
              >
                <span className="w-24 shrink-0 text-sm font-semibold" style={{ color: "var(--orange-deep)" }}>{s.time}</span>
                <span className="font-semibold" style={{ color: "var(--green)" }}>{s.event}</span>
                <span className="text-sm" style={{ color: "var(--green-soft)" }}>{s.venue}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committee preview */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl" style={{ color: "var(--green)" }}>
            The people behind it
          </h2>
          <Link to="/committee" className="text-sm font-semibold" style={{ color: "var(--orange-deep)" }}>
            Meet the committee →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {COMMITTEE.map((m) => (
            <div key={m.name} className="text-center">
              <div
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full font-display text-lg font-semibold"
                style={{ backgroundColor: "var(--yellow)", color: "var(--green)" }}
              >
                {m.initials}
              </div>
              <p className="mt-3 text-sm font-semibold" style={{ color: "var(--green)" }}>{m.name}</p>
              <p className="text-xs" style={{ color: "var(--green-soft)" }}>{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t" style={{ borderColor: "var(--beige)" }}>
        <div
          className="mx-auto my-16 max-w-6xl rounded-3xl px-6 py-14 text-center sm:px-12"
          style={{ backgroundColor: "var(--green)" }}
        >
          <h2 className="font-display text-3xl font-semibold sm:text-4xl" style={{ color: "var(--cream)" }}>
            Ready to pick your room?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed sm:text-base" style={{ color: "var(--beige)" }}>
            Head to the games page, read what each room involves, and enter through the form when
            you've found the one for your team.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/games"
              className="rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: "var(--orange)", color: "#fff" }}
            >
              Explore the Games →
            </Link>
            <Link
              to="/contact"
              className="rounded-full border px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
              style={{ borderColor: "var(--cream)", color: "var(--cream)" }}
            >
              Talk to us →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
