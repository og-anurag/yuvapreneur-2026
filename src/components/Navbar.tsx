import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/schedule", label: "Schedule" },
  { to: "/games", label: "Games" },
  { to: "/committee", label: "Committee" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b" style={{ borderColor: "var(--beige)", backgroundColor: "rgba(246,241,228,0.92)", backdropFilter: "blur(6px)" }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <NavLink to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span
            className="flex h-9 w-9 items-center justify-center rounded-lg font-display text-sm font-semibold"
            style={{ backgroundColor: "var(--orange)", color: "var(--cream)" }}
          >
            YP
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold" style={{ color: "var(--green)" }}>
              Yuvapreneur
            </span>
            <span className="block text-[11px] tracking-wide" style={{ color: "var(--green-soft)" }}>
              Allahabad · 2026
            </span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-[15px] transition-colors ${isActive ? "font-semibold" : "hover:opacity-70"}`
              }
              style={({ isActive }: { isActive: boolean }) => ({
                color: isActive ? "var(--orange-deep)" : "var(--green)",
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border md:hidden"
          style={{ borderColor: "var(--beige)" }}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-4">
            <span
              className="absolute left-0 top-0 block h-[2px] w-4 transition-transform"
              style={{ backgroundColor: "var(--green)", transform: open ? "translateY(6px) rotate(45deg)" : "none" }}
            />
            <span
              className="absolute left-0 top-1/2 block h-[2px] w-4 -translate-y-1/2 transition-opacity"
              style={{ backgroundColor: "var(--green)", opacity: open ? 0 : 1 }}
            />
            <span
              className="absolute bottom-0 left-0 block h-[2px] w-4 transition-transform"
              style={{ backgroundColor: "var(--green)", transform: open ? "translateY(-6px) rotate(-45deg)" : "none" }}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav
          className="border-t md:hidden"
          style={{ borderColor: "var(--beige)", backgroundColor: "var(--cream)" }}
        >
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `border-b py-3 text-[15px] last:border-b-0 ${isActive ? "font-semibold" : ""}`
                }
                style={({ isActive }: { isActive: boolean }) => ({
                  borderColor: "var(--beige)",
                  color: isActive ? "var(--orange-deep)" : "var(--green)",
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
