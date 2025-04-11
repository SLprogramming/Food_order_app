import React from "react";

const SliderButton = (props) => {
  const { text } = props;
  return (
    <button
      className={`relative bg-white overflow-hidden mt-3 text-[var(--color-secondary)] py-5 px-[70px] text-1xl font-[700] rounded-full group/btnslider`}
    >
      <span className="relative z-10">{text}</span>{" "}
      <div
        className={`bg-[var(--color-primary)] z-5 absolute w-full h-full top-0 left-0 transition-all duration-200  group-hover/btnslider:translate-x-full `}
      ></div>
    </button>
  );
};

export default SliderButton;
