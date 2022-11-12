// hooks
import { useState, useEffect } from "react";
// firebase
import { onSnapshot } from "firebase/firestore";
import { formatDocuments } from "@database/database";
import { createLeaderboardQuery } from "@database/games";

export function useLeaderboard(gameId) {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    return onSnapshot(createLeaderboardQuery(gameId), (snapshot) =>
      setLeaderboard(formatDocuments(snapshot.docs))
    );
  }, [gameId]);

  return leaderboard;
}
