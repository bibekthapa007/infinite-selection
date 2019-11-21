import React, { useState, useEffect } from "react";
import Firebase from "./Firebase";
import { firestore } from "firebase";

export const AuthContext = React.createContext();

const AuthContextProvider = props => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    return Firebase.auth().onAuthStateChanged(user => {
      // console.log(user);
      setCurrentUser(user);
      if (user) {
        firestore()
          .collection("users")
          .doc(user.uid)
          .get()
          .then(doc => {
            setUserData(doc.data());
          });
      }else{
        setUserData(null);
      }
    });
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser, userData }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
