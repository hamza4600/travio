import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrA7YNNXlWFGlq_PbYmTLl6TR1XI0iJ3E",
  authDomain: "travioo.firebaseapp.com",
  projectId: "travioo",
  storageBucket: "travioo.appspot.com",
  messagingSenderId: "815681356750",
  appId: "1:815681356750:web:fd393dfc11ac9c4722619f",
  measurementId: "G-F1F9XXZ8P0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const auth = getAuth(app)

export { auth, app }