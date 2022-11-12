import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  fetchSignInMethodsForEmail,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { app } from "./firebase";
import { createFirestoreUser } from "./database/users";

export const auth = getAuth(app);

function getProvider(name) {
  switch (name) {
    case "google":
      return new GoogleAuthProvider();
    default:
      throw new Error(`${name} provider isn't active`);
  }
}

export async function createUser({ email, password, name, profilePicture }) {
  if (!email) throw new Error("To create a user there must be an email");
  if (!password) throw new Error("To create a user there must be a password");

  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await createFirestoreUser(user.uid, {
      email,
      name: name ?? user.displayName,
      profilePicture: profilePicture ?? user.photoURL,
    });
  } catch (error) {
    throw new Error(error);
  }
}

export async function signInUserWithEmailAndPassword(
  email,
  password,
  remember = false
) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    if (!remember) await setPersistence(auth, browserSessionPersistence);
  } catch (error) {
    console.error("Error: ", error);
    throw new Error(error);
  }
}

export async function signInWithProvider(name) {
  try {
    const provider = getProvider(name);
    const { user } = await signInWithPopup(auth, provider);
    await createFirestoreUser(user.uid, {
      email: user.email,
      name: user.displayName,
      profilePicture: user.photoURL,
    });
  } catch (error) {
    throw new Error(error);
  }
}

export async function signOutUser() {
  await signOut(auth);
}

export function isUserSignedIn() {
  return !!auth.currentUser;
}

export async function isEmailInUsed(email) {
  const methods = await fetchSignInMethodsForEmail(auth, email);
  return methods.length === 0;
}
