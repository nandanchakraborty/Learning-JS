const paymentSuccess = true;
const marks = 90;

function enroll() {
    console.log("course enrollment is in progress");

    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (paymentSuccess) {
                resolve();
            } else {
                reject("payment failed");
            }
        }, 2000);
    });

    return promise;
}

function progress() {
    console.log("course is in progress");

    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (marks >= 80) {
                resolve();
            } else {
                reject("you could not get enough marks");
            }
        }, 3000);
    });

    return promise;
}

function getCertificate() {
    console.log("preparing your certificate");

    const promise = new Promise(function (resolve) {
        setTimeout(function () {
            resolve("congrats! you got the certificate");
        }, 1000);
    });

    return promise;
}

async function course() {
    try {
        await enroll();
        await progress();
        const message = await getCertificate();
        console.log(message);
    } catch (err) {
        console.log(err);
    }
}





//practicing async await

const profileScore = 75
const cvUpload = true

function uploadCV(){
    console.log("uploading cv....");

    const promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            if(cvUpload){
                resolve("cv uploaded successfully");
            }else{
                reject("cv upload failed");
            }    
            

        },1500);
    });
    return promise;
}
function verifyProfile(){
    console.log("verifying profile....");
    const promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            if(profileScore >= 70){
                resolve("profile valid")
            }else {
                reject("profile unvalid")
            }

        },1000);
    });
    return promise;
}

function scheduleInterview(){
    console.log("scheduling interview...");
    const promise = new Promise(function(resolve){
        setTimeout(() => {
            resolve("interview scheduled")
        }, 1000);
    });

    return promise;


}
async function applyjob() {
    try{
        await course();
        await uploadCV();
        await  verifyProfile();
        await scheduleInterview()

        console.log("Application completed successfully!");


    }catch(err){
        console.log(err);
    }
    
}
applyjob()






//trying event loop in a short program
const second = () =>console.log("second")
const third = () => console.log("third")

const first=()=>{

console.log("first");
setTimeout(second,0);
new Promise ((resolve,reject) =>
    resolve("I am right after third ,before second")
)
.then((resolve) => console.log(resolve));
third()

}
first();



/*When first() is called, JavaScript starts by putting it on the call stack and 
executing everything inside it synchronously. First, console.log("first") runs 
immediately and prints first. Then setTimeout(second, 0) is registered, but second 
is not executed yet; it is sent to the macrotask queue to wait for the stack to finish.
After that, the Promise is created and resolved instantly, and its .then() 
callback is placed into the microtask queue, which has higher priority than timers.
Next, third() runs right away because it is normal synchronous code, so third is
printed. At this point the call stack becomes empty, so the event loop takes 
control: it first drains the microtask queue, executing the Promise’s .then()
and printing “I am right after third ,before second”. Only after all microtasks
are finished does the event loop move to the macrotask queue, where the setTimeout
callback lives, and finally executes second(), printing second. That is why the 
output order becomes: first → third → promise message → second.*/