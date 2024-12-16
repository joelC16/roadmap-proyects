"use client";

import Card from "./components/card";
import ProcessBar from "./components/processBar";
import data from "../public/data.json";
import { useState } from "react";

export default function Home() {
  const [number, setNumber] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const previousCard = () => {
    if (number > 0) {
      setNumber(number - 1);
      setFlipped(false); // Siempre vuelve al frente
    }
  };
  const nextCard = () => {
    if (number < data.length - 1) {
      setNumber(number + 1);
      setFlipped(false); // Siempre vuelve al frente
    }
  };
  return (
    <div className="container-page">
      <h1 className="title-page">Flash cards</h1>

      <div className="container-processBar">
        <ProcessBar number={number}></ProcessBar>
        <p className="amount">
          {number + 1} of {data.length}
        </p>
      </div>

      <div>
        <Card
          number={number}
          flipped={flipped}
          setFlipped={setFlipped}
          previousCard={previousCard}
          nextCard={nextCard}
        ></Card>
      </div>
    </div>
  );
}
