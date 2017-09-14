var email, password;

function LoginUser() {
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    
    if (email == "taimoortariqdev@gmail.com" && password == "123123")
        alert("Welcome user");
    else 
        alert("Wrong Email and Password");

}