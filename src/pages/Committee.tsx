const FACULTY_COORDINATORS = [
  {
    name: "Dr. Honey Gupta",
    role: "Event Coordinator",
    initials: "HG",
  },
  {
    name: "Prof. (Dr.) G.B.S. Johri",
    role: "Head of Department",
    initials: "GJ",
  },
  {
    name: "Dr. Shefali Nandan",
    role: "Course Coordinator",
    initials: "SN",
  },
];

const STUDENT_COMMITTEE = [
  {
    name: "Anjali Gautam",
    programme: "IPM",
    semester: "7th Semester",
    initials: "AG",
  },
  {
    name: "Priya",
    programme: "IPM",
    semester: "7th Semester",
    initials: "P",
  },
  {
    name: "Vinay Kumar",
    programme: "IPM",
    semester: "3rd Semester",
    initials: "VK",
  },
  {
    name: "Mariya Fatima",
    programme: "IPM",
    semester: "7th Semester",
    initials: "MF",
  },
  {
    name: "Ujjwal",
    programme: "IPM",
    semester: "6th Semester",
    initials: "U",
  },
  {
    name: "Raj Pandey",
    programme: "IPM",
    semester: "3rd Semester",
    initials: "RP",
  },
];

export default function Committee() {
  return (
    <div className="page-enter mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="text-xs font-semibold" style={{ color: "var(--orange-deep)" }}>Committee</p>
      <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl" style={{ color: "var(--green)" }}>
        The people behind it.
      </h1>
      <p className="mt-5 max-w-xl text-base leading-relaxed" style={{ color: "var(--green-soft)" }}>
        A small team of students who planned, tested, and built every part of this day.
      </p>

      <h2 className="mt-14 font-display text-2xl font-semibold" style={{ color: "var(--green)" }}>
        Faculty Coordinators
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FACULTY_COORDINATORS.map((f) => (
          <div key={f.name} className="rounded-2xl border p-6" style={{ borderColor: "var(--beige)", backgroundColor: "#fff" }}>
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full font-display text-base font-semibold"
              style={{ backgroundColor: "var(--yellow)", color: "var(--green)" }}
            >
              {f.initials}
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold" style={{ color: "var(--green)" }}>{f.name}</h3>
            <p className="text-sm font-medium" style={{ color: "var(--orange-deep)" }}>{f.role}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-16 font-display text-2xl font-semibold" style={{ color: "var(--green)" }}>
        Student Organising Committee
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {STUDENT_COMMITTEE.map((m) => (
          <div key={m.name} className="rounded-2xl border p-6" style={{ borderColor: "var(--beige)", backgroundColor: "#fff" }}>
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full font-display text-base font-semibold"
              style={{ backgroundColor: "var(--yellow)", color: "var(--green)" }}
            >
              {m.initials}
            </div>
            <h2 className="mt-4 font-display text-xl font-semibold" style={{ color: "var(--green)" }}>{m.name}</h2>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--green-soft)" }}>
              {m.programme} — {m.semester}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}