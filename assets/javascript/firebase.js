// Initialize Firebase
   var config = {
    apiKey: "AIzaSyDlNbrao0ka-OqOcnazlLFi2qFYCACQAiQ",
    authDomain: "rps-multiplayer-84c2e.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-84c2e.firebaseio.com",
    projectId: "rps-multiplayer-84c2e",
    storageBucket: "rps-multiplayer-84c2e.appspot.com",
    messagingSenderId: "333267574477"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

// database.ref().on("value", function(snapshot) {
//       console.log(snapshot.val());
//       $("#click-value").text(snapshot.val().scoreCount);
//       clickCounter = snapshot.val().scoreCount;
//     }, function(errorObject) {
//       console.log("The read failed: " + errorObject.code);
//     });