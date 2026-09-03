import { Link } from "react-router-dom";

import { CONTACT } from "../config/contact";
import yuvapreneurIcon from "../assets/yuvapreneur-icon.png";

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        borderColor: "var(--beige)",
        backgroundColor: "var(--cream-deep)",
      }}
    >
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src={yuvapreneurIcon}
                alt="Yuvapreneur 2026 Logo"
                className="h-8 w-8 shrink-0 object-contain"
              />

              <span className="font-display text-lg font-semibold">
                Yuvapreneur.
              </span>
            </div>

            <p
              className="mt-4 max-w-sm text-sm leading-relaxed"
              style={{ color: "var(--green-soft)" }}
            >
              A student founder gathering at the University of Allahabad.
              Bring the idea, find the people, make it real.
            </p>
          </div>

          <div>
            <h3
              className="text-sm font-semibold"
              style={{ color: "var(--green)" }}
            >
              Find your way
            </h3>

            <ul
              className="mt-4 space-y-2.5 text-sm"
              style={{ color: "var(--green-soft)" }}
            >
              <li>
                <Link to="/schedule" className="hover:opacity-70">
                  Schedule & venue
                </Link>
              </li>

              <li>
                <Link to="/games" className="hover:opacity-70">
                  Find your game
                </Link>
              </li>

              <li>
                <Link to="/committee" className="hover:opacity-70">
                  Meet the committee
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:opacity-70">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className="text-sm font-semibold"
              style={{ color: "var(--green)" }}
            >
              Reach us
            </h3>

            <ul
              className="mt-4 space-y-2.5 text-sm"
              style={{ color: "var(--green-soft)" }}
            >
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:opacity-70"
                >
                  {CONTACT.email}
                </a>
              </li>

              {CONTACT.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="hover:opacity-70"
                  >
                    Call: {phone}
                  </a>
                </li>
              ))}

              <li>
                <a
                  href="https://www.instagram.com/yuvapreneur2026/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70"
                >
                  Instagram: @yuvapreneur2026
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 flex flex-col gap-2 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between"
          style={{
            borderColor: "var(--beige)",
            color: "var(--green-soft)",
          }}
        >
          <span>Yuvapreneur 2026 — University of Allahabad</span>

          <span>Student entrepreneurship event</span>
        </div>
      </div>
    </footer>
  );
}