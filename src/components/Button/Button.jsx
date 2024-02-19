import React from "react";
import clsx from "clsx";
// eslint-disable-next-line react/prop-types

const Button = ({ text, secondary, primary, ...rest }) => {
  return (
    <button
      {...rest}
      className={clsx(
        primary &&
          "bg-black text-white hover:bg-white hover:text-black hover:transition hover:duration-150 marker:hover:ease-in-out",
        secondary && " bg-black text-white",
        "min-w-[220px] px-[18px] py-[10px] rounded-md border border-black text-center text-base font-semibold text-black"
      )}
    >
      {text}
    </button>
  );
};



export default Button;
