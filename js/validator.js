// Validation script for the form

var peek;

function show(){

    if (peek == true){
        document.getElementById("password").type="password";
        document.getElementById("show-password").src="./assets/eye-show-icon.svg"; 
        peek = false;
    }

    else{

        document.getElementById("password").type="text";
        document.getElementById("show-password").src="./assets/eye-hide-icon.svg";
        
        peek = true;

    }

}
// password has to be atleast 7 characters
var form = document.getElementById("form");

form.addEventListener("submit",function(event){

    event.preventDefault();

    var username = document.getElementById('email').value;

    console.log(username);
    var password = document.getElementById("password").value;

    console.log(password);

    if(password.length < 7){

        console.log("passwordm is less than 7 chars!!")

        document.getElementById("show-password").src="./assets/danger-circle-icon.svg";

        document.getElementById("password").classList.add("failed-password");



    }
    else{

        document.getElementById("show-password").src="";

        window.location.href = "./signed-in.html";

    }



})