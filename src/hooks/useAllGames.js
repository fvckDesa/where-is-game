// hooks
import { useState, useEffect } from "react";
// firebase
import { onSnapshot } from "firebase/firestore";
import { formatDocuments } from "@database/database";
import { gamesQuery } from "@database/games";

export function useAllGames() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    return onSnapshot(gamesQuery, (snapshot) =>
      setGames(formatDocuments(snapshot.docs))
    );
  }, []);
  return games;
}
