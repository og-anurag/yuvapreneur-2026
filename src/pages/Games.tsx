import { GAMES } from "../data/games";
import GameCard from "../components/GameCard";

export default function Games() {
  return (
    <div className="page-enter mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="text-xs font-semibold" style={{ color: "var(--orange-deep)" }}>Games</p>
      <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl" style={{ color: "var(--green)" }}>
        Pick a challenge. Find your people.
      </h1>
      <p className="mt-5 max-w-xl text-base leading-relaxed" style={{ color: "var(--green-soft)" }}>
        Four formats, four kinds of founder energy. Choose the room that sounds like you — or the
        one that makes you a little nervous.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {GAMES.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
