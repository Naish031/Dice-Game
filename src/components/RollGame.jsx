import React, { useState, useEffect } from "react";
import Button from "./Button/Button";
import TotalScore from "./TotalScore";
import DiceRoll from "./DiceRoll";
import Rules from "./Rules";
import NumberSelector from "./NumberSelector";

const RollGame = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");

  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("Please select a number");

      return;
    }
    setError("");
    const randomNumber = generateRandomNumber();
    setCurrentDice(randomNumber);

    if (randomNumber === selectedNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(null);
  };

  return (
    <section className="w-full flex flex-col gap-9">
      <section className="flex items-center justify-between max-h-[180px]">
        <TotalScore score={score} setScore={setScore} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
        />
      </section>

      <DiceRoll currentDice={currentDice} rollDice={rollDice} />

      <div className="flex flex-col justify-center items-center gap-4">
        <Button
          text="Reset Score"
          secondary={undefined}
          primary={undefined}
          onClick={() => setScore(0)}
        />
        <Button
          text={showRules ? "Hide Rules" : "Show Rules"}
          secondary
          onClick={() => setShowRules(!showRules)}
          primary={undefined}
        />
      </div>

      {showRules && <Rules />}
    </section>
  );
};

export default RollGame;
