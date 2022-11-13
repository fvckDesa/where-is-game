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
  GithubAuthProvider,
  linkWithPopup,
  sendEmailVerification,
} from "firebase/auth";
import { app } from "./firebase";
import { createFirestoreUser } from "./database/users";

export const auth = getAuth(app);

function getProvider(name) {
  switch (name) {
    case "google":
      return new GoogleAuthProvider();
    case "github":
      return new GithubAuthProvider();
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
    await sendEmailVerification(user);
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
  const provider = getProvider(name);
  try {
    const { user } = await signInWithPopup(auth, provider);
    await createFirestoreUser(user.uid, {
      email: user.email,
      name: user.displayName,
      profilePicture: user.photoURL,
    });
  } catch (error) {
    if (error.code === "auth/account-exists-with-different-credential") {
      return linkWhitNewProvider(error.customData.email, provider);
    }
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

async function linkWhitNewProvider(email, newProvider) {
  const providerName = (
    await fetchSignInMethodsForEmail(auth, email)
  )[0].replace(".com", "");

  let user;

  if (providerName === "password") {
    user = await getEmailPasswordUser(email);
  } else {
    user = (await signInWithPopup(auth, getProvider(providerName))).user;
  }
  return linkWithPopup(user, newProvider);
}

async function getEmailPasswordUser(email) {
  let user;
  do {
    try {
      const password = prompt(`Enter password for user ${email}`);
      user = (await signInWithEmailAndPassword(auth, email, password)).user;
    } catch (error) {
      alert("Wrong password");
    }
  } while (user == undefined);

  return user;
}
