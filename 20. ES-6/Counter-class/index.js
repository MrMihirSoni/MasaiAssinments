let display = document.getElementById('display');
let autoBtn = document.getElementById('autoBtn');
let i = 0;
let timer = null;

let plus = ()=>{
    i++;
    display.textContent = i;
    clearInterval(timer);
    timer = null;
    autoBtn.src = 'https://www.transparentpng.com/thumb/play/Sk7IcT-play-icons-free-icons-ios-icons-icon-search-engine.png'
}

let minus = ()=>{
    i--;
    if(i<0) i=0;
    display.textContent = i;
    clearInterval(timer);
    timer = null;
    autoBtn.src = 'https://www.transparentpng.com/thumb/play/Sk7IcT-play-icons-free-icons-ios-icons-icon-search-engine.png'
}

let auto = ()=>{
    if(timer===null){
        timer = setInterval(()=>{
            i++;
            display.textContent = i;
        },1000)
        autoBtn.src='https://www.freeiconspng.com/uploads/simple-green-pause-icon-3.png'
    }
    else{
        clearInterval(timer)
        timer = null;
        autoBtn.src = 'https://www.transparentpng.com/thumb/play/Sk7IcT-play-icons-free-icons-ios-icons-icon-search-engine.png'
    }
}
auto()