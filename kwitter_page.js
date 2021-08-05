//YOUR FIREBASE LINKS

//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDj73Ioxtz2SDkZhX53p2cIfK2DWIQy18M",
    authDomain: "kwitter-edcca.firebaseapp.com",
    databaseURL: "https://kwitter-edcca-default-rtdb.firebaseio.com",
    projectId: "kwitter-edcca",
    storageBucket: "kwitter-edcca.appspot.com",
    messagingSenderId: "1027690534837",
    appId: "1:1027690534837:web:f9002d0b7eefd66aa3ebfc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

 function send() {
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name : user_name, 
message:msg,
like:0
});
document.getElementById("msg").value = "";
 } 
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
