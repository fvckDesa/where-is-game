import { app } from "./firebase";
import {
  getStorage,
  getDownloadURL,
  uploadBytesResumable,
  ref,
} from "firebase/storage";

export const storage = getStorage(app);

async function uploadImage(image, url) {
  const imageRef = ref(storage, url);
  await uploadBytesResumable(imageRef, image);
  return getDownloadURL(imageRef);
}

export function uploadGameImage(gameId, image) {
  return uploadImage(image, `${gameId}/${image.name}`);
}

export function uploadCharacterImage(gameId, characterId, image) {
  return uploadImage(image, `${gameId}/${characterId}/${image.name}`);
}
