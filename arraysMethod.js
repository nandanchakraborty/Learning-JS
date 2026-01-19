const fruits = ["Banana", "Orange", "Apple", "Mango"];

let myList = fruits.toString();
console.log(myList)
document.getElementById("demo").innerHTML = myList
console.log(fruits.at(2))
console.log(fruits[2])
console.log(fruits.pop(),fruits)
console.log(fruits.push("kiwi"),fruits)
console.log(fruits.shift(),fruits)
console.log(fruits.unshift("Lemon"),fruits)
console.log(fruits.copyWithin(2,0))
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr)
console.log(fruits.splice(2,0,"avocado","graps"),fruits)

document.getElementById("demo").innerHTML += fruits

console.log(fruits.splice(2,1),fruits)

