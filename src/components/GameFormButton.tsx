import { GAME_FORM_URLS, type GameId } from "../config/gameForms";

interface GameFormButtonProps {
  game: GameId;
  label: string;
  className?: string;
}

export default function GameFormButton({ game, label, className = "" }: GameFormButtonProps) {
  const url = GAME_FORM_URLS[game];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 ${className}`}
      style={{ backgroundColor: "var(--green)", color: "var(--cream)" }}
    >
      {label}
      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
    </a>
  );
}
