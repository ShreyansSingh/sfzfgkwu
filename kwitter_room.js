//put firebase
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room_names- "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();
function addRoom(){
    var room_name=document.getElementById("room_name").value;
    localStorage.setItem("room name",room_name);
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
    window.location="kwitter_page.html";
}
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room name",name);
    window.location="kwitter_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room name");
    window.location="kwitter.html";
}

