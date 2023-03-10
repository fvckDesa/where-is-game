import { db } from "./database";
import {
  setDoc,
  updateDoc,
  collection,
  query,
  getDoc,
  doc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { uploadUserImage } from "@src/firebase/storage";
import { updateUserEmail } from "@src/firebase/auth";

export const usersQuery = query(collection(db, "users"));

export function createUserRef(id) {
  return doc(db, "users", id);
}

export async function createFirestoreUser(
  userId,
  { email, name, profilePicture }
) {
  try {
    const userRef = createUserRef(userId);
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
  const user = await getDoc(createUserRef(id));
  return user.exists() ? { ...user.data(), id: user.id } : null;
}

export async function userCreateGame(userId, gameId) {
  await updateDoc(createUserRef(userId), {
    games: arrayUnion(gameId),
  });
}

export async function userDeleteGame(userId, gameId) {
  await updateDoc(createUserRef(userId), {
    games: arrayRemove(gameId),
  });
}

export async function updateUser(userId, data) {
  const { profilePicture, ...updateData } = data;
  if (profilePicture) {
    updateData.profilePicture = await uploadUserImage(userId, profilePicture);
  }
  await updateUserEmail(updateData.email);
  return updateDoc(createUserRef(userId), updateData);
}
