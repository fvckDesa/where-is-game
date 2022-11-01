// types
import PropTypes from "prop-types";
import { characterType } from "@types";
// hooks
import { useState, memo } from "react";
// components
import DropDown from "@components/DropDown";
import SelectedPoint from "@components/SelectedPoint";

function GameImage({ onSelect, containerRef, image, characters }) {
  const [isClicked, setIsClicked] = useState(false);
  const [{ x, y }, setCoords] = useState({ x: 0, y: 0 });

  function handlerClick({ pageX, pageY }) {
    const { top } = containerRef.current.getBoundingClientRect();
    const padding = parseFloat(
      getComputedStyle(containerRef.current).paddingLeft
    );
    setCoords({
      x: pageX - padding,
      y: pageY - top + containerRef.current.scrollTop,
    });
    setIsClicked(true);
  }

  function handlerClose(e) {
    e.stopPropagation();
    setIsClicked(false);
  }

  function handlerSelect(id, { x: characterX, y: characterY }) {
    onSelect(
      id,
      x > characterX - 25 &&
        x < characterX + 25 &&
        y > characterY - 25 &&
        y < characterY + 25
    );
  }

  return (
    <span className="cursor-gamePointer relative" onClick={handlerClick}>
      <img className="w-full" src={image} />
      {isClicked && (
        <>
          <DropDown
            characters={characters}
            x={x}
            y={y}
            onClose={handlerClose}
            onSelect={handlerSelect}
          />
          <SelectedPoint x={x} y={y} />
        </>
      )}
    </span>
  );
}

GameImage.propTypes = {
  image: PropTypes.string.isRequired,
  characters: PropTypes.arrayOf(characterType).isRequired,
  onSelect: PropTypes.func,
  containerRef: PropTypes.shape({ current: PropTypes.instanceOf(HTMLElement) })
    .isRequired,
};

export default memo(GameImage);
