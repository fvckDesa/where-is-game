import { app } from "../firebase";
import { getFirestore } from "firebase/firestore";

export const db = getFirestore(app);

export function formatDocuments(docs) {
  return docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}
