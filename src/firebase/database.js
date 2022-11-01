import { app } from "./firebase";
import { uploadCharacterImage, uploadGameImage } from "./storage";
import {
  getFirestore,
  addDoc,
  collection,
  updateDoc,
  getDoc,
  getDocs,
  query,
  doc,
  limit,
  serverTimestamp,
} from "firebase/firestore";

export const db = getFirestore(app);

export async function createGame(game) {
  try {
    const gameRef = await addDoc(collection(db, "game"), {
      ...game,
      image: "",
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
      collection(db, "game", gameId, "characters"),
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
  const game = await getDoc(doc(db, "game", gameId));
  if (!game.exists()) return null;

  const charactersQuery = query(
    collection(db, "game", gameId, "characters"),
    limit(3)
  );

  const characters = await getDocs(charactersQuery);

  return {
    ...game.data(),
    id: game.id,
    characters: characters.docs.map((character) => ({
      ...character.data(),
      id: character.id,
    })),
  };
}

export async function setGameScore(gameId, name, score) {
  await addDoc(collection(db, "game", gameId, "leaderboard"), {
    name,
    score,
    date: serverTimestamp(),
  });
}
