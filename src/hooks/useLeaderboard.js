// hooks
import { useState, useEffect } from "react";
// firebase
import { createLeaderboardQuery, formatDocuments } from "@appFirebase/database";
import { onSnapshot } from "firebase/firestore";

export function useLeaderboard(gameId) {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    return onSnapshot(createLeaderboardQuery(gameId), (snapshot) =>
      setLeaderboard(formatDocuments(snapshot.docs))
    );
  }, [gameId]);

  return leaderboard;
}
