import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "***",
    authDomain: "netflix-edd70.firebaseapp.com",
    projectId: "netflix-edd70",
    storageBucket: "netflix-edd70.appspot.com",
    messagingSenderId: "***",
    appId: "***",
    measurementId: "***"
  };


export const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const storage= getStorage(app);

