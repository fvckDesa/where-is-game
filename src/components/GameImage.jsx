// types
import PropTypes from "prop-types";
import { htmlElementType, reactRefType } from "@types";
// hooks
import { useState, useEffect, forwardRef } from "react";

const GameImage = forwardRef(
  ({ containerRef, image, onClick, onResize, x, y, children }, imageRef) => {
    const [{ width, height }, setDimensions] = useState({
      width: 0,
      height: 0,
    });

    useEffect(() => {
      function resize() {
        if (!x && !y) return;
        // get new dimensions of image
        const newWidth = imageRef.current.scrollWidth;
        const newHeight = imageRef.current.scrollHeight;
        onResize({
          // oldX : oldWidth = newX : newWidth
          x: (x * newWidth) / (width || newWidth),
          // oldY : oldHeight = newY : newHeight
          y: (y * newHeight) / (height || newHeight),
        });
        setDimensions({ width: newWidth, height: newHeight });
      }
      window.addEventListener("resize", resize);
      return () => window.removeEventListener("resize", resize);
    }, [width, height, x, y]);

    function handlerClick({ pageX, pageY }) {
      // get top distance from top 0 of window
      const { top, left } = containerRef.current.getBoundingClientRect();
      // get padding of image
      const padding = parseFloat(
        getComputedStyle(containerRef.current).paddingLeft
      );
      onClick({
        // x in image is point click on screen minus the padding
        x: pageX - padding - left,
        // y in image is point click on screen minus distance to top 0 plus the height of scroll
        y: pageY - top + containerRef.current.scrollTop,
      });
    }

    return (
      <span className="cursor-gamePointer relative" onClick={handlerClick}>
        <img ref={imageRef} className="w-full min-h-full" src={image} />
        {children}
      </span>
    );
  }
);

GameImage.propTypes = {
  image: PropTypes.string.isRequired,
  containerRef: reactRefType(htmlElementType).isRequired,
  onClick: PropTypes.func,
  onResize: PropTypes.func,
  x: PropTypes.number,
  y: PropTypes.number,
};

export default GameImage;
