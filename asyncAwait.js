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










