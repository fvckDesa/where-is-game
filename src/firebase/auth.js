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
  updateEmail,
  updatePassword,
  reauthenticateWithCredential,
  reauthenticateWithPopup,
  EmailAuthProvider,
  unlink,
  linkWithCredential,
  applyActionCode,
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

export function getUserProviders() {
  return auth.currentUser.providerData.map((provider) =>
    provider.providerId.replace(".com", "")
  );
}

export async function createUser({ email, password, name, profilePicture }) {
  if (!email) throw new Error("To create a user there must be an email");
  if (!password) throw new Error("To create a user there must be a password");

  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  await createFirestoreUser(user.uid, {
    email,
    name: name ?? user.displayName,
    profilePicture: profilePicture ?? user.photoURL,
  });
  await sendEmailVerification(user);
}

export async function linkWithNewPassword(password) {
  if (!isUserSignedIn()) {
    throw new Error("User not logged");
  }
  if (getUserProviders().includes("password")) {
    throw new Error("User already has a password");
  }
  return linkWithCredential(
    auth.currentUser,
    EmailAuthProvider.credential(auth.currentUser.email, password)
  ).then(() => console.log(auth.currentUser));
}

export function linkWithNewProvider(providerName) {
  const provider = getProvider(providerName);
  if (!isUserSignedIn()) {
    throw new Error("User not logged");
  }
  return linkWithPopup(auth.currentUser, provider);
}

export function unlinkProvider(providerName) {
  const provider = getProvider(providerName);
  if (!isUserSignedIn()) {
    throw new Error("User not logged");
  }
  return unlink(auth.currentUser, provider.providerId);
}

export async function signInUserWithEmailAndPassword(
  email,
  password,
  remember = false
) {
  await signInWithEmailAndPassword(auth, email, password);
  if (!remember) await setPersistence(auth, browserSessionPersistence);
}

export async function signInWithProvider(name) {
  const provider = getProvider(name);
  const { user } = await signInWithPopup(auth, provider);
  await createFirestoreUser(user.uid, {
    email: user.email,
    name: user.displayName,
    profilePicture: user.photoURL,
  });
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

export async function reauthenticateUser(passwordAuthCb) {
  const providers = getUserProviders();
  if (providers.includes("password")) {
    return passwordAuthCb();
  }

  await reauthenticateWithPopup(auth.currentUser, getProvider(providers[0]));
}

export async function reauthenticateWithPassword(password) {
  if (!isUserSignedIn()) {
    throw new Error("User not logged");
  }
  return reauthenticateWithCredential(
    auth.currentUser,
    EmailAuthProvider.credential(auth.currentUser.email, password)
  );
}

export async function updateUserEmail(newEmail) {
  if (auth.currentUser.email === newEmail) return;

  await updateEmail(auth.currentUser, newEmail);
}

export async function updateUserPassword(oldPassword, newPassword) {
  if (oldPassword === newPassword) return;
  await reauthenticateWithPassword(oldPassword);
  await updatePassword(auth.currentUser, newPassword);
}

export function verifyEmail(oobCode) {
  return applyActionCode(auth, oobCode);
}
