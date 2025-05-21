import React from "react";

function HappyBanner( {tries} ) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in&nbsp;
        <strong>{tries} guesses</strong>.
      </p>
    </div>
  );
}

export default HappyBanner;
