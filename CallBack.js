function display(value){
    document.getElementById("demo").innerHTML = value


}

function calculation (value1 ,value2 ,callback){
    let sum = value1+value2;
if(callback){
    callback(sum);
}
return sum;

}

const result = calculation(5,5);
calculation(4,5,display);
console.log(result);