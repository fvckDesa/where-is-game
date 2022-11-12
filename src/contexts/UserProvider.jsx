// types
import { reactChildrenType } from "@src/types";
// context
import { createContext } from "react";
// hooks
import { useState, useEffect, useContext } from "react";
// firebase
import {
  auth,
  createUser,
  signInUserWithEmailAndPassword,
  signInWithProvider,
  signOutUser,
  isUserSignedIn,
} from "@src/firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { usersQuery, getUser } from "@database/users";
import { onSnapshot } from "firebase/firestore";

const Context = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth, async (authUser) => {
      if (authUser == null) return setUser(null);
      const user = await getUser(authUser.uid);
      if (!user) {
        throw new Error("User not exist");
      }
      setUser({
        authUser,
        ...user,
      });
    });
  }, []);

  useEffect(() => {
    if (user == null) return;
    return onSnapshot(usersQuery, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.doc.id === user.id) {
          setUser((prev) => ({ ...prev, ...change.doc.data() }));
        }
      });
    });
  }, [user?.id]);

  return (
    <Context.Provider
      value={{
        user,
        signUp: createUser,
        signInUserWithEmailAndPassword,
        signInWithProvider,
        signOutUser,
        isUserSignedIn,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useUserContext = () => useContext(Context);

UserProvider.propTypes = {
  children: reactChildrenType,
};

export default UserProvider;
