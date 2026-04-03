import { initializeApp } from "firebase/app";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyATUe745UiMgtsMXHhlZT-1DbcT9iXTDbc",
  authDomain: "portfolio-4c6cb.firebaseapp.com",
  projectId: "portfolio-4c6cb",
  storageBucket: "portfolio-4c6cb.firebasestorage.app",
  messagingSenderId: "1011142002740",
  appId: "1:1011142002740:web:7bfcc059414e08c131a261",
};

const app = initializeApp(firebaseConfig);
export const functions = getFunctions(app);
export default app;