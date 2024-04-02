// Your web app's Firebase configuration


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAVXJJ9ICQV4AI3gsnwSKq5wIDABLcMfXs",
    authDomain: "c-45-fadc5.firebaseapp.com",
    databaseURL: "https://c-45-fadc5-default-rtdb.firebaseio.com",
    projectId: "c-45-fadc5",
    storageBucket: "c-45-fadc5.appspot.com",
    messagingSenderId: "380642035953",
    appId: "1:380642035953:web:2b8c3fa9ccffc2647b0150"
  };
  
  // Initialize Firebase
  var app = initializeApp(firebaseConfig);



function addUser()
{
names = document.getElementById("inp1").value;

 localStorage.setItem("namme",names)
 window.location = "index2.html"
 
}