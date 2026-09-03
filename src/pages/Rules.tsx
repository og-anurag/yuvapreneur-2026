import { useId, useState } from "react";

const GENERAL_RULES: string[] = [
  "Yuvapreneur 2026 is open to eligible students as specified by the organizing team.",
  "Participants must register through the official Google Form provided for their selected game.",
  "Each participant should register only according to the team-size requirement of the selected game.",
  "A participant should not register multiple times for the same game.",
  "Team members must be finalized before the event.",
  "Participants must report to the designated venue before their respective game begins.",
  "Participants must carry their valid college/student identification when required by the organizers.",
  "Participants are expected to maintain discipline and professional conduct throughout the event.",
  "Any form of cheating, plagiarism, unfair practice, harassment, or disruptive behavior may result in disqualification.",
  "Participants must follow instructions given by the game coordinators, volunteers, judges, and organizing committee.",
  "The decision of the judges/organizing committee regarding evaluation and winners will be final.",
  "Participants are responsible for bringing any materials specifically required for their game.",
  "The organizers are not responsible for personal belongings lost or damaged during the event.",
  "Participants should not damage university property or event equipment.",
  "The organizers reserve the right to modify event rules if necessary and will communicate any important changes.",
  "Event date and timing will be announced separately. Venue: Rajashekhar Hall, MONIRBA, University of Allahabad.",
];

const FAIR_PLAY: string[] = [
  "Respect other teams.",
  "No cheating or unauthorized assistance.",
  "No intentional disruption.",
  "Follow time limits.",
  "Respect judges and coordinators.",
  "Maintain sportsmanship and professionalism.",
  "Disqualification may occur for serious violations.",
];

interface GameRules {
  title: string;
  facts: { label: string; value: string }[];
  format: string[];
  judging: string[];
}

const GAME_RULES: GameRules[] = [
  {
    title: "Flipvert",
    facts: [
      { label: "Team", value: "3 members" },
      { label: "Max teams", value: "7" },
      { label: "Participants", value: "21" },
      { label: "Duration", value: "80 min" },
    ],
    format: [
      "Round 1: Marketing — 10 minutes preparation + 35 minutes presentation.",
      "Round 2: De-marketing — 10 minutes preparation + 25 minutes presentation.",
      "A common product will be assigned to teams.",
      "Two teams will be eliminated after Round 1.",
      "The remaining teams compete in the De-marketing round.",
      "Top 3 teams are winners.",
    ],
    judging: ["Creativity", "Humour", "Presentation", "Clarity"],
  },
  {
    title: "BrandMobiFlex",
    facts: [
      { label: "Team", value: "4 members" },
      { label: "Max teams", value: "6" },
      { label: "Participants", value: "24" },
      { label: "Duration", value: "125 min" },
    ],
    format: [
      "Round 1: Brand Blueprint — 50 minutes. A sector is assigned and teams develop a product, brand name, logo, tagline/slogan and business concept.",
      "Two teams are eliminated after Round 1.",
      "Round 2: Pivot Challenge — 40 minutes. Teams randomly receive a crisis scenario and develop a crisis-management strategy.",
      "One team is eliminated after Round 2.",
      "Round 3: Cross-Culture Challenge — 35 minutes. A continent and two countries from that continent are selected; teams combine cultural/business practices into a new business idea.",
      "One winner and one consolation winner are selected.",
    ],
    judging: ["Creativity & Originality", "Strategic Thinking", "Presentation & Communication", "Cultural/Contextual Awareness"],
  },
  {
    title: "Trash to Treasure",
    facts: [
      { label: "Team", value: "4 members" },
      { label: "Max teams", value: "5" },
      { label: "Participants", value: "20" },
      { label: "Duration", value: "65 min" },
    ],
    format: [
      "Teams must bring their own waste materials.",
      "Round 1: Creation — 40 minutes. Teams create a useful, creative and safe product from waste materials.",
      "Round 2: Presentation — 5 minutes per team.",
      "One winner and one consolation winner are selected.",
    ],
    judging: [
      "Creativity & Originality",
      "Effective Use of Waste Material",
      "Practical Value",
      "Overall Presentation",
      "Explanation",
      "Teamwork & Coordination",
    ],
  },
  {
    title: "Corporate Conquest Quiz",
    facts: [
      { label: "Team", value: "2 members" },
      { label: "Max teams", value: "10" },
      { label: "Participants", value: "20" },
      { label: "Duration", value: "60 min" },
    ],
    format: [
      "Round 1: Founders & CEOs — one-line clues and rapid-fire questions. Correct answers may receive additional bonuses for founding year/country headquarters as specified by the organizers.",
      "Round 2: Mystery Brand — vague descriptions followed by blurred logo/picture clues when necessary. Questions may be passed to other teams according to the round rules.",
      "Round 3: Country of Origin — teams identify the origin country of products/brands.",
      "Answering opportunities may include: Numerical Problem Unlock, Riddle Unlock, Buzzer First, Minute-to-Win-It.",
      "Wildcard Entry may allow eliminated teams to re-enter by correctly answering the required number of questions.",
      "Betting elements may be used where teams wager points before a question — a correct answer gains the bet, a wrong answer loses it.",
      "Participants must follow the quizmaster's instructions for answering, passing, buzzing and betting.",
    ],
    judging: [],
  },
];

function RuleCard({ game }: { game: GameRules }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div
      className="rounded-2xl border p-6 sm:p-7"
      style={{ borderColor: "var(--beige)", backgroundColor: "#fff" }}
    >
      <h3 className="font-display text-xl font-semibold" style={{ color: "var(--green)" }}>
        {game.title}
      </h3>

      <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-b py-4 text-xs sm:grid-cols-4" style={{ borderColor: "var(--beige)" }}>
        {game.facts.map((f) => (
          <div key={f.label}>
            <dt style={{ color: "var(--green-soft)" }}>{f.label}</dt>
            <dd className="mt-1 font-semibold" style={{ color: "var(--green)" }}>{f.value}</dd>
          </div>
        ))}
      </dl>

      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
        className="mt-4 flex w-full items-center justify-between text-left text-sm font-semibold"
        style={{ color: "var(--green)" }}
      >
        Round format &amp; judging
        <span
          className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-base transition-transform duration-200"
          style={{ backgroundColor: "var(--beige)", transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>

      <div
        id={id}
        className="grid overflow-hidden transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0 overflow-hidden">
          <ul className="mt-3 space-y-2 text-sm leading-relaxed" style={{ color: "var(--green-soft)" }}>
            {game.format.map((line, i) => (
              <li key={i} className="flex gap-2">
                <span aria-hidden="true" style={{ color: "var(--orange)" }}>•</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>

          {game.judging.length > 0 && (
            <div className="mt-4 border-t pt-3" style={{ borderColor: "var(--beige)" }}>
              <p className="text-xs font-semibold" style={{ color: "var(--orange-deep)" }}>Judging criteria</p>
              <p className="mt-1.5 text-sm leading-relaxed" style={{ color: "var(--green-soft)" }}>
                {game.judging.join(" · ")}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Rules() {
  return (
    <div className="page-enter mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="text-xs font-semibold" style={{ color: "var(--orange-deep)" }}>Rules</p>
      <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl" style={{ color: "var(--green)" }}>
        Rules &amp; Regulations
      </h1>
      <p className="mt-5 max-w-xl text-base leading-relaxed" style={{ color: "var(--green-soft)" }}>
        Please read the general rules and game-specific guidelines carefully before participating
        in Yuvapreneur 2026.
      </p>

      <div className="mt-14">
        <p className="text-xs font-semibold" style={{ color: "var(--orange-deep)" }}>General Rules</p>
        <ul className="mt-5 space-y-3 border-t pt-5" style={{ borderColor: "var(--beige)" }}>
          {GENERAL_RULES.map((rule, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--green-soft)" }}>
              <span aria-hidden="true" className="mt-0.5 shrink-0" style={{ color: "var(--orange)" }}>•</span>
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14">
        <p className="text-xs font-semibold" style={{ color: "var(--orange-deep)" }}>Game-Specific Rules</p>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {GAME_RULES.map((game) => (
            <RuleCard key={game.title} game={game} />
          ))}
        </div>
      </div>

      <div className="mt-14">
        <p className="text-xs font-semibold" style={{ color: "var(--orange-deep)" }}>Participation &amp; Fair Play</p>
        <ul className="mt-5 space-y-3 border-t pt-5" style={{ borderColor: "var(--beige)" }}>
          {FAIR_PLAY.map((rule, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--green-soft)" }}>
              <span aria-hidden="true" className="mt-0.5 shrink-0" style={{ color: "var(--orange)" }}>•</span>
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14 rounded-2xl border p-6 sm:p-8" style={{ borderColor: "var(--beige)", backgroundColor: "#fff" }}>
        <div
          className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold"
          style={{ borderColor: "var(--orange)", color: "var(--orange-deep)" }}
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--orange)" }} />
          Important Notice
        </div>
        <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--green-soft)" }}>
          Event date and timing are still to be announced. Venue: Rajashekhar Hall, MONIRBA,
          University of Allahabad. Please stay tuned to the official Yuvapreneur 2026 website and
          organizing team for confirmed updates.
        </p>
      </div>
    </div>
  );
}
