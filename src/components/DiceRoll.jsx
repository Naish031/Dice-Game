import React, { useState } from "react";

const DiceRoll = ({ currentDice, rollDice }) => {
 

  return (
    <div
      onClick={rollDice}
      className="flex flex-col justify-center items-center gap-1"
    >
      <img src={`/images/dice_${currentDice}.png`} alt="numbered dice" />
      <small className="text-black text-2xl font-medium">
        Click on Dice to roll
      </small>
    </div>
  );
};

export default DiceRoll;
