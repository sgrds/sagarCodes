import Marquee from "react-fast-marquee";

const MarqueeComponent = ({
  direction = "left",
  gradient = "false",
  speed = 20,
  pauseOnClick = false,
  // gap = "16",
  children,
}) => {
  return (
    <Marquee
      direction={direction}
      gradient={gradient}
      speed={speed}
      pauseOnClick={pauseOnClick}
    >
      <div
        className={`flex gap-11 md:gap-16 lg:gap-20 mr-11 md:mr-16 lg:mr-20`}
      >
        {children}
      </div>
    </Marquee>
  );
};

export default MarqueeComponent;
