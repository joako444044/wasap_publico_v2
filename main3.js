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

//variables

roms_name = localStorage.getItem("rom_Name");
  nam = localStorage.getItem("namme");



document.getElementById("r_n").innerHTML += roms_name;
document.getElementById("n_o_u").innerHTML += nam;




  //funciones

function exit1()
{
    localStorage.removeItem("rom_Name");
    localStorage.removeItem("namme");
    window.location = "index.html"
}
function send_m()
{
    message = document.getElementById("inp2").value;
    firebase.database().ref(roms_name).push({
        name:nam,
        mesages:message,
        likes:0
    });
    
    document.getElementById("inp2").value = "";

}
function getData()
 {
   firebase.database().ref("/"+roms_name).on('value', function(snapshot) { document.getElementById("sp").innerHTML = "";
 snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
   childData = childSnapshot.val();
   if(childKey !="purpose") {
   firebase_message_id = childKey;
    message_data = childData;
   //Inicia código 
name = message_data['name'];
message = message_data['mesages'];
like = message_data['likes'];
name_tag = "<h4>" + name + "<img class='imp' src='th.jpeg'></h4>";
message_tag = "<p class='mh4'>" + message + "</p>";
button_like = "<button class='btn btn-success' id='" +firebase_message_id+"' value='"+like+"' onclick='updateLike(this.id)'>";
span_like = "<span class='gliphicon gliphicon-thumbs-up'>like: "+like+"</span></button><hr>";

row = name_tag + message_tag + button_like + span_like;
document.getElementById("sp").innerHTML += row;
mesage_counter = 1;
   
//Termina código
 } }); }); } 
 getData();
function updateLike(message_id)
{
  console.log("boton_me_gusta_pulsado_por_" + message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
  console.log(updated_likes);
  firebase.database().ref(roms_name).child(message_id).update({
    likes : updated_likes
});}