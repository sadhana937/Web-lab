function validate(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let gender = document.getElementById("gender").value;
    let color = document.getElementById("color").value;

    if (name === ""){
        alert("Please enter your name");
        return;
    }

    if (email === "" || !email.includes(".") || !email.includes("@")){
        alert("Please enter a valid email address");
        return;
    }

    if (mobile === "" || mobile.length !== 10 || isNaN(mobile)){
        alert("Please enter a valid mobile number");
        return;
    }

    if (gender === ""){
        alert("Please select your gender");
        return;
    }

    if (color === ""){
        alert("Please select your favorite color");
        return;
    }
    let display = {
        name: name,
        email: email,
        mobile: mobile,
        gender: gender,
        color: color
    }

    let output = "";

    for (let key in display){
        output += key + " : " + display[key] + "\n";
    }

    alert(output);

}   
