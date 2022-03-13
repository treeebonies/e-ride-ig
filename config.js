import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAY8d_wSfEV-zm3dzRygxTxTUpWxwz6JFM',
  authDomain: 'e-ride-4-bfb3c.firebaseapp.com',
  databaseURL: 'https://e-ride-4-bfb3c-default-rtdb.firebaseio.com',
  projectId: 'e-ride-4-bfb3c',
  storageBucket: 'e-ride-4-bfb3c.appspot.com',
  messagingSenderId: '118940096864',
  appId: '1:118940096864:web:0c0b8655a22c32a442e605',
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
