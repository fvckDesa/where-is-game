// components
import GameNavbar from "@components/GameNavbar";
import GameOver from "@components/GameOver";
import SelectPopUp from "@components/SelectPopUp";
import GameImage from "@components/GameImage";
// hooks
import { useState, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useGame } from "@hooks/useGame";
import { useTimer } from "@hooks/useTimer";

function Game() {
  const containerRef = useRef();
  const { id: gameId } = useParams();
  const { game, isGameOver, setFound } = useGame(gameId);
  const timer = useTimer(isGameOver);
  const [isCorrect, setIsCorrect] = useState();

  const handlerSelect = useCallback((id, isCorrect) => {
    setIsCorrect(isCorrect);
    if (isCorrect) {
      setFound(id);
    }
  }, []);

  const handlerClose = useCallback(() => {
    setIsCorrect(null);
  }, []);

  if (!game) {
    return "Loading...";
  }

  return (
    <div className="h-[90%] overflow-hidden relative">
      <GameNavbar characters={game.characters} timer={timer} />
      <div className="h-[90%] w-full relative">
        <SelectPopUp isCorrect={isCorrect} onClose={handlerClose} />
        <div
          ref={containerRef}
          className="h-full w-full px-[60px] pb-[60px] overflow-y-scroll relative z-0"
        >
          <GameImage
            image={game.image}
            characters={game.characters}
            onSelect={handlerSelect}
            containerRef={containerRef}
          />
        </div>
      </div>
      {isGameOver && <GameOver score={timer} />}
    </div>
  );
}

export default Game;
