import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "API_KEY_HERE",
  authDomain: "AUTH_DOMAIN_HERE",
  databaseURL: "DATABASE_URL_HERE",
  projectId: "PROJECT_ID_HERE",
  storageBucket: "STORAGE_BUCKET_HERE",
  messagingSenderId: "MESSAGING_ID_HERE"
};

const Firebase = app.initializeApp(config);

export default Firebase;
