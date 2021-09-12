import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyA5yNrbZCyNWu3hJ5Ra3T8gJkUf35rtJ8o",
    authDomain: "compl-192e9.firebaseapp.com",
    projectId: "compl-192e9",
    storageBucket: "compl-192e9.appspot.com",
    messagingSenderId: "869920271870",
    appId: "1:869920271870:web:e270b329a4eec2b4f824af"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 
};
  

  export default firebase.firestore()

