import Point from "@assets/point.svg";

function SelectedPoint({ x, y }) {
  return (
    <span className="absolute  z-0 animate-rotate " style={{ top: y, left: x }}>
      <img src={Point} alt="point clicked" />
    </span>
  );
}

export default SelectedPoint;
