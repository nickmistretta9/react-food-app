import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAWEDDH4K2cKR9ZdcuALLG1DHqeVbQZ2j4",
  authDomain: "fun-food-friends-34ac4.firebaseapp.com",
  databaseURL: "https://fun-food-friends-34ac4.firebaseio.com",
  projectId: "fun-food-friends-34ac4",
  storageBucket: "fun-food-friends-34ac4.appspot.com",
  messagingSenderId: "354066929059"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;