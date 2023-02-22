import React from "react";

const colors: string[] = ["Red", "Yellow", "Green", "Blue"];

type Card = {
  color: string;
  number: number;
};

const cards: Card[] = [];

const shuffleArray = (array: Card[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

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
