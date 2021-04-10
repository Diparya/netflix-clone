import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAKDrrnNLkQTBqEZVNdl6hqcTl2WrOv2d8",
    authDomain: "netflix-clone-93fe7.firebaseapp.com",
    projectId: "netflix-clone-93fe7",
    storageBucket: "netflix-clone-93fe7.appspot.com",
    messagingSenderId: "47123531835",
    appId: "1:47123531835:web:2537cd3ed143f543ceb41e"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore()
  const auth=firebase.auth();

  export {auth}
  export default db;