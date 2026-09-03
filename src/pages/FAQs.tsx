import { useId, useState } from "react";
import { Link } from "react-router-dom";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSection {
  title: string;
  items: FaqItem[];
}

const FAQ_SECTIONS: FaqSection[] = [
  {
    title: "General",
    items: [
      {
        question: "What is Yuvapreneur 2026?",
        answer:
          "Yuvapreneur 2026 is an event organized for students of the Integrated Program in Management at the University of Allahabad, featuring engaging business, creativity, sustainability and quiz-based challenges.",
      },
      {
        question: "Where is Yuvapreneur 2026 being organized?",
        answer:
          "The venue is Rajashekhar Hall, MONIRBA, University of Allahabad. The event date will be announced soon.",
      },
      {
        question: "When will Yuvapreneur 2026 take place?",
        answer:
          "The event date and timings are currently being finalized. Please stay tuned for the confirmed schedule.",
      },
      {
        question: "Who can participate?",
        answer:
          "Participation is subject to the eligibility requirements communicated by the organizing team. Please check the Participation Guidelines and game-specific requirements before registering.",
      },
    ],
  },
  {
    title: "Games",
    items: [
      {
        question: "How many games are there?",
        answer: "There are four games: Flipvert, BrandMobiFlex, Trash to Treasure, and Corporate Conquest Quiz.",
      },
      {
        question: "Can I participate in more than one game?",
        answer:
          "Participation should follow the instructions and eligibility conditions provided by the organizing team. Check the relevant game requirements before submitting a registration form.",
      },
      {
        question: "What are the team sizes?",
        answer:
          "Flipvert requires 3 members, BrandMobiFlex requires 4 members, Trash to Treasure requires 4 members, and Corporate Conquest Quiz requires 2 members.",
      },
      {
        question: "What are the maximum team capacities?",
        answer: "Flipvert: 7 teams. BrandMobiFlex: 6 teams. Trash to Treasure: 5 teams. Corporate Conquest Quiz: 10 teams.",
      },
      {
        question: "Where can I find the rules for each game?",
        answer:
          "Visit the Games page for game information and the Rules & Regulations page for the detailed rules and round formats.",
      },
    ],
  },
  {
    title: "Registration",
    items: [
      {
        question: "How do I register for a game?",
        answer: "Open the Games page, select your preferred game, and use its official Google Form registration button.",
      },
      {
        question: "Do I need to create an account to register?",
        answer:
          "No. The Yuvapreneur 2026 website does not require a website account or login. Game registration is handled through the official Google Forms.",
      },
      {
        question: "Can I edit my registration after submitting the form?",
        answer:
          "Please follow the instructions provided by the respective Google Form. If you need clarification about your submission, contact the coordinator for that game.",
      },
      {
        question: "How will I know if registration is still available?",
        answer:
          "Each game has a maximum number of teams. Registration availability is subject to the capacity and instructions provided by the organizing team.",
      },
    ],
  },
  {
    title: "Team",
    items: [
      {
        question: "Can I register without a complete team?",
        answer: "Participants should form their team according to the required team size before submitting the registration form.",
      },
      {
        question: "Can I change my team members after registration?",
        answer:
          "Team changes should only be made according to instructions from the organizing team. Contact the relevant game coordinator if a change is necessary.",
      },
      {
        question: "What should I bring to the event?",
        answer:
          "Bring your valid student/college identification if requested and any materials specifically required for your selected game. For Trash to Treasure, teams must bring their own waste materials.",
      },
    ],
  },
  {
    title: "Event Day",
    items: [
      {
        question: "When should I arrive?",
        answer:
          "Participants should arrive before the reporting time announced by the organizing team. The confirmed schedule will be published once finalized.",
      },
      {
        question: "What happens if I arrive late?",
        answer:
          "Games follow specific time limits and schedules. Late arrival may affect participation, so participants should follow the reporting instructions announced by the organizing team.",
      },
      {
        question: "Who should I contact if I have a question?",
        answer: "Contact the coordinator responsible for your selected game. Their contact details are available on the Contact page.",
      },
    ],
  },
  {
    title: "Fair Play",
    items: [
      {
        question: "Are cheating or unauthorized assistance allowed?",
        answer:
          "No. Participants are expected to follow the rules, maintain fair play, and follow instructions from judges, coordinators and organizers.",
      },
      {
        question: "Who decides the winners?",
        answer:
          "The judges and organizing committee will evaluate participants according to the applicable game criteria. Their decision regarding evaluation and winners will be final.",
      },
    ],
  },
];

function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div>
      {items.map((item, i) => {
        const open = openIndex === i;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={item.question} className="border-t" style={{ borderColor: "var(--beige)" }}>
            <button
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-semibold"
              style={{ color: "var(--green)" }}
            >
              {item.question}
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
              id={panelId}
              className="grid overflow-hidden transition-all duration-300 ease-out"
              style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="pb-4 text-sm leading-relaxed" style={{ color: "var(--green-soft)" }}>
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function FAQs() {
  return (
    <div className="page-enter mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="text-xs font-semibold" style={{ color: "var(--orange-deep)" }}>FAQs</p>
      <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl" style={{ color: "var(--green)" }}>
        Frequently Asked Questions
      </h1>
      <p className="mt-5 max-w-xl text-base leading-relaxed" style={{ color: "var(--green-soft)" }}>
        Find answers to common questions about Yuvapreneur 2026, games, registration, teams, and
        participation.
      </p>

      <div className="mt-14 space-y-10">
        {FAQ_SECTIONS.map((section) => (
          <div
            key={section.title}
            className="rounded-2xl border p-6 sm:p-8"
            style={{ borderColor: "var(--beige)", backgroundColor: "#fff" }}
          >
            <p className="text-xs font-semibold" style={{ color: "var(--orange-deep)" }}>{section.title}</p>
            <FaqAccordion items={section.items} />
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-2xl border p-6 text-center sm:p-8" style={{ borderColor: "var(--beige)", backgroundColor: "#fff" }}>
        <h2 className="font-display text-xl font-semibold" style={{ color: "var(--green)" }}>
          Still have a question?
        </h2>
        <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--green-soft)" }}>
          Contact the coordinator of your selected game for further assistance.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: "var(--orange)", color: "var(--cream)" }}
          >
            Contact Coordinators
          </Link>
          <Link
            to="/games"
            className="inline-flex items-center justify-center rounded-full border px-6 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-0.5"
            style={{ borderColor: "var(--green)", color: "var(--green)" }}
          >
            Explore Games
          </Link>
        </div>
      </div>
    </div>
  );
}
