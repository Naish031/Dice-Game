import React, { useState } from "react";

const TotalScore = ({ score, setScore }) => {

  return (
    <div className="flex flex-col items-center justify-end">
      <h1 className="text-black text-[100px] leading-[100px] font-semibold">
        {score}
      </h1>
      <h3 className="text-black text-2xl">Total Score</h3>
    </div>
  );
};

export default TotalScore;
