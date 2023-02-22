//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
import Hello from "./Hello";
import { createCards } from "./Cards";
import "./App.css";

function App() {
  type Card = {
    color: string;
    number: number;
  };

  const cards = createCards();

  return (
    <div className="App">
      <div>
        {cards.map((card: Card) => (
          <div className={"w-[300px] h-[400px] flex justify-center items-center rounded-lg shadow-2xl " + cardColorToBgColorClassName(card.color)}>
            <div className="bg-gray-700 w-3/5 h-3/5 flex justify-center items-center rounded-lg">
              <div className="text-9xl font-bold text-white">{card.number}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const cardColorToBgColorClassName = (colorName: string) => {
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

export default App;
