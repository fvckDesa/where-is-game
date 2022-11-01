// types
import PropTypes from "prop-types";
// hooks
import { useState, useEffect } from "react";

function SelectPopUp({ isCorrect, onClose, ms = 1000 }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isCorrect == undefined) return;
    setIsActive(true);
    const timeout = setTimeout(() => {
      setIsActive(false);
      onClose();
    }, ms);
    return () => clearTimeout(timeout);
  }, [isCorrect]);

  if (!isActive) return null;

  return (
    <div
      className={`${
        isCorrect ? "bg-green-500" : "bg-red-500"
      } absolute top-[5vh] left-1/2 translate-x-[-50%] px-4 py-2 rounded text-white z-10`}
    >
      {isCorrect ? "Nice!" : "Character is not here"}
    </div>
  );
}

SelectPopUp.propTypes = {
  isCorrect: PropTypes.bool,
  onClose: PropTypes.func,
  ms: PropTypes.number,
};

export default SelectPopUp;
