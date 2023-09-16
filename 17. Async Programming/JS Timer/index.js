let hours = document.getElementById("hour");
let minutes = document.getElementById("minute");
let seconds = document.getElementById("second");

let Start = document.getElementById("start");
let Pause = document.getElementById("pause");
let Reset = document.getElementById("reset");

Pause.style.display="none";
Reset.style.display="none";

let timer = null;

let sec;
let min;
let hrs;

function watchTime(){

    seconds.value--;
    if(seconds.value<0){
        seconds.value = 59;
        minutes.value--;
    }
    if(minutes.value<0){
        minutes.value = 59;
        hours.value--;
    }
    if(hours.value==0&&minutes.value==0&&seconds.value==0){
        Pause.style.display="none";
        Start.style.display="inline-block";
        clearInterval(timer);
    } 
}

function start(){
    sec = seconds.value;
    min = minutes.value;
    hrs = hours.value;
    Start.style.display="none";
    Pause.style.display="inline-block";
    Reset.style.display="inline-block";
    timer = setInterval(watchTime,1000);
    if(hours.value==0&&minutes.value==0&&seconds.value==0){
        clearInterval(timer);
        Pause.style.display="none";
        Start.style.display="inline-block";
        Reset.style.display="none";
    } 
}
function pause(){
    Pause.style.display="none";
    Start.style.display="inline-block";
    Start.innerText="Restart";
    clearInterval(timer);
}
function reset(){
    Pause.style.display="none";
    Start.style.display="inline-block";
    Reset.style.display="none";
    Start.innerText="Start";
    clearInterval(timer);
    seconds.value = sec;
    minutes.value = min;
    hours.value = hrs;

}