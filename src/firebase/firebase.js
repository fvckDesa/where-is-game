import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBc5mePbAJF1s-yYbkKfAWnXkkE4g-fI40",
  authDomain: "where-is-game-9d7eb.firebaseapp.com",
  projectId: "where-is-game-9d7eb",
  storageBucket: "where-is-game-9d7eb.appspot.com",
  messagingSenderId: "922265148614",
  appId: "1:922265148614:web:210290e5cdd3e1870d4bc7",
};

const app = initializeApp(firebaseConfig);

export { app };
