"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import data from "../../public/data.json";

export default function GroupButtons({
  number,
  setFlipped,
  nextCard,
  previousCard,
  hideOrShow,
}) {
  return (
    <div className="container-buttons">
      <button
        className={`btn-previous ${number === 0 ? "highlight" : ""}`}
        onClick={previousCard}
      >
        <FontAwesomeIcon icon={faChevronLeft} size="1x"></FontAwesomeIcon>{" "}
        Previous
      </button>
      <button
        className="show-hide-answer"
        onClick={() => setFlipped((prev) => !prev)}
      >
        {hideOrShow}
      </button>
      <button
        className={`btn-next ${number + 1 == data.length ? "highlight" : ""}`}
        onClick={nextCard}
      >
        Next <FontAwesomeIcon icon={faChevronRight} size="1x"></FontAwesomeIcon>
      </button>
    </div>
  );
}
