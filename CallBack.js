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










const paymentSuccess = true;
let marks = 70;
function enroll(callback){
    console.log('payment in progress');

   setTimeout(function(){
    if(paymentSuccess){
        callback();
    }
    else{
        console.log('payment failed');

    }
},2000)
}  


function progress(callback){
    console.log('course in progress');

    setTimeout(function(){
    
        if(marks >=80){
            callback();
        }
        else {
            console.log('not enough mark');


 } },3000);
}

function getCertificate(){
console.log('preparing certificate');
setTimeout(function(){
    console.log('u got it');

},1000)
}

enroll(function(){
    progress(getCertificate);
})

