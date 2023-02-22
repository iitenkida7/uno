//import { useState } from "react";
import "./App.css";
import { cardColorToBgColorClassName, createCards } from "./Helper";

function App() {
  const cards: Card[] = createCards();

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

export default App;
