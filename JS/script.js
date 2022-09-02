let sec = document.querySelector(".seconds");
let min = document.querySelector(".minutes");
let hour = document.querySelector(".hours");

// let deg = 0.1;


setInterval(clockHandler , 1);
function clockHandler(){
    let d = new Date();
    let m = d.getMinutes()*6;
    let s = d.getSeconds()*6;
    let ms = d.getMilliseconds();
    let h = d.getHours()*30;
    sec.style.transform = `rotateZ(${s+(ms/(1000/6))}deg)`;
    min.style.transform = `rotateZ(${m+(s/60)}deg)`;
    hour.style.transform = `rotateZ(${h+(m/12)}deg)`;
};