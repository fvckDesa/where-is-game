// types
import PropTypes from "prop-types";
// assets
import Point from "@src/assets/point.svg";

function SelectedPoint({ x, y }) {
  return (
    <span className="absolute  z-0 animate-rotate " style={{ top: y, left: x }}>
      <img className="max-w-none" src={Point} alt="point clicked" />
    </span>
  );
}

SelectedPoint.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
};

export default SelectedPoint;
