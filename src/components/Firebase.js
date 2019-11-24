import app from "firebase/app";
import "firebase/auth";

const isProduction = process.env.NODE_ENV === "production";
if (!isProduction) {
   require("dotenv");
}

const config = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: "react-auth-eeded.firebaseapp.com",
  databaseURL: "https://react-auth-eeded.firebaseio.com",
  projectId: "react-auth-eeded",
  storageBucket: "",
  messagingSenderId: "39576393321",
  appId: "1:39576393321:web:0b3e744f8dcb40790974f8"
};

const Firebase = app.initializeApp(config);

export default Firebase;
