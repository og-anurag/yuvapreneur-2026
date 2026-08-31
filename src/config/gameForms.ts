// Centralized Google Form URLs.
// This file is the ONLY place where form URLs should live.
// Replace each placeholder with the real Google Form link before launch.
export const GAME_FORM_URLS: Record<string, string> = {
  flipvert: "https://docs.google.com/forms/d/e/1FAIpQLSfFWqLxMXb65uGp-j-DFnyqDPsLkBLxbZ40yEfDPNwuUKNQ7Q/viewform?usp=publish-editor",
  brandMobiFlex: "https://docs.google.com/forms/d/e/1FAIpQLScGB0lSuqNsDm3LFC88nCmNju4C07--aROiU798tYmRNUlptA/viewform?usp=publish-editor",
  trashToTreasure: "https://docs.google.com/forms/d/e/1FAIpQLSfHOzYAX_38E2s-5FmOkFaaoY1t31EHH2GoVBBRnkPj8QO8ag/viewform?usp=publish-editor",
  corporateConquestQuiz: "https://docs.google.com/forms/d/e/1FAIpQLSdy3brCWhUyg55S6zfOHmIheQQHHlUhNi2o6XWpY9tK1W-a8Q/viewform?usp=publish-editor",
};

export type GameId = keyof typeof GAME_FORM_URLS;
