import "./logosCarrousel.css";

export const LogosCarrousel = ({
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

  const CarrouselContent = ({ imgSize, spacing }) => {
    return (
      <div
        className={
          "carrousel__logos carrousel__logos-active" + " " + classSpeed
        }
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
      className={"carrousel-container" + " " + classWidth}
      style={{
        background: background,
        "--carrouselWidth": `${width}%`,
      }}
    >
      <div
        className="carrousel__overlay"
        style={{
          "--carrousel-vanish-color": background,
        }}
      />
      <CarrouselContent imgSize={imgSize} spacing={spacing} />
      <CarrouselContent imgSize={imgSize} spacing={spacing} />
    </div>
  );
};
