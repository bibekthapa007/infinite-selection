import React, { useState, useEffect } from "react";
import Firebase from "./Firebase";
import { firestore } from "firebase";

export const AuthContext = React.createContext();

const AuthContextProvider = props => {
  const [currentUser, setCurrentUser] = useState(null);
  const [data, setData] = useState(null);

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
            setData(doc.data());
          });
      }else{
        setData(null);
      }
    });
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser, data }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
