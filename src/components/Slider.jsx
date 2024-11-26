import "./sliderlogos.css";

export const BrandsSlider = ({
  children,
  background,
  width,
  imgSize = 12.5,
  spacing = 3,
  speed,
}) => {
  const setSpeed = () => {
    if (speed) {
      if (speed == 1) {
        return " one";
      } else if (speed == 2) {
        return " two";
      } else if (speed == 3) {
        return " three";
      } else if (speed == 4) {
        return " four";
      } else if (speed == 5) {
        return " five";
      }
    } else return "";
  };
  const classSpeed = setSpeed();

  const setWidth = () => {
    if (width) {
      if (width == 25) {
        return " tf";
      } else if (width == 50) {
        return " ft";
      } else if (width == 75) {
        return " sf";
      } else if (width == 100) {
        return " hd";
      }
    } else return "";
  };
  const classWidth = setWidth();

  const SliderContent = ({ imgSize, spacing }) => {
    return (
      <div
        className={"slider__logos slider__logos-active" + " " + classSpeed}
        style={{
          "--imgHeight": `${imgSize}rem`,
          "--imgSpacing": `${spacing}rem`,
        }}
      >
        {children.map((child) => child)}
      </div>
    );
  };

  return (
    <div
      className={"slider-container" + " " + classWidth}
      style={{
        background: background,
        "--sliderWidth": `${width}%`,
      }}
    >
      <div
        className="slider__overlay"
        style={{
          "--slider-vanish-color": background,
        }}
      />
      <SliderContent imgSize={imgSize} spacing={spacing} />
      <SliderContent imgSize={imgSize} spacing={spacing} />
    </div>
  );
};
