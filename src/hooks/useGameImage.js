import { useRef, useState } from "react";

export function useGameImage(initCoords) {
  const [{ x, y }, setCoords] = useState(initCoords);
  const containerRef = useRef();
  const imageRef = useRef();

  return { x, y, setCoords, containerRef, imageRef };
}
