import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCsKkOWxCFqmqlSz1kwpo263FBsl7fEZ4k',
  authDomain: 'tinder-clone-f3263.firebaseapp.com',
  projectId: 'tinder-clone-f3263',
  storageBucket: 'tinder-clone-f3263.appspot.com',
  messagingSenderId: '568027430927',
  appId: '1:568027430927:web:538df8f71c674e724b637a',
  measurementId: 'G-H5Y452675R'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const datebase = firebaseApp.firestore();

export default datebase;
