// Centralized Google Form URLs.
// This file is the ONLY place where form URLs should live.
export const GAME_FORM_URLS: Record<string, string> = {
  flipvert: "https://forms.gle/BPsiLkZoWdHMKaXj8",
  brandMobiFlex: "https://forms.gle/ahUFrEjwEFSptubc9",
  trashToTreasure: "https://forms.gle/g2vCKuZ91FzumHjB6",
  corporateConquestQuiz: "https://forms.gle/7xQ9ZonK3sZ1BzAa9",
};

export type GameId = keyof typeof GAME_FORM_URLS;