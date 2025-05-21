import React from "react";
import { range } from "../../utils";

function Guess({ guessResult }) {
  console.log(guessResult);
  return (
    <p className="guess">
      {range(5).map((index) => {
        const statusClass = guessResult
          ? `cell ${guessResult[index].status}`
          : "cell";
        return (
          <span key={index} className={statusClass}>
            {guessResult ? guessResult[index].letter : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
