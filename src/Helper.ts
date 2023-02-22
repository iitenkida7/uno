export const shuffleArray = (array: Card[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const cardColorToBgColorClassName = (colorName: string) => {
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
  const colors: string[] = ["Red", "Yellow", "Green", "Blue"];
  const cards: Card[] = [];
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
