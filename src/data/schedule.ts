// Editable schedule data. Placeholder timings — update with confirmed details.
export interface ScheduleItem {
  date: string;
  time: string;
  event: string;
  venue: string;
  description: string;
}

export const SCHEDULE: ScheduleItem[] = [
  {
    date: "14 March 2026",
    time: "9:00 AM",
    event: "Registration & Check-in",
    venue: "Main Lawn, University of Allahabad",
    description: "Teams check in, collect kits, and settle into their rooms before the opening address.",
  },
  {
    date: "14 March 2026",
    time: "10:00 AM",
    event: "Opening Address",
    venue: "Senate Hall",
    description: "A short welcome from the organizing committee and a walkthrough of the day's four rooms.",
  },
  {
    date: "14 March 2026",
    time: "11:00 AM",
    event: "Flipvert",
    venue: "Room A, Innovation Block",
    description: "First game slot. Teams work the reversal brief and pitch to the panel.",
  },
  {
    date: "14 March 2026",
    time: "1:00 PM",
    event: "Lunch Break",
    venue: "Main Lawn",
    description: "Food, informal mixing, and a breather between rooms.",
  },
  {
    date: "14 March 2026",
    time: "2:00 PM",
    event: "BrandMobiFlex",
    venue: "Room B, Innovation Block",
    description: "Design, adapt, amplify — the three-stage brand sprint runs through the afternoon.",
  },
  {
    date: "14 March 2026",
    time: "4:30 PM",
    event: "Trash to Treasure",
    venue: "Room C, Innovation Block",
    description: "Materials are handed out and teams begin building their pitch.",
  },
  {
    date: "14 March 2026",
    time: "5:45 PM",
    event: "Corporate Conquest Quiz",
    venue: "Senate Hall",
    description: "The day closes with a fast-paced quiz round open to all attending teams.",
  },
  {
    date: "14 March 2026",
    time: "7:00 PM",
    event: "Results & Closing",
    venue: "Senate Hall",
    description: "Winners are announced across all four games, followed by closing remarks.",
  },
];
