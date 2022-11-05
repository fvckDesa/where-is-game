// types
import PropTypes from "prop-types";
// hooks
import { useState, useEffect } from "react";

function PopUp({ className, active, message, onClose = () => {}, ms = 1000 }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (active == undefined) return;
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
      onClose();
    }, ms);
  }, [active, ms]);

  if (!isActive) return null;

  return (
    <div
      className={`${className} absolute top-[5vh] left-1/2 translate-x-[-50%] px-4 py-2 rounded text-white z-10`}
    >
      {message}
    </div>
  );
}

PopUp.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  active: PropTypes.any,
  onClose: PropTypes.func,
  ms: PropTypes.number,
};

export default PopUp;
