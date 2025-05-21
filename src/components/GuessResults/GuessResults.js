import React from "react";
import { range } from "../../utils";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guessList }) {
  console.log(guessList);
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => {
        return <Guess key={index} guessResult={guessList[index]}/>;
      })}
    </div>
  );
}

export default GuessResults;
