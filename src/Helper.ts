export const shuffleArray = (array: Card[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const cardColorToBgColorClassName = (colorName: Color) => {
  if (colorName === "Red") {
    return "bg-red-500";
  }
  if (colorName === "Blue") {
    return "bg-blue-500";
  }
  if (colorName === "Yellow") {
    return "bg-yellow-500";
  }
  if (colorName === "Green") {
    return "bg-green-500";
  }
};

export const createCards = () => {
  const colors: Color[] = ["Red", "Yellow", "Green", "Blue"];
  const cards: Card[] = [];
  colors.map((color) => {
    const cardNumbers: CardNumber[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    cardNumbers.map((cardNumber) => {
      cards.push({
        color: color,
        number: cardNumber,
      });

      if (cardNumber !== 0) {
        cards.push({
          color: color,
          number: cardNumber,
        });
      }
    });
  });

  return shuffleArray(cards);
};
