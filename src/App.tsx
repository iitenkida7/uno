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
        {items.map((item: Item) => (
          <li>
            {item.id} / {item.title}
          </li>
        ))}
      </ul>
      <Hello />
    </div>
  );
}


export default App;
