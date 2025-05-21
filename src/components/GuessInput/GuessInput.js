import React from "react";

function GuessInput({ handleGuessSubmit, disabled }) {
  const [guess, setGuess] = React.useState("");

  const handleGuessChange = (event) => {
    setGuess(event.target.value.toUpperCase());
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ guess });
    handleGuessSubmit(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        pattern="[A-Za-z]{5}"
        maxLength="5"
        value={guess}
        onChange={handleGuessChange}
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInput;
