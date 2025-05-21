import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { checkGuess, checkCorrectAnswer } from "../../game-helpers";
import HappyBanner from "../HappyBanner";
import SadBanner from "../SadBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [correctAnswer, setCorrectAnswer] = React.useState(false);
  const [endOfGame, setEndOfGame] = React.useState(false);

  function handleGuessSubmit(guess) {
    const checkedGuess = checkGuess(guess, answer);
    const isCorrect = checkCorrectAnswer(checkedGuess);
    const isEndOfGame = guessList.length === 5 && !isCorrect;
    setGuessList([...guessList, checkedGuess]);
    setCorrectAnswer(isCorrect);
    setEndOfGame(isEndOfGame);
  }

  return (
    <>
      <GuessResults guessList={guessList} />
      {correctAnswer && <HappyBanner tries={guessList.length}></HappyBanner>}
      {endOfGame && <SadBanner correctAnswer={answer}></SadBanner>}
      <GuessInput
        handleGuessSubmit={handleGuessSubmit}
        disabled={correctAnswer || endOfGame}
      />
    </>
  );
  // return <GuessInput answer={answer} />;
}

export default Game;
