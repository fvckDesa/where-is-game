import { db, formatDocuments } from "./database";
import {
  addDoc,
  collection,
  updateDoc,
  getDoc,
  getDocs,
  query,
  doc,
  limit,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";
import { uploadCharacterImage, uploadGameImage } from "@src/firebase/storage";
import { auth, isUserSignedIn } from "@src/firebase/auth";

export const gamesQuery = query(
  collection(db, "games"),
  orderBy("createdAt", "asc")
);

export function createLeaderboardQuery(gameId) {
  return query(
    collection(db, "games", gameId, "leaderboard"),
    orderBy("score", "asc")
  );
}

export function createCharactersQuery(gameId) {
  return query(collection(db, "games", gameId, "characters"), limit(3));
}

export async function createGame(game) {
  if (!isUserSignedIn())
    throw new Error("For create game user must be sign in");
  try {
    const gameRef = await addDoc(collection(db, "games"), {
      ...game,
      image: "",
      createdAt: serverTimestamp(),
      user: auth.currentUser.uid,
    });

    const imageUrl = await uploadGameImage(gameRef.id, game.image);

    await updateDoc(gameRef, { image: imageUrl });

    return gameRef.id;
  } catch (error) {
    console.error("There was an error creating game:", error);
  }
}

export async function addCharacter(character, gameId) {
  try {
    const characterRef = await addDoc(
      collection(db, "games", gameId, "characters"),
      {
        ...character,
        image: "",
      }
    );

    const imageUrl = await uploadCharacterImage(
      gameId,
      characterRef.id,
      character.image
    );

    await updateDoc(characterRef, { image: imageUrl });

    return characterRef.id;
  } catch (error) {
    console.error("There was an error adding character:", error);
  }
}

export async function getGameFromId(gameId) {
  const game = await getDoc(doc(db, "games", gameId));
  if (!game.exists()) return null;

  const charactersQuery = createCharactersQuery(gameId);

  const characters = await getDocs(charactersQuery);

  return {
    ...game.data(),
    id: game.id,
    characters: formatDocuments(characters.docs),
  };
}

export async function setGameScore(gameId, name, score) {
  await addDoc(collection(db, "games", gameId, "leaderboard"), {
    name,
    score,
    date: serverTimestamp(),
  });
}
