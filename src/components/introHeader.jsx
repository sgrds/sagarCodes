import React from "react";

const IntroHeader = ({ meta, children }) => {
  const {
    intro = "Intro not found",
    number = 1,
    heading = "heading not found",
    title = " title not found",
    gradient = { from: "primary", to: "success" },
  } = meta;
  return (
    <div className="justify-items-center text-center">
      <h3 className="mb-10 tracking-[0.2em] text-xs font-black uppercase">
        {intro}
      </h3>
      {children}
      <div className="grid justify-items-center">
        <div className={`w-0.5 h-32 bg-gradient-to-t ${gradient.from}`} />
        <div
          className={`z-10 rounded-full px-4 py-2 bg-gradient-to-r font-black text-black ${gradient.from} ${gradient.to}`}
        >
          {number}
        </div>
      </div>
      <h3
        className={`mt-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-l ${gradient.from} ${gradient.to}`}
      >
        {heading}
      </h3>
      <h2 className="text-base-content mt-4 font-bold text-4xl lg:text-7xl">
        {title}
      </h2>
    </div>
  );
};

export default IntroHeader;
