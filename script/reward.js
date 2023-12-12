let tablingTimeValue="3/31/2024";
const giftTable=document.getElementById("giftTable");
const tblBody = document.createElement("tbody");

let giftList=[];

class gift{
    constructor(name, price, remaining){
        this.name=name;
        this.price=price;
        this.remaining=remaining;
        
    }
}

document.getElementById("tablingTime").innerHTML=tablingTimeValue+" 11:30-13:00 at CCT W F1 Lobby";

giftList[0]= new gift("Family Mart Coffee Coupon",150,100);
giftList[1]= new gift("DKU Water Bottle",200,10);
giftList[2]= new gift("DKU T-shirt",250,20);
giftList[3]= new gift("Mini Electronic Fan",400,12);
giftList[4]= new gift("DKU Hoodie",800,8);
giftList[5]= new gift("¥100 JD Card",1000,8);
giftList[6]= new gift("Sports Watch",1000,0);
giftList[7]= new gift("JBL Earbuds pro",1250,2);

for (let i = 0; i < giftList.length; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 3; j++) {
      const classAttributeDic=["name","price","remaining"];
      const cell = document.createElement("td");

      let cellText;
      if(j==0){
        cellText = document.createTextNode(giftList[i].name);
      } else if(j==1){
        cellText = document.createTextNode(giftList[i].price);
      } else{
        cellText = document.createTextNode(giftList[i].remaining);
      }
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
}
giftTable.appendChild(tblBody);



function upload(){
    window.location = "upload.html";
}
function dashboard(){
    window.location = "dashboard.html";
}
function reward(){
    window.location = "reward.html";
}

function icsGenerate() {
  // Define the ics content
  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//hacksw/handcal//NONSGML v1.0//EN
BEGIN:VEVENT
UID:20220815T234500Z-123456789@example.com
DTSTAMP:20220815T234500Z
DTSTART:20240331T113000Z
DTEND:20240331T130000Z
SUMMARY:DKU Moves Tabling
DESCRIPTION:Come and pick up your gifts!
LOCATION:CCT W F1 Lobby
END:VEVENT
END:VCALENDAR`;

  // Create a new Blob object with the ics content
  const blob = new Blob([icsContent], { type: 'text/calendar' });

  // Create a download link for the .ics file
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', 'DKU Moves Tabling.ics');

  // Append the link to the body
  document.body.appendChild(link);

  // Trigger the download
  link.click();

  // Clean up
  document.body.removeChild(link);
}
