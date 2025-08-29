let button = document.getElementById('myBtn');
let form = document.getElementById("myForm");
let email = document.getElementById("email");
let username = document.getElementById("username");
let password = document.getElementById("password");
let phone = document.getElementById("phone");


form.addEventListener("click", modifyButton);
email.addEventListener("click", modifyButton);
username.addEventListener("click", modifyButton);
password.addEventListener("click", modifyButton);
phone.addEventListener("click", modifyButton);
button.addEventListener("click", modifyButton);



function modifyButton(){
    button.style.background = "green";
    email.style.border = "2px solid blue";
    username.style.border = "2px solid blue";
    password.style.border = "2px solid blue";
    phone.style.border = "2px solid blue";
}
