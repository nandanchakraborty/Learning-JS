//this refferences that is executing the current function
/*
Rules for this keyword
1.implicit binding
2.explicit binding
3.new binding
4.window binding

to find the root of 'this" u have to find where the
function has called



*/
const person = {
    firstName : "nandan",
    lastName: "chakraborty",
    id : 448,
    fullName : function(){
        return this.firstName +" "+this.lastName;
    }


};
console.log(person.fullName())

//object method binding

const person1 = {
    firstName : "nandan",
    lastName: "chakraborty",
    id : 448,
    myFunction: function(){
        return this;
    }

};
console.log(person1.myFunction())

//explicit function binding 
person.fullName.call(person1);


function greet() {
    console.log('Hello, my name is ' + this.name);
}

const person2 = {
    name: 'Amit',
    sayHello: greet
};
const anotherPerson = {
    name: 'Jatin'
};

greet(); 
person2.sayHello(); 
greet.call(anotherPerson); 