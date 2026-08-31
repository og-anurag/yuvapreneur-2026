import { useId, useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export default function Accordion({ title, children }: AccordionProps) {
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
        <div className="min-h-0 overflow-hidden">
          <p className="pb-4 text-sm leading-relaxed" style={{ color: "var(--green-soft)" }}>
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}
