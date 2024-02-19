import React from "react";

const Rules = () => {
  return (
    <div className="bg-[#FBF1F1] max-w-[800px] flex flex-col justify-center items-start p-5 gap-4 mx-[25%]">
      <h3 className="text-black text-2xl font-bold">How to play dice game</h3>
      <ol className="flex-col list-item text-black text-base font-medium">
        <li>Select any number.</li>
        <li>Click on dice image.</li>
        <li>
          After clicking on the dice if selected number is equal to dice number,
          you will get same point as dice.
        </li>
        <li>On wrong guess 2 points will be dedcuted! </li>
      </ol>
    </div>
  );
};

export default Rules;
