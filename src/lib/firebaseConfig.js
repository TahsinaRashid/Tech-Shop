

// // Import the functions you need from the SDKs you need
// import { getApps, initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBIxuj6052x6-VHWKduCBnsfQrIXeA2tJw",
//   authDomain: "tech-shop-ffb76.firebaseapp.com",
//   projectId: "tech-shop-ffb76",
//   storageBucket: "tech-shop-ffb76.firebasestorage.app",
//   messagingSenderId: "996411922034",
//   appId: "1:996411922034:web:ac28bb526135631685d4eb"
// };

// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // export const auth = getAuth(app);
// // export const googleProvider = new GoogleAuthProvider();
// const app = !getApps ().length ? initializeApp(firebaseConfig) : getApps()[0];
// export const auth = getAuth(app);

// Import Firebase SDKs
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIxuj6052x6-VHWKduCBnsfQrIXeA2tJw",
  authDomain: "tech-shop-ffb76.firebaseapp.com",
  projectId: "tech-shop-ffb76",
  storageBucket: "tech-shop-ffb76.appspot.com",
  messagingSenderId: "996411922034",
  appId: "1:996411922034:web:ac28bb526135631685d4eb",
};

// Initialize Firebase App (only once)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
