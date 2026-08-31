// Editable committee data. Replace with real names, roles, and bios.
export interface CommitteeMember {
  name: string;
  role: string;
  initials: string;
  description: string;
}

export const COMMITTEE: CommitteeMember[] = [
  {
    name: "Aditi Sharma",
    role: "Event Director",
    initials: "AS",
    description: "Oversees the full event across all four rooms and keeps every team on schedule.",
  },
  {
    name: "Rohan Verma",
    role: "Games Lead",
    initials: "RV",
    description: "Designed the four game formats and briefs each room's judging panel.",
  },
  {
    name: "Priya Nair",
    role: "Operations Lead",
    initials: "PN",
    description: "Handles venue logistics, kits, and on-ground coordination on the day.",
  },
  {
    name: "Karan Mehta",
    role: "Outreach Lead",
    initials: "KM",
    description: "Manages partnerships, sponsors, and communication with participating teams.",
  },
  {
    name: "Simran Kaur",
    role: "Design Lead",
    initials: "SK",
    description: "Owns the visual identity of Yuvapreneur, from branding to on-site signage.",
  },
  {
    name: "Aryan Gupta",
    role: "Tech Lead",
    initials: "AG",
    description: "Runs the website, forms, and any technical support needed during the event.",
  },
];
