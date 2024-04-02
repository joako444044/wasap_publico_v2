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
firebase.initializeApp(firebaseConfig);

 nam = localStorage.getItem("namme");
document.getElementById("na").innerHTML ="bienbenido " + nam;
function addRoom()
{
    roms_name = document.getElementById("inp2").value;

firebase.database().ref("/").child(roms_name).update({propuse:"hagreguando_nombre_de_la_sala"});
localStorage.setItem("rom_Name", roms_name);
window.location = "index3.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("di2").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  roms_name  = childKey;
  
  

  
  //Inicia código
row = "<div class='room' id='" +roms_name + "' onclick='redirect_to_room_name(this.id)'>#" +roms_name+"</div><hr>";
document.getElementById("di2").innerHTML += row;
  //Termina código
   });});}
  getData();
  
 function exit()
 {
  window.location = "index.html"
 }



  function redirect_to_room_name(roms_name)
  {
localStorage.setItem("rom_Name" ,roms_name);
window.location = "index3.html";

  }