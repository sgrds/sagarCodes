import Marquee from "react-fast-marquee";

const MarqueeComponent = ({
  direction = "left",
  gradient = "false",
  speed = 20,
  pauseOnClick = false,
  gap = "16",
  children,
}) => {
  return (
    <Marquee
      direction={direction}
      gradient={gradient}
      speed={speed}
      pauseOnClick={pauseOnClick}
    >
      <div className={`flex gap-${gap} mr-${gap}`}>{children}</div>
    </Marquee>
  );
};

export default MarqueeComponent;
