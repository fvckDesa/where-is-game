import { app } from "./firebase";
import { uploadCharacterImage, uploadGameImage } from "./storage";
import {
  getFirestore,
  addDoc,
  collection,
  updateDoc,
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
