
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
 https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyD5lkBTFgnYUqGFK7XfuaOJ7N06ZUV9pf8",
  authDomain: "chat-app-40030.firebaseapp.com",
  projectId: "chat-app-40030",
  storageBucket: "chat-app-40030.appspot.com",
  messagingSenderId: "227871776843",
  appId: "1:227871776843:web:35fd52dec144c0513f6dce",
  measurementId: "G-WKJYWGE8ZG",
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
