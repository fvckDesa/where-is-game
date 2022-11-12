import { db } from "./database";
import {
  setDoc,
  updateDoc,
  collection,
  query,
  getDoc,
  doc,
  arrayUnion,
} from "firebase/firestore";
import { uploadUserImage } from "@src/firebase/storage";

export const usersQuery = query(collection(db, "users"));

export async function createFirestoreUser(
  userId,
  { email, name, profilePicture }
) {
  try {
    const userRef = doc(db, "users", userId);
    await setDoc(userRef, {
      email,
      name,
      profilePicture: typeof profilePicture === "string" ? profilePicture : "",
      games: [],
    });

    if (profilePicture && profilePicture instanceof File) {
      const url = await uploadUserImage(userId, profilePicture);
      await updateDoc(userRef, {
        profilePicture: url,
      });
    }
  } catch (error) {
    throw new Error(error);
  }
}

export async function getUser(id) {
  const user = await getDoc(doc(db, "users", id));
  return user.exists() ? { ...user.data(), id: user.id } : null;
}

export async function userCreateGame(userId, gameId) {
  await updateDoc(doc(db, "users", userId), {
    games: arrayUnion(gameId),
  });
}
