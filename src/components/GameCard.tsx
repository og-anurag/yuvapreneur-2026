import type { Game } from "../data/games";
import Accordion from "./Accordion";
import GameFormButton from "./GameFormButton";

export default function GameCard({ game }: { game: Game }) {
  return (
    <div
      className="flex h-full flex-col rounded-2xl border p-6 sm:p-7"
      style={{ borderColor: "var(--beige)", backgroundColor: "#FFFFFF" }}
    >
      <div className="flex items-start justify-between">
        <span className="font-display text-3xl font-semibold" style={{ color: "var(--orange)" }}>
          {game.number}
        </span>
      </div>

      <h3 className="mt-3 font-display text-2xl font-semibold" style={{ color: "var(--green)" }}>
        {game.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--green-soft)" }}>
        {game.description}
      </p>

      <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-b py-4 text-xs" style={{ borderColor: "var(--beige)" }}>
        <div>
          <dt style={{ color: "var(--green-soft)" }}>Team</dt>
          <dd className="mt-1 font-semibold" style={{ color: "var(--green)" }}>{game.teamSize}</dd>
        </div>
        <div>
          <dt style={{ color: "var(--green-soft)" }}>Duration</dt>
          <dd className="mt-1 font-semibold" style={{ color: "var(--green)" }}>{game.duration}</dd>
        </div>
        <div>
          <dt style={{ color: "var(--green-soft)" }}>Seats</dt>
          <dd className="mt-1 font-semibold" style={{ color: "var(--green)" }}>{game.seats}</dd>
        </div>
      </dl>

      <div className="mt-1">
        <Accordion title="What happens here">{game.details}</Accordion>
      </div>

      <div className="mt-6">
        <GameFormButton game={game.id} label="Enter room" />
      </div>
    </div>
  );
}
