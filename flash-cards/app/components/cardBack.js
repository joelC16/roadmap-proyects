"use client";

import data from "../../public/data.json";
import GroupButtons from "./groupButtons";

export default function CardBack({
  number,
  previousCard,
  nextCard,
  setFlipped,
}) {
  return (
    <div className="back">
      <div className="paragraph">
        <p className="response">{data[number].respuesta}</p>
      </div>
      <GroupButtons
        number={number}
        previousCard={previousCard}
        nextCard={nextCard}
        setFlipped={setFlipped}
        hideOrShow={"Hide answer"}
      ></GroupButtons>
    </div>
  );
}
