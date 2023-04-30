import React from "react";
import ReactDOM from "react-dom/client";
import { createContext } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import App from "./App";

const firebaseConfig = {
    apiKey: "AIzaSyBgu03SuyCJLNpH9LtNCTvtasBHHlF9vDs",
    authDomain: "react-chat-f4fd4.firebaseapp.com",
    projectId: "react-chat-f4fd4",
    storageBucket: "react-chat-f4fd4.appspot.com",
    messagingSenderId: "877062188477",
    appId: "1:877062188477:web:b3b20249df70caaf9cb6d4",
    measurementId: "G-CD0ZCESFGP",
};

firebase.initializeApp(firebaseConfig);

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Context.Provider value={{ firebase, firestore, auth }}>
            <App />
        </Context.Provider>
    </React.StrictMode>
);
