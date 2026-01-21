const cars =["saab" ,"volvo" ,"bmw","supra",]
document.getElementById("demo").innerHTML = cars; 
console.log(typeof cars)
document.getElementById("demo").innerHTML += "<br>"+cars.toString()

let length = cars.length
document.getElementById("demo").innerHTML+= "<br>"+  length;

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let len = fruits.length

let t ="";
for(let i =0;i<len ;i++){
    t+= "<li>"+ fruits[i] + "</li>"
}
document.getElementById("demo").innerHTML += t;


document.getElementById("demo").innerHTML += "<br>"+ Array.isArray(fruits);
