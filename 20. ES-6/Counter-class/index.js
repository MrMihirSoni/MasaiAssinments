let display = document.getElementById('display');
let autoBtn = document.getElementById('autoBtn');
let timer = null;

class Counter {
    plus() {
        display.textContent++;
        console.log(display.textContent);
        clearInterval(timer);
        timer = null;
        autoBtn.src = 'https://www.transparentpng.com/thumb/play/Sk7IcT-play-icons-free-icons-ios-icons-icon-search-engine.png'
    }
    minus() {
        display.textContent--;
        if (display.textContent < 0) display.textContent = 0;
        clearInterval(timer);
        timer = null;
        autoBtn.src = 'https://www.transparentpng.com/thumb/play/Sk7IcT-play-icons-free-icons-ios-icons-icon-search-engine.png'
    }
    auto() {
        if (timer === null) {
            timer = setInterval(() => {
                display.textContent++;
            }, 1000)
            autoBtn.src = 'https://www.freeiconspng.com/uploads/simple-green-pause-icon-3.png'
        }
        else{
            clearInterval(timer);
            autoBtn.src = 'https://www.transparentpng.com/thumb/play/Sk7IcT-play-icons-free-icons-ios-icons-icon-search-engine.png';
            timer = null;
        }
    }
}

let myCounter = new Counter();

let auto = ()=>{
    myCounter.auto()
}
let plus = ()=>{
    myCounter.plus()
}
let minus = ()=>{
    myCounter.minus()
}

auto()