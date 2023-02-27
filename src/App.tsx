//import { useState } from "react";
import "./App.css";
import { useState, useCallback } from "react";
import { cardColorToBgColorClassName, createCards } from "./Helper";

function App() {
  const [deckCards, setDeckCards] = useState<Card[]>(createCards());
  const [myCards, setMyCards] = useState<Card[]>(() => {
    let cards = [];
    for (let i = 1; i <= 5; i++) {
      let card = deckCards.shift();
      if (card === undefined) {
        throw new Error("Empty card");
      } else {
        cards.push(card);
      }
    }
    return cards;
  });
  const [discardCards, setDiscardCards] = useState<Card | null>();
  const [activeCard, setActiveCard] = useState<Card>(() => {
    let card = deckCards.shift();
    if (card === undefined) {
      throw new Error("Empty card");
    } else {
      return card;
    }
  });

  const getCard = useCallback(() => {
    let card = deckCards.shift();
    if (card === undefined) {
      throw new Error("Empty card");
    } 
    const cards = myCards;
    cards.push(card);
    console.log(card);

    setMyCards(cards);
  
  }, []);

  return (
    <div className="App">
      <div>
        <div className={"w-[300px] h-[400px] flex justify-center items-center rounded-lg shadow-2xl " + cardColorToBgColorClassName(activeCard.color)}>
          <div className="bg-gray-700 w-3/5 h-3/5 flex justify-center items-center rounded-lg">
            <div className="text-9xl font-bold text-white">{activeCard.number}</div>
          </div>
        </div>

{/*         {deckCards.map((card: Card) => (
          <div className={"w-[150px] h-[200px] flex justify-center items-center rounded-lg shadow-2xl " + cardColorToBgColorClassName(card.color)}>
            <div className="bg-gray-700 w-3/5 h-3/5 flex justify-center items-center rounded-lg">
              <div className="text-9xl font-bold text-white">{card.number}</div>
            </div>
          </div>
        ))} */}
      </div>

      <div className="flex flex-row">
         {myCards.map((card: Card) => (
          <div className="basis-1/5">
          <div className={"w-[150px] h-[200px] flex justify-center items-center rounded-lg shadow-2xl " + cardColorToBgColorClassName(card.color)}>
            <div className="bg-gray-700 w-3/5 h-3/5 flex justify-center items-center rounded-lg">
              <div className="text-9xl font-bold text-white">{card.number}</div>
            </div>
          </div>
          </div>
        ))}
        
      </div>
      <button onClick={getCard}>カードを引く</button>


    </div>
  );
}

export default App;
