import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAeEwmAsGhN0W6JofuXqpbWs02rLDZaytI",
  authDomain: "budget-4d410.firebaseapp.com",
  databaseURL: "https://budget-4d410.firebaseio.com",
  projectId: "budget-4d410",
  storageBucket: "budget-4d410.appspot.com",
  messagingSenderId: "221216386972",
  appId: "1:221216386972:web:8318d36513b91228692259",
  measurementId: "G-Y7SFZV6487"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
