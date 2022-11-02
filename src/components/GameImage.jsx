// types
import PropTypes from "prop-types";
import { characterType } from "@types";
// hooks
import { useState, memo, useEffect, useRef } from "react";
// components
import DropDown from "@components/DropDown";
import SelectedPoint from "@components/SelectedPoint";
// utils
import { createCoordInRange } from "@utils";

function GameImage({ onSelect, containerRef, image, characters }) {
  const [isClicked, setIsClicked] = useState(false);
  const [{ x, y }, setCoords] = useState({ x: 0, y: 0 });
  const [{ width, height }, setDimensions] = useState({ width: 0, height: 0 });
  const imageRef = useRef(null);

  useEffect(() => {
    function resize() {
      // get new dimensions of image
      const newWidth = imageRef.current.scrollWidth;
      const newHeight = imageRef.current.scrollHeight;
      setCoords((prev) => ({
        // oldX : oldWidth = newX : newWidth
        x: (prev.x * newWidth) / (width || newWidth),
        // oldY : oldHeight = newY : newHeight
        y: (prev.y * newHeight) / (height || newHeight),
      }));
      setDimensions({ width: newWidth, height: newHeight });
    }
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [width, height]);

  function handlerClick({ pageX, pageY }) {
    // get top distance from top 0 of window
    const { top } = containerRef.current.getBoundingClientRect();
    // get padding of image
    const padding = parseFloat(
      getComputedStyle(containerRef.current).paddingLeft
    );
    setCoords({
      // x in image is point click on screen minus the padding
      x: pageX - padding,
      // y in image is point click on screen minus distance to top 0 plus the height of scroll
      y: pageY - top + containerRef.current.scrollTop,
    });
    setIsClicked(true);
  }

  function handlerClose(e) {
    e.stopPropagation();
    setIsClicked(false);
  }

  function handlerSelect(id, { x: ratioX, y: ratioY }) {
    // get width and height of image
    const width = imageRef.current.scrollWidth;
    const height = imageRef.current.scrollHeight;
    // transform ratio of coords in px in the new image
    // ratioX = x / width
    // ratioY = y / height
    const characterX = ratioX * width,
      characterY = ratioY * height;
    // create function that check if point of user is in pointer circle
    const isCoordInRange = createCoordInRange(50);
    onSelect(
      id,
      isCoordInRange(x, characterX) && isCoordInRange(y, characterY)
    );
  }

  return (
    <span className="cursor-gamePointer relative" onClick={handlerClick}>
      <img ref={imageRef} className="w-full" src={image} />
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
