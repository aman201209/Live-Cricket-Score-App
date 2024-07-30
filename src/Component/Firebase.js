import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";




const firebaseConfig = {
    apiKey: "AIzaSyAmVcvaUXFOroWgDJK29-9otWlI5O5ILVI",
    authDomain: "cricket-app-ca327.firebaseapp.com",
    projectId: "cricket-app-ca327",
    storageBucket: "cricket-app-ca327.appspot.com",
    messagingSenderId: "329853361915",
    appId: "1:329853361915:web:2383c34829bb2757329a5e",
    measurementId: "G-V1W52SB0TT"
  };


export const app = initializeApp(firebaseConfig);
export const auth = getAnalytics(app);