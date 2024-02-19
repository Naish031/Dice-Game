import React from "react";
import Button from "./Button/Button";
// import dice from 'images/dices 1.png'

// eslint-disable-next-line react/prop-types
const StartGame = ({ toggle }) => {
  return (
    <div className="flex justify-start items-center">
      <div className="w-1/2 flex justify-center items-center">
        <img src='images/dices 1.png' alt="huge dice" />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-end">
        <h1 className="text-black text-[96px] font-bold leading-normal ">
          DICE GAME
        </h1>
        <Button text="Play Now" onClick={toggle} primary={true} secondary={undefined} />
      </div>
    </div>
  );
};

export default StartGame;
