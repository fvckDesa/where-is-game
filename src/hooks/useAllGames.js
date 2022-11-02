// hooks
import { useState, useEffect } from "react";
// firebase
import { gamesQuery, formatDocuments } from "@appFirebase/database";
import { onSnapshot } from "firebase/firestore";

export function useAllGames() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    return onSnapshot(gamesQuery, (snapshot) =>
      setGames(formatDocuments(snapshot.docs))
    );
  }, []);
  return games;
}
