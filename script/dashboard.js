const userName = document.getElementById("userName");
const userDistance = document.getElementById("userDistance");
const userPostion = document.getElementById("userPostion");
const userFlag=document.getElementById("userFlag");
const userRank=document.getElementById("userRank");

let userNameValue="John Smith";
let userDistanceValue= 11000;
let userRankValue = 89;
let userPositionValue="Kunshan";

if (userDistanceValue < 1000){
    userPositionValue="Mongolia";
}else if(userDistanceValue <= 6000){
    userPositionValue="Russia";
}else if(userDistanceValue <= 7800){
    userPositionValue="India";
}else if(userDistanceValue <= 14369){
    userPositionValue="Italy";
}else if(userDistanceValue <= 14837){
    userPositionValue="Morocco";
}else if(userDistanceValue <= 15305){
    userPositionValue="Spain";
}else if(userDistanceValue <= 16963){
    userPositionValue="the United Kingdom";
}else if(userDistanceValue <= 25377){
    userPositionValue="Mexico";
}else{
    userPositionValue="the United States";
}

userName.innerHTML=userNameValue;
userDistance.innerHTML=userDistanceValue;
userRank.innerHTML=userRankValue;
userPostion.innerHTML=userPositionValue;

function upload(){
    window.location = "upload.html";
}
function dashboard(){
    window.location = "dashboard.html";
}
function reward(){
    window.location = "reward.html";
}