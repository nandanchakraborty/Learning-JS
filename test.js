const cars = ["bmw","volvo","Saab","ford"]
let len = cars.length;
let text = " ";
for(let i =0;i<len;i++){
    text+= cars[i]+"\n";
}
console.log(text);

let i,x ='';
for(i =0;i<=5;i++){
    x+= i;
}
console.log(x);

i =0
let carStore=" ";
while(cars[i]){
    carStore+=cars[i]+'\n';
    i++;

    
}
console.log(carStore);


let day;
switch(new Date().getDay()){
    case 0:
        day = "Suday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday"; 
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday" ;
        break;
    
    }
    console.log("today is "+day );


 let texts;
    if(Math.random() < 0.5){
        texts = "<a href = 'https://w3School.com'> visit w3school</a>"
       }
    else {
        texts = "<a href = 'https://wwf.org'> visit wildfile</a>";    

    } 
    console.log(texts);