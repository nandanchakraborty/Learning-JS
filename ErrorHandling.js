function myFunction() {
    const message = document.getElementById("demo");

    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try {
    if (x == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high";

    console.log("input is OK");
}
catch(err) {
    console.log("input is " + err);
}


}