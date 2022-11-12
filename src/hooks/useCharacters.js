import { useState, useEffect } from "react";
// firebase
import { onSnapshot } from "firebase/firestore";
import { formatDocuments } from "@database/database";
import { createCharactersQuery } from "@database/games";

export function useCharacters(gameId) {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    return onSnapshot(createCharactersQuery(gameId), (snapshot) => {
      setCharacters(formatDocuments(snapshot.docs));
    });
  }, [gameId]);
  return characters;
}
