let sec=document.getElementById("sec")
let min=document.getElementById("min")
let hrs=document.getElementById("hrs")
let hours=document.getElementById("hours")
let minutes=document.getElementById("minutes")
let seconds=document.getElementById("seconds")
let am_pm=document.getElementById("am_pm")


function displayTime(){
    let date=new Date();

    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds()

    hours.innerText=`${hh%12} :`;
    minutes.innerText=`${mm} :`;
    seconds.innerText=`${ss}`;
    am_pm.innerText = hours >= 12 ? 'pm' : 'am';
    
    let hrotation=30*hh+(mm/2);
    let mrotation=6*mm;
    let srotation=6*ss;


    hrs.style.transform=`rotate(${hrotation}deg)`;
    min.style.transform=`rotate(${mrotation}deg)`;
    sec.style.transform=`rotate(${srotation}deg)`;
}


setInterval(displayTime,1000);