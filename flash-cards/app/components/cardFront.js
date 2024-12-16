"use client";

import data from "../../public/data.json";
import GroupButtons from "./groupButtons";

export default function CardFront({
  number,
  previousCard,
  nextCard,
  setFlipped,
}) {
  return (
    <div className="front">
      <div className="paragraph">
        <p className="question">{data[number].pregunta}</p>
      </div>
      <GroupButtons
        number={number}
        previousCard={previousCard}
        nextCard={nextCard}
        setFlipped={setFlipped}
        hideOrShow={"Show answer"}
      ></GroupButtons>
    </div>
  );
}
