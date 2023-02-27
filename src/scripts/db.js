import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBgvKTzFAMijAa1P4bat-beUuhb2NZ_AXw",
  authDomain: "movie-f14d7.firebaseapp.com",
  projectId: "movie-f14d7",
  storageBucket: "movie-f14d7.appspot.com",
  messagingSenderId: "555723981889",
  appId: "1:555723981889:web:7ff297188a2b8eacff32c0",
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
