//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
import Hello  from "./Hello";
import { createCards } from "./Cards";
import "./App.css";

function App() {

  type Item = {
    id: number;
    title: string;
  };
  type Card = {
    color: string;
    number: number;
  };

  const items: Item[] = [
    { id: 1, title: "yamada" },
    { id: 2, title: "tokashiki" },
    { id: 3, title: "ohtsubo" },
    { id: 4, title: "ishii" },
  ];


  const cards = createCards();

  return (
    <div className="App">
      <ul>
        {cards.map((card: Card) => (
          <li>
            <span className="text-3xl font-bold underline">{card.color} / {card.number}</span>
          </li>
        ))}
      </ul>
      <Hello />
    </div>
  );
}


export default App;
