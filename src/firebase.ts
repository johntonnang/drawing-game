import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyB9VeROIAmnltJ-IFNY6L02VltR-jb2lrc',
  authDomain: 'drawing-game-e4a43.firebaseapp.com',
  projectId: 'drawing-game-e4a43',
  storageBucket: 'drawing-game-e4a43.appspot.com',
  messagingSenderId: '926915438893',
  appId: '1:926915438893:web:bcc92dda894f64203d0ba4',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
