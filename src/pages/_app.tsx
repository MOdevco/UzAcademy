import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/react";
import "../styles/globals.css"
import { createContext, useState } from "react";

import firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyBQQl0RKi_a0T7ePH4Zfh74KZZJvwbOmNE",
        authDomain: "grandacademy-8ff89.firebaseapp.com",
        projectId: "grandacademy-8ff89",
        storageBucket: "grandacademy-8ff89.appspot.com",
        messagingSenderId: "766589497958",
        appId: "1:766589497958:web:d57f1ad02ac3bebde0f3a7"
    }
);

const auth = getAuth()

const db = getFirestore(app);

export const Context = createContext<any>(null)

function App({ Component, pageProps }: any): JSX.Element {

    return (
        <Context.Provider value={{firebase, auth, db}}>
            <ThemeProvider theme={theme}>
                <ColorModeProvider>
                    <CSSReset />
                    <Component {...pageProps} />
                </ColorModeProvider>
            </ThemeProvider>
        </Context.Provider>
    )
}

export default App