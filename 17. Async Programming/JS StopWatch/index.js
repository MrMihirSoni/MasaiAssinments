let display = document.getElementById("stopWatch");
let Start = document.getElementById("start");
let Pause = document.getElementById("pause");
let Reset = document.getElementById("reset");
Pause.style.display="none";
Reset.style.display="none";

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliSeconds = 0;

let timer = null;

function watchRun(){
    milliSeconds++
    if(milliSeconds==100){
        milliSeconds = 0;
        seconds++;
    }
    if(seconds == 60){
        seconds = 0;
        minutes++;
    }
    if(minutes == 60){
        minutes = 0;
        hours++;
    }

    
    // if(hours===0) hours = "00";
    // else if(hours===1) hours = "01";
    // else if(hours===2) hours = "02";
    // else if(hours===3) hours = "03";
    // else if(hours===4) hours = "04";
    // else if(hours===5) hours = "05";
    // else if(hours===6) hours = "06";
    // else if(hours===7) hours = "07";
    // else if(hours===8) hours = "08";
    // else if(hours===9) hours = "09";
    
   
    // if(minutes===0) minutes = "00";
    // else if(minutes===1) minutes = "01";
    // else if(minutes===2) minutes = "02";
    // else if(minutes===3) minutes = "03";
    // else if(minutes===4) minutes = "04";
    // else if(minutes===5) minutes = "05";
    // else if(minutes===6) minutes = "06";
    // else if(minutes===7) minutes = "07";
    // else if(minutes===8) minutes = "08";
    // else if(minutes===9) minutes = "09";

    
    // if(seconds===0) seconds = "00";
    // else if(seconds===1) seconds = "01";
    // else if(seconds===2) seconds = "02";
    // else if(seconds===3) seconds = "03";
    // else if(seconds===4) seconds = "04";
    // else if(seconds===5) seconds = "05";
    // else if(seconds===6) seconds = "06";
    // else if(seconds===7) seconds = "07";
    // else if(seconds===8) seconds = "08";
    // else if(seconds===9) seconds = "09";

    if(hours==0&&minutes==0) display.innerText = `${String(seconds).padStart(2,'0')}`;
    else if(hours==0) display.innerText = `${ String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
    else display.innerText = `${String(hours).padStart(2,'0')}:${ String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
}

function start(){
    Start.style.display="none";
    Pause.style.display="block";
    Reset.style.display="block";
    timer = setInterval(watchRun,10);
}

function pause(){
    Pause.style.display="none";
    Start.style.display="block";
    Start.innerText="Restart";
    clearInterval(timer)
}

function reset(){
    Pause.style.display="none";
    Start.style.display="block";
    Reset.style.display="none";
    Start.innerText="Start";
    clearInterval(timer)
    milliSeconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    display.innerText = "00"
}
