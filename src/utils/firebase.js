import firebase from "firebase";  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDt9loxxtoxhDdHqUeA2s2YyBnvKdsQ1uY",
    authDomain: "e-commerce-12.firebaseapp.com",
    databaseURL: "https://e-commerce-12-default-rtdb.firebaseio.com/",
    projectId: "e-commerce-12",
    storageBucket: "e-commerce-12.appspot.com",
    messagingSenderId: "625087268867",
    appId: "1:625087268867:web:e83b9e796fd73755046636"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;