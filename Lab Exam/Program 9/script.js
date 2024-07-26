function validate(){
    let userid = document.getElementById("userid").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let useridregex = /^[a-zA-Z0-9]{5,12}$/;
    let nameregex = /^[a-zA-Z ]{5,}$/;
    let emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!&%*?])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!useridregex.test(userid)){
        alert("User id must be between 5 to 12 characters");
        return;
    }
    if (!nameregex.test(name)){
        alert("Name must contain only alphabets and should be atleast 5 characters");
        return;
    }
    if (!emailregex.test(email)){
        alert("Email must be in the format abc@xyz.com");
        return;
    }
    if (!passwordregex.test(password)){
        alert("Password must contain atleast one uppercase, one lowercase, one special and alphanumeric characters");
        return;
    }
    alert("Registration Successful");

}