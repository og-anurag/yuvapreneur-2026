import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page-enter mx-auto flex max-w-2xl flex-col items-center px-5 py-28 text-center sm:px-8">
      <span className="font-display text-6xl font-semibold" style={{ color: "var(--orange)" }}>404</span>
      <h1 className="mt-4 font-display text-3xl font-semibold" style={{ color: "var(--green)" }}>
        This room doesn't exist.
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed" style={{ color: "var(--green-soft)" }}>
        The page you're looking for isn't part of Yuvapreneur. Head back to the homepage or find
        your game.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/"
          className="rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
          style={{ backgroundColor: "var(--orange)", color: "#fff" }}
        >
          Back to Home →
        </Link>
        <Link
          to="/games"
          className="rounded-full border px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
          style={{ borderColor: "var(--green)", color: "var(--green)" }}
        >
          View Games →
        </Link>
      </div>
    </div>
  );
}
