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
      <ul>
        {cards.map((card: Card) => (
          <li>
            <span className="text-3xl font-bold underline">
              {card.color} / {card.number}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
