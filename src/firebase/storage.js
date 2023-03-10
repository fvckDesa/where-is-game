import { app } from "./firebase";
import {
  getStorage,
  getDownloadURL,
  uploadBytesResumable,
  ref,
  deleteObject,
  listAll,
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

export async function deleteFolder(folderRef) {
  const folder = await listAll(folderRef);
  return Promise.all([
    ...folder.prefixes.map(deleteFolder),
    ...folder.items.map(deleteObject),
  ]);
}

export async function deleteGameImages(gameId) {
  await deleteFolder(ref(storage, `${auth.currentUser.uid}/${gameId}`));
}

export function uploadUserImage(userId, image) {
  return uploadImage(image, `${userId}/${image.name}`);
}
