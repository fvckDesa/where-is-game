import { useState, useEffect } from "react";
import { getGameFromId } from "@database/games";

export function useGame(gameId) {
  const [game, setGame] = useState();
  const [isGameOver, setIsGameOver] = useState(false);
  useEffect(() => {
    getGameFromId(gameId).then((game) =>
      setGame({
        ...game,
        characters: game.characters.map((character) => ({
          ...character,
          found: false,
        })),
      })
    );
  }, [gameId]);

  useEffect(() => {
    if (game?.characters.every((character) => character.found)) {
      setIsGameOver(true);
    }
  }, [game]);

  function setFound(id) {
    setGame((prev) => ({
      ...prev,
      characters: prev.characters.map((character) => ({
        ...character,
        found: character.id === id ? true : character.found,
      })),
    }));
  }

  return { game, setFound, isGameOver };
}
