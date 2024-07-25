function calculate(){
    let usn = document.getElementById("usn").value;
    let code = document.getElementById("code").value;
    let m1 = document.getElementById("mark1").value;
    let m2 = document.getElementById("mark2").value;
    let m3 = document.getElementById("mark3").value;

    if (usn === ""){
        alert("Please enter USN");
        return;
    }
    if (code === ""){
        alert("Please enter Code");
        return;
    }
    if (m1 === "" || m2 === "" || m3 === ""){
        alert("Please enter marks");
        return;
    }
    if (m1 > 20 || m1 < 0 || m2 < 0 || m2 > 20 || m3 > 20 || m3 < 0){
        alert("Please enter valid marks");
        return;
    }

    let display = 
    "USN: " + usn + "\n" +
    "Subject code: " + code + "\n" +
    "Marks: " + m1 + "\n" + m2 + "\n" +
    m3 + "\n" ;

    marks = [m1, m2, m3];
    marks.sort()
    let avg = (parseInt(marks[1]) + parseInt(marks[2])) / 2;
    alert(display + "Average: " + avg);

    

}