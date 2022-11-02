import { useState, useEffect } from "react";
// firebase
import { onSnapshot } from "firebase/firestore";
import { createCharactersQuery, formatDocuments } from "@appFirebase/database";

export function useCharacters(gameId) {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    return onSnapshot(createCharactersQuery(gameId), (snapshot) => {
      setCharacters(formatDocuments(snapshot.docs));
    });
  }, [gameId]);
  return characters;
}
