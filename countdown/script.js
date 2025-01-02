const endate="2 January 2025 1:31 PM";
console.log(document.getElementsByClassName("end-date"));
// console.log(document.getElementsByClassName("end-date"))[0].innnerHTML=endate;
document.getElementsByClassName("end-date")[0].innerHTML=endate;
const inputs=document.getElementsByTagName("input");
const clock=(enddate)=>{
const end=new Date(enddate);
const now=new Date();
const dif=(end-now)/1000;
//covert into days
if(dif<0)return;
inputs[0].value=(Math.floor(dif/86400));
inputs[1].value=(Math.floor((dif/3600)%24));
inputs[2].value=(Math.floor((dif/60)%60));
inputs[3].value=(Math.floor(dif%60));
console.log();
}
clock(endate);
setInterval(() => {
    clock(endate);
}, 1000);