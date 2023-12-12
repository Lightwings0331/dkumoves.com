let sportTyleValue= "Soccer";
let exerciseTimeValue=60;
const sportResult=document.getElementById("sportResult");
let myRange=document.getElementById("myRange");

output()

myRange.oninput= function() {
    exerciseTimeValue=document.getElementById("myRange").value
    output();
}
function output(){
    sportResult.innerHTML=sportTyleValue+"      "+exerciseTimeValue +"mins";
}

function Soccer(){
    sportTyleValue="Soccer";
    output()

}

function Badminton(){
    sportTyleValue="Badminton";
    output()
    
}function Basketball(){
    sportTyleValue="Basketball";
    output()
}function Boxing(){
    sportTyleValue="Boxing";
    output()

}function MartialArt(){
    sportTyleValue="Martial art";
    output()
}function Volleyball(){
    sportTyleValue="Volleyball";
    output()
}function WeightTraining(){
    sportTyleValue="Weight training";
    output()
}


function upload(){
    window.location = "upload.html";
}
function dashboard(){
    window.location = "dashboard.html";
}
function reward(){
    window.location = "reward.html";
}
function SubmitSuccessfully(){
    alert("Submit Successfully!");
}