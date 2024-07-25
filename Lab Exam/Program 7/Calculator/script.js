window.onload = function(){
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
}

function add(){
    let a = parseFloat(document.getElementById("input1").value);
    let b = parseFloat(document.getElementById("input2").value);
    let res = a + b;
    document.getElementById("result").innerHTML ="Sum: " + res;
}

function subtract(){
    let a = parseFloat(document.getElementById("input1").value);
    let b = parseFloat(document.getElementById("input2").value);
    let res = a - b;
    document.getElementById("result").innerHTML ="Difference: " + res;
}

function multiply(){
    let a = parseFloat(document.getElementById("input1").value);
    let b = parseFloat(document.getElementById("input2").value);
    let res = a * b;
    document.getElementById("result").innerHTML ="Product: " + res;
}

function divide(){
    let a = parseFloat(document.getElementById("input1").value);
    let b = parseFloat(document.getElementById("input2").value);
    if (b ==  0){
        alert("Cannot divide by 0");
        clearValue();
        return;
    }
    let res = a / b;
    document.getElementById("result").innerHTML ="Qutotient: " + res;
}

function clearValues(){
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("result").innerHTML ="";
}

function AC(){
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
}

