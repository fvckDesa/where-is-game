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
import { createUserRef } from "@database/users";
import { onSnapshot } from "firebase/firestore";

const Context = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth, (authUser) => {
      if (authUser == null) return setUser(null);
      setUser({
        authUser,
        id: authUser.uid,
      });
    });
  }, []);

  useEffect(() => {
    if (!user) return;
    return onSnapshot(createUserRef(user.id), (doc) => {
      setUser((prev) => ({ ...prev, ...doc.data() }));
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
