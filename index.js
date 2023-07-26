
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const AmpmEl = document.getElementById("Ampm");

function updateClock() {
    let currentTime = new Date();
    let h = currentTime.getHours();
    let m = currentTime.getMinutes();
    let s = currentTime.getSeconds();
    let ampm = "AM";

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }
   
    // to bring 0 to digital clock ternary conditions
    h = h<10 ? "0"+ h : h;
    m = m<10 ? "0"+ m : m;
    s = s<10 ? "0"+ s : s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    AmpmEl.innerText = ampm;
    
    // to update clock for every second
    setTimeout(() =>{
        updateClock()
    },1000)
}



updateClock();