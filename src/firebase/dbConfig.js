// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDtyNbi9Uhz62TQTexmXaROgjwXipWZoA",
  authDomain: "tokyo-spirits.firebaseapp.com",
  projectId: "tokyo-spirits",
  storageBucket: "tokyo-spirits.appspot.com",
  messagingSenderId: "925770677388",
  appId: "1:925770677388:web:e50465a16479e0dc78cfa9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const  getFirestoreApp = () =>  {
    return app
}