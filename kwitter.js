function addUser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitterroom.html";
}
console.log("this project is made by shreyans singh")