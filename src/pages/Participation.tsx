import { Link } from "react-router-dom";

const BEFORE_REGISTER: string[] = [
  "Choose the game that best matches your interests and strengths.",
  "Read the game description and rules carefully before registering.",
  "Check the required team size for your selected game.",
  "Coordinate with your teammates before submitting the registration form.",
  "Make sure the information entered in the Google Form is accurate.",
  "Submit the registration form only once for the selected game.",
  "Registration does not mean guaranteed participation if the maximum team capacity has already been reached.",
  "Keep the contact details of the respective game coordinators available for queries.",
];

const TEAM_FORMATION: string[] = [
  "Participants must form teams according to the specified team size of each game.",
  "Flipvert requires teams of 3.",
  "BrandMobiFlex requires teams of 4.",
  "Trash to Treasure requires teams of 4.",
  "Corporate Conquest Quiz requires teams of 2.",
  "Team members should be finalized before registration.",
  "Participants should coordinate with teammates regarding preparation and event-day requirements.",
];

interface GameCapacity {
  name: string;
  teamSize: string;
  maxTeams: string;
  maxParticipants: string;
}

const GAME_CAPACITY: GameCapacity[] = [
  { name: "Flipvert", teamSize: "3", maxTeams: "7", maxParticipants: "21" },
  { name: "BrandMobiFlex", teamSize: "4", maxTeams: "6", maxParticipants: "24" },
  { name: "Trash to Treasure", teamSize: "4", maxTeams: "5", maxParticipants: "20" },
  { name: "Corporate Conquest Quiz", teamSize: "2", maxTeams: "10", maxParticipants: "20" },
];

interface Step {
  title: string;
  description: string;
}

const REGISTRATION_STEPS: Step[] = [
  { title: "Explore the Games page.", description: "Get a feel for each of the four games before deciding." },
  { title: "Read the rules and participation requirements for your chosen game.", description: "Check the format, duration and judging criteria on the Rules page." },
  { title: "Form your team according to the required team size.", description: "Finalize your teammates ahead of time." },
  { title: "Click the registration button for the selected game.", description: "You'll find it on the game's details on the Games page." },
  { title: "Fill in the official Google Form carefully.", description: "Double-check every field before submitting." },
  { title: "Submit the form and retain any confirmation shown by Google Forms.", description: "Keep a copy for your records." },
  { title: "Stay updated for further instructions from the organizing team.", description: "Watch the website for the latest updates." },
];

const EVENT_DAY: string[] = [
  "Arrive before the reporting time announced by the organizing team.",
  "Carry valid student/college identification if requested.",
  "Bring required materials for your selected game.",
  "For Trash to Treasure, teams should bring their own waste materials.",
  "Be prepared to follow time limits strictly.",
  "Keep your team coordinated throughout the activity.",
  "Follow instructions from coordinators, volunteers, judges, and organizers.",
  "Keep personal belongings secure.",
];

const CONDUCT: string[] = [
  "Maintain respectful and professional behavior.",
  "Treat other participants and organizers respectfully.",
  "Do not cheat or use unauthorized assistance.",
  "Do not intentionally disrupt another team's activity.",
  "Do not damage university property or event equipment.",
  "Follow the instructions of judges and coordinators.",
  "Any serious violation may lead to disqualification.",
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3 border-t pt-5" style={{ borderColor: "var(--beige)" }}>
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--green-soft)" }}>
          <span aria-hidden="true" className="mt-0.5 shrink-0" style={{ color: "var(--orange)" }}>•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold" style={{ color: "var(--orange-deep)" }}>
      {children}
    </p>
  );
}

export default function Participation() {
  return (
    <div className="page-enter mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="text-xs font-semibold" style={{ color: "var(--orange-deep)" }}>Participation</p>
      <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl" style={{ color: "var(--green)" }}>
        Participation Guidelines
      </h1>
      <p className="mt-5 max-w-xl text-base leading-relaxed" style={{ color: "var(--green-soft)" }}>
        Everything you need to know before registering and participating in Yuvapreneur 2026.
      </p>

      <div className="mt-14 rounded-2xl border p-6 sm:p-8" style={{ borderColor: "var(--beige)", backgroundColor: "#fff" }}>
        <SectionLabel>Before You Register</SectionLabel>
        <BulletList items={BEFORE_REGISTER} />
      </div>

      <div className="mt-14 rounded-2xl border p-6 sm:p-8" style={{ borderColor: "var(--beige)", backgroundColor: "#fff" }}>
        <SectionLabel>Team Formation</SectionLabel>
        <BulletList items={TEAM_FORMATION} />
      </div>

      <div className="mt-14">
        <SectionLabel>Game Capacity</SectionLabel>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {GAME_CAPACITY.map((g) => (
            <div
              key={g.name}
              className="rounded-2xl border p-6"
              style={{ borderColor: "var(--beige)", backgroundColor: "#fff" }}
            >
              <h3 className="font-display text-lg font-semibold" style={{ color: "var(--green)" }}>
                {g.name}
              </h3>
              <dl className="mt-4 grid grid-cols-3 gap-3 border-t pt-4 text-xs" style={{ borderColor: "var(--beige)" }}>
                <div>
                  <dt style={{ color: "var(--green-soft)" }}>Team Size</dt>
                  <dd className="mt-1 font-semibold" style={{ color: "var(--green)" }}>{g.teamSize}</dd>
                </div>
                <div>
                  <dt style={{ color: "var(--green-soft)" }}>Max Teams</dt>
                  <dd className="mt-1 font-semibold" style={{ color: "var(--green)" }}>{g.maxTeams}</dd>
                </div>
                <div>
                  <dt style={{ color: "var(--green-soft)" }}>Participants</dt>
                  <dd className="mt-1 font-semibold" style={{ color: "var(--green)" }}>{g.maxParticipants}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <SectionLabel>Registration Process</SectionLabel>
        <div className="mt-5 space-y-0 border-t" style={{ borderColor: "var(--beige)" }}>
          {REGISTRATION_STEPS.map((step, i) => (
            <div
              key={step.title}
              className="grid gap-2 border-b py-6 sm:grid-cols-[64px_1fr] sm:gap-6"
              style={{ borderColor: "var(--beige)" }}
            >
              <div>
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full font-display text-sm font-semibold"
                  style={{ backgroundColor: "var(--beige)", color: "var(--green)" }}
                >
                  {i + 1}
                </span>
              </div>
              <div>
                <h3 className="font-display text-base font-semibold" style={{ color: "var(--green)" }}>
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed" style={{ color: "var(--green-soft)" }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs leading-relaxed" style={{ color: "var(--green-soft)" }}>
          Registration buttons for each game are available on the Games page.
        </p>
      </div>

      <div className="mt-14 rounded-2xl border p-6 sm:p-8" style={{ borderColor: "var(--beige)", backgroundColor: "#fff" }}>
        <SectionLabel>Event-Day Preparation</SectionLabel>
        <BulletList items={EVENT_DAY} />
      </div>

      <div className="mt-14 rounded-2xl border p-6 sm:p-8" style={{ borderColor: "var(--beige)", backgroundColor: "#fff" }}>
        <SectionLabel>Participant Conduct</SectionLabel>
        <BulletList items={CONDUCT} />
      </div>

      <div className="mt-14 rounded-2xl border p-6 sm:p-8" style={{ borderColor: "var(--beige)", backgroundColor: "#fff" }}>
        <div
          className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold"
          style={{ borderColor: "var(--orange)", color: "var(--orange-deep)" }}
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--orange)" }} />
          Important Reminder
        </div>
        <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--green-soft)" }}>
          Event date, timing and venue are currently being finalized. Please stay tuned for
          confirmed Yuvapreneur 2026 updates.
        </p>
      </div>

      <div className="mt-14 rounded-2xl border p-6 text-center sm:p-8" style={{ borderColor: "var(--beige)", backgroundColor: "#fff" }}>
        <h2 className="font-display text-xl font-semibold" style={{ color: "var(--green)" }}>
          Have a question about a specific game?
        </h2>
        <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--green-soft)" }}>
          Reach out to the coordinator of your selected game through the Contact page.
        </p>
        <Link
          to="/contact"
          className="mt-5 inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-0.5"
          style={{ backgroundColor: "var(--orange)", color: "var(--cream)" }}
        >
          Contact Coordinators
        </Link>
      </div>
    </div>
  );
}
