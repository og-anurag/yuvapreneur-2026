import type { GameId } from "../config/gameForms";

export interface Game {
  id: GameId;
  number: string;
  title: string;
  description: string;
  teamSize: string;
  duration: string;
  seats: string;
  details: string;
}

export const GAMES: Game[] = [
  {
    id: "flipvert",
    number: "01",
    title: "Flipvert",
    description: "Two sides. One product. Infinite creativity.",
    teamSize: "3 per team",
    duration: "80 minutes",
    seats: "7 seats",
    details:
      "Teams are handed a product and a twist card, then asked to flip its purpose, its market, or its story in real time. You'll build a short pitch around the reversal and defend it in front of a panel that's listening for genuine reasoning, not just a clever line.",
  },
  {
    id: "brandMobiFlex",
    number: "02",
    title: "BrandMobiFlex",
    description: "Design / Adapt / Amplify",
    teamSize: "4 per team",
    duration: "125 minutes",
    seats: "6 seats",
    details:
      "A brand identity sprint across three stages. First you design a mobile-first brand from scratch, then adapt it to a constraint you didn't choose, then amplify it into a short campaign. Every stage is timed, and every decision from the first stage carries into the next.",
  },
  {
    id: "trashToTreasure",
    number: "03",
    title: "Trash to Treasure",
    description: "Reimagine what others leave behind.",
    teamSize: "4 per team",
    duration: "65 minutes",
    seats: "5 seats",
    details:
      "Working from a bag of everyday waste materials, teams design a product or service that turns discarded things into something people would pay for. Judges score on the strength of the idea and how convincingly you can price and pitch it, not on craft alone.",
  },
  {
    id: "corporateConquestQuiz",
    number: "04",
    title: "Corporate Conquest Quiz",
    description: "Know the names behind the names.",
    teamSize: "2 per team",
    duration: "60 minutes",
    seats: "10 seats",
    details:
      "A fast-paced business and brand-history quiz covering founders, mergers, logos, and the stories behind well-known companies. Rounds move quickly, and buzzer speed matters as much as recall — come ready to think on your feet.",
  },
];

export const getGameById = (id: string) => GAMES.find((g) => g.id === id);
