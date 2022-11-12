import { app } from "./firebase";
import {
  getStorage,
  getDownloadURL,
  uploadBytesResumable,
  ref,
} from "firebase/storage";
import { auth } from "./auth";

export const storage = getStorage(app);

async function uploadImage(image, url) {
  const imageRef = ref(storage, url);
  await uploadBytesResumable(imageRef, image);
  return getDownloadURL(imageRef);
}

export function uploadGameImage(gameId, image) {
  return uploadImage(image, `${auth.currentUser.uid}/${gameId}/${image.name}`);
}

export function uploadCharacterImage(gameId, characterId, image) {
  return uploadImage(
    image,
    `${auth.currentUser.uid}/${gameId}/${characterId}/${image.name}`
  );
}

export function uploadUserImage(userId, image) {
  return uploadImage(image, `${userId}/${image.name}`);
}
