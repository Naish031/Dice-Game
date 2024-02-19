import React from "react";
import clsx from "clsx";

const NumberSelector = ({
  selectedNumber,
  setSelectedNumber,
  error,
  setError,
}) => {
  const diceArray = [1, 2, 3, 4, 5, 6];

  const selectNumber = (index) => {
    setSelectedNumber(index);
    setError("");
  };

  return (
    <div className="flex flex-col justify-center items-end gap-[20px]">
      {error ? (
        <p className="text-red-700 text-base font-semibold">{error}</p>
      ) : (
        <div className="h-[24px]" />
      )}
      <div className="flex items-start gap-[24px]">
        {diceArray.map((item, index) => (
          <div
            key={index}
            onClick={() => selectNumber(index)}
            className={clsx(
              "w-20 h-20 flex justify-center items-center py-5 border-2 border-black",
              selectedNumber === index
                ? "bg-black text-white transition duration-150 ease-in-out"
                : "bg-white"
            )}
          >
            {item}
          </div>
        ))}
      </div>
      <h3 className="text-black text-2xl font-extrabold">Select Number</h3>
    </div>
  );
};

export default NumberSelector;
