import { shuffleArray } from "./Helper";

const colors: string[] = ["Red", "Yellow", "Green", "Blue"];
const cards: Card[] = [];

export const createCards = () => {
  colors.map((color) => {
    for (let i = 0; i <= 9; i++) {
      cards.push({
        color: color,
        number: i,
      });

      if (i !== 0) {
        cards.push({
          color: color,
          number: i,
        });
      }
    }
  });
  return shuffleArray(cards);
};
