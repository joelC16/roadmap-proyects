"use client";

// import data from "../../public/data.json";
import CardFront from "./cardFront";
import CardBack from "./cardBack";

export default function Card({
  number,
  flipped,
  setFlipped,
  previousCard,
  nextCard,
}) {
  return (
    <div className="card-container">
      <div className={`card ${flipped ? "flipped" : ""}`}>
        <CardFront
          number={number}
          setFlipped={setFlipped}
          previousCard={previousCard}
          nextCard={nextCard}
        ></CardFront>
        <CardBack
          number={number}
          setFlipped={setFlipped}
          previousCard={previousCard}
          nextCard={nextCard}
        ></CardBack>
      </div>
    </div>
  );
}
