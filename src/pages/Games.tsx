import { useId, useState } from "react";
import GameFormButton from "../components/GameFormButton";
import type { GameId } from "../config/gameForms";

interface RoundInfo {
  title: string;
  body: string;
}

interface JudgingCriterion {
  label: string;
  marks?: string;
}

interface GameDetail {
  id: GameId;
  number: string;
  title: string;
  tagline?: string;
  description: string;
  teamSize: string;
  seats: string;
  duration: string;
  rounds: RoundInfo[];
  notes?: string[];
  judging: JudgingCriterion[];
}

const GAME_DETAILS: GameDetail[] = [
  {
    id: "flipvert",
    number: "01",
    title: "Flipvert",
    tagline: "Two sides. One product. Infinite creativity.",
    description:
      "Flipvert is an engaging two-round marketing challenge designed to test participants' creativity, humour, and strategic thinking. The game revolves around marketing and de-marketing everyday products. Participants will need to think like brand strategists — first convincing the audience to buy the product and then flipping the narrative to discourage them from buying the same product. This dual approach helps participants explore both the positive and negative sides of marketing communication in a fun and interactive way.",
    teamSize: "3 members per team",
    seats: "First 7 registered teams",
    duration: "80 minutes total",
    rounds: [
      {
        title: "Round 1 — Marketing (45 minutes)",
        body:
          "Teams of 3 participants will be assigned a common product such as chips, cold drinks, toothpaste, smartphones, etc. Each team must develop a marketing strategy to promote the product. 10 minutes preparation, then 35 minutes of presentations for all teams at 5 minutes per team. 2 teams will be eliminated in this round.",
      },
      {
        title: "Round 2 — De-marketing (35 minutes)",
        body:
          "Using the same product, teams must now create a de-marketing strategy, where they aim to discourage people from buying it. This round challenges participants to think in the opposite direction and creatively highlight the drawbacks or overuse of the product. The presentation can include humour, satire, or clever reasoning. 10 minutes preparation, then 25 minutes of presentations at 5 minutes per team. Top 3 teams will win.",
      },
    ],
    judging: [
      { label: "Creativity", marks: "10 marks — originality and uniqueness of ideas in both marketing and de-marketing strategies." },
      { label: "Humour", marks: "10 marks — use of wit, fun, and engagement to make the presentation entertaining and memorable." },
      { label: "Presentation", marks: "10 marks — confidence, coordination, visual appeal, and clarity of communication during the pitch." },
      { label: "Clarity", marks: "10 marks — logical structure and how well the team conveys its strategy and thought process in both rounds." },
    ],
  },
  {
    id: "brandMobiFlex",
    number: "02",
    title: "BrandMobiFlex",
    tagline: "Design | Adapt | Amplify",
    description:
      "BrandMobiFlex is a dynamic team-based business challenge that tests participants across three critical aspects of management and innovation: branding, crisis management, and cross-cultural business thinking. Teams experience the journey of creating a brand, tackling an unexpected crisis, and combining global perspectives to develop innovative business solutions. The game encourages creativity, strategic thinking, and adaptability under pressure.",
    teamSize: "4 members per team",
    seats: "First 6 registered teams",
    duration: "125 minutes total",
    rounds: [
      {
        title: "Round 1 — Brand Blueprint (50 minutes)",
        body:
          "Teams of 4 participants will be assigned a sector/industry by the game organizers. Within that sector, each team selects a product and prepares its brand identity, including brand name, logo, tagline, and slogan — focusing on how they would establish a new business for the chosen product. 20 minutes preparation, then 30 minutes of presentations at 5 minutes per team. 2 teams will be eliminated.",
      },
      {
        title: "Round 2 — Pivot Challenge (40 minutes)",
        body:
          "Teams randomly pick a crisis scenario from a set of slips. They must develop a crisis management strategy, explaining how they would tackle the situation effectively as a team. 20 minutes preparation, then 20 minutes of presentations at 5 minutes per team. 1 team will be eliminated.",
      },
      {
        title: "Round 3 — Cross-Culture Challenge (35 minutes)",
        body:
          "A continent is announced in advance. Teams draw two country names from that continent and combine their cultural or business practices to create an innovative new business idea. Teams prepare their strategy and creative approach for evaluation. 20 minutes preparation, then 15 minutes of presentations at 5 minutes per team. 1 team will be eliminated, 1 team will win, and 1 will be consoled.",
      },
    ],
    judging: [
      { label: "Creativity & Originality", marks: "10 marks — novelty and uniqueness in branding, crisis solutions, and cross-cultural ideas." },
      { label: "Strategic Thinking", marks: "10 marks — practicality, clarity, and effectiveness of proposed strategies." },
      { label: "Presentation & Communication", marks: "10 marks — confidence, articulation, teamwork, and engagement during presentations." },
      { label: "Cultural/Contextual Awareness", marks: "10 marks — appropriateness and understanding of sector, crisis, or cultural context." },
    ],
  },
  {
    id: "trashToTreasure",
    number: "03",
    title: "Trash to Treasure",
    tagline: "Reimagine what others leave behind.",
    description:
      "Trash to Treasure is an innovative and creative event that challenges participants to repurpose waste materials into functional and aesthetically appealing items. The event promotes sustainability, resourcefulness, and teamwork while encouraging participants to think outside the box. By transforming ordinary waste into valuable creations, participants demonstrate both creativity and practical problem-solving skills.",
    teamSize: "4 members per team",
    seats: "First 5 registered teams",
    duration: "65 minutes total",
    rounds: [
      {
        title: "Round 1 — Creation (40 minutes)",
        body:
          "Teams will have to design and create a product from the waste materials they bring. The product should be useful, creative, and safe.",
      },
      {
        title: "Round 2 — Presentation (25 minutes)",
        body:
          "Teams will then present and explain their product to the judges and audience, highlighting its concept, creativity, utility, and innovative use of waste materials, at 5 minutes for each team. 1 team will win and 1 will be consoled.",
      },
    ],
    notes: ["Teams must bring their own waste materials."],
    judging: [
      { label: "Creativity and Originality", marks: "Uniqueness of the idea and design." },
      { label: "Effective Use of Waste Material", marks: "Resourcefulness in repurposing materials." },
      { label: "Practical Value of the Product", marks: "Functionality and usefulness." },
      { label: "Overall Presentation", marks: "Visual appeal and impact of the product." },
      { label: "Explanation", marks: "Clear, precise, and innovative description of the concept and utility." },
      { label: "Teamwork and Coordination", marks: "How well the team collaborated to complete the task." },
    ],
  },
  {
    id: "corporateConquestQuiz",
    number: "04",
    title: "Corporate Conquest Quiz",
    description:
      "Corporate Conquest Quiz is a three-round interactive quiz designed to test participants' knowledge of companies, startups, and advertisements. The quiz challenges participants to recall facts about founders, identify brands from subtle clues, and recognize products from audio cues. With elements of strategy, risk, and bonus opportunities, the game is both engaging and competitive, encouraging quick thinking and teamwork.",
    teamSize: "2 members per team",
    seats: "First 10 registered teams",
    duration: "Three rounds",
    rounds: [
      {
        title: "Round 1 — Founders & CEOs",
        body:
          "Teams are asked questions about company founders and CEOs, starting with one-line clues, followed by back-to-back rapid-fire questions. Each team gets 30 seconds to name as many founders/CEOs as possible. Bonus: if a team adds extra information like the year of founding or country of HQ, they earn +5 points.",
      },
      {
        title: "Round 2 — The Mystery Brand",
        body:
          "Teams identify a company from a vague description (for example: \"This company started in a garage in 1994 selling books online...\"). If missed, a blurred logo or picture clue is revealed; if still missed, the question passes to other teams. Scoring: first attempt (description only) is +15 points, second attempt (logo/puzzle clue) is +10 points, and a bonus fact such as tagline or founder's name earns +5 points.",
      },
      {
        title: "Round 3 — Country of Origin",
        body:
          "Teams guess the country of origin of popular products/brands (for example: \"Maggi — which country is it originally from?\"). A correct answer earns +10 points, a wrong answer costs -5 points, and naming the year of founding as a bonus earns +5 points.",
      },
    ],
    notes: [
      "How participants get a chance to answer: Numerical Problem Unlock — a quick calculation, and the first team to solve it gets to answer.",
      "Riddle Unlock — the moderator gives a riddle, and the first correct solver gets to answer.",
      "Buzzer First — the classic buzzer system; first team to press gets to answer, and a wrong answer may deduct points.",
      "Minute-to-Win-It Task — a short 60-second challenge; the first team to complete it gets to attempt the question.",
      "Wildcard Entry — teams eliminated in the first round can re-enter if they answer 3–4 questions correctly, giving them a second chance.",
      "Betting Element — teams can bet points on a question before it is revealed. For example, if Team A has 80 points, Team B 70, and Team C 60, the host announces \"Bet before the next question!\", teams place bets, correct answers earn the bet points, and wrong answers lose the bet points.",
    ],
    judging: [],
  },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="border-t" style={{ borderColor: "var(--beige)" }}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-4 text-left text-sm font-semibold"
        style={{ color: "var(--green)" }}
      >
        {title}
        <span
          className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-base transition-transform duration-200"
          style={{
            backgroundColor: "var(--beige)",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>
      <div
        id={id}
        className="grid overflow-hidden transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0 overflow-hidden pb-5">{children}</div>
      </div>
    </div>
  );
}

function GameSection({ game }: { game: GameDetail }) {
  return (
    <section
      className="rounded-2xl border p-6 sm:p-8"
      style={{ borderColor: "var(--beige)", backgroundColor: "#FFFFFF" }}
      aria-labelledby={`game-${game.id}-title`}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <span className="font-display text-3xl font-semibold" style={{ color: "var(--orange)" }}>
          {game.number}
        </span>
        <span
          className="rounded-full px-3 py-1 text-xs font-semibold"
          style={{ backgroundColor: "var(--cream-deep)", color: "var(--green-soft)" }}
        >
          Game {game.number.replace(/^0/, "")} of 4
        </span>
      </div>

      <h2
        id={`game-${game.id}-title`}
        className="mt-3 font-display text-2xl font-semibold sm:text-3xl"
        style={{ color: "var(--green)" }}
      >
        {game.title}
      </h2>
      {game.tagline && (
        <p className="mt-1 text-sm font-semibold" style={{ color: "var(--orange-deep)" }}>
          {game.tagline}
        </p>
      )}
      <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--green-soft)" }}>
        {game.description}
      </p>

      <dl
        className="mt-6 grid grid-cols-2 gap-4 border-t border-b py-4 text-xs sm:grid-cols-3"
        style={{ borderColor: "var(--beige)" }}
      >
        <div>
          <dt style={{ color: "var(--green-soft)" }}>Team size</dt>
          <dd className="mt-1 font-semibold" style={{ color: "var(--green)" }}>{game.teamSize}</dd>
        </div>
        <div>
          <dt style={{ color: "var(--green-soft)" }}>Registration limit</dt>
          <dd className="mt-1 font-semibold" style={{ color: "var(--green)" }}>{game.seats}</dd>
        </div>
        <div>
          <dt style={{ color: "var(--green-soft)" }}>Duration</dt>
          <dd className="mt-1 font-semibold" style={{ color: "var(--green)" }}>{game.duration}</dd>
        </div>
      </dl>

      <div className="mt-1">
        <Section title="Rounds & rules">
          <div className="space-y-4">
            {game.rounds.map((round) => (
              <div key={round.title}>
                <p className="text-sm font-semibold" style={{ color: "var(--green)" }}>{round.title}</p>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--green-soft)" }}>{round.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {game.notes && game.notes.length > 0 && (
          <Section title="Good to know">
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed" style={{ color: "var(--green-soft)" }}>
              {game.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </Section>
        )}

        {game.judging.length > 0 && (
          <Section title="Judging criteria">
            <ul className="space-y-2 text-sm leading-relaxed" style={{ color: "var(--green-soft)" }}>
              {game.judging.map((criterion) => (
                <li key={criterion.label}>
                  <span className="font-semibold" style={{ color: "var(--green)" }}>{criterion.label}:</span>{" "}
                  {criterion.marks}
                </li>
              ))}
            </ul>
          </Section>
        )}
      </div>

      <div className="mt-6">
        <GameFormButton game={game.id} label="Register your team" />
      </div>
    </section>
  );
}

export default function Games() {
  return (
    <div className="page-enter mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="text-xs font-semibold" style={{ color: "var(--orange-deep)" }}>Games</p>
      <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl" style={{ color: "var(--green)" }}>
        Yuvapreneur's Games
      </h1>
      <p className="mt-5 max-w-xl text-base leading-relaxed" style={{ color: "var(--green-soft)" }}>
        Four unique challenges, four kinds of founder energy — from marketing showdowns to a
        knowledge-testing quiz. Expand a game below to see how it works, and register your team
        whenever you're ready.
      </p>

      <div className="mt-12 space-y-8">
        {GAME_DETAILS.map((game) => (
          <GameSection key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
