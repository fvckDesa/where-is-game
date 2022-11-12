// components
import {
  GameNavbar,
  PopUp,
  GameImage,
  DropDown,
  SelectedPoint,
} from "@src/components";
// utils
import { createCoordInRange } from "@src/utils";
// hooks
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGame, useTimer, useGameImage } from "@src/hooks";
import { useUserContext } from "@src/contexts/UserProvider";
// hoc
import withAuth from "@src/hoc/withAuth";
// firebase
import { setGameScore } from "@database/games";

function Game() {
  // game image
  const { x, y, setCoords, containerRef, imageRef } = useGameImage({
    x: 0,
    y: 0,
  });
  const [isClicked, setIsClicked] = useState(false);
  const [isCorrect, setIsCorrect] = useState();
  // game
  const { id: gameId } = useParams();
  const { game, isGameOver, setFound } = useGame(gameId);
  const timer = useTimer(isGameOver);
  // user
  const { user } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isGameOver) {
      setGameScore(gameId, user.name, timer);
      navigate(`/leaderboard/${gameId}`);
    }
  }, [isGameOver]);

  function handlerPopUpClose() {
    setIsCorrect(null);
  }

  function handlerClick(newCoords) {
    setCoords(newCoords);
    setIsClicked(true);
  }

  function handlerDropDownClose(e) {
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
    // check if it is correct
    const isCorrect =
      isCoordInRange(x, characterX) && isCoordInRange(y, characterY);
    setIsCorrect(isCorrect);
    if (isCorrect) {
      setFound(id);
    }
  }

  if (!game) {
    return "Loading...";
  }

  return (
    <div className="h-[90%] overflow-hidden relative">
      <GameNavbar characters={game.characters} timer={timer} />
      <div className="h-[90%] w-full relative">
        <PopUp
          className={isCorrect ? "bg-green-500" : "bg-red-500"}
          message={isCorrect ? "nice" : "character is not here"}
          active={isCorrect}
          onClose={handlerPopUpClose}
        />
        <div
          ref={containerRef}
          className="h-full w-full px-[60px] pb-[60px] overflow-y-scroll relative z-0"
        >
          <GameImage
            ref={imageRef}
            image={game.image}
            containerRef={containerRef}
            x={x}
            y={y}
            onClick={handlerClick}
          >
            {isClicked && (
              <>
                <DropDown
                  characters={game.characters}
                  x={x}
                  y={y}
                  onClose={handlerDropDownClose}
                  onSelect={handlerSelect}
                />
                <SelectedPoint x={x} y={y} />
              </>
            )}
          </GameImage>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Game);
