const person={
name : 'Nandan',
age : 25,
region : 'Bangladesh'
};
console.log(person)
document.getElementById("demo").innerHTML = JSON.stringify(person);

//using for in loop
let text = ''
for(let x in person){
    text += person[x];
}
console.log(text);

//deletion

delete person.age; "<br>"
document.getElementById("demo").innerHTML += "<br>"+ "after deletion of age  :"+ JSON.stringify( person)
//delete operator is designed to be used on object properties
//it shouldnt be used in predefined js property


 persons={
name : 'Nandan',
age : 25,
region : 'Bangladesh',
  brother:{
     broName :'pranta',
    age : 29,

  }
};
console.log(persons.brother);
console.log(persons.brother.broName);
let a = 'Bangladesh'
console.dir(a);