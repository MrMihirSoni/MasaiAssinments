let popupWindow1 = document.getElementById("popupWindow1");
let popupWindow2 = document.getElementById("popupWindow2");
let popupWindow3 = document.getElementById("popupWindow3");
let popupWindow4 = document.getElementById("popupWindow4");

let orderButton = document.getElementById("orderButton");
let searchImg = document.getElementById("searchBarLogo");

let burger = document.getElementById("burger");
let noodles = document.getElementById("noodles");
let biryani = document.getElementById("biryani");
let momo = document.getElementById("momo");
let dosa = document.getElementById("dosa");



function addItem(Item){
    if(Item=='burger') burger.innerText++;
    if(Item=='noodles') noodles.innerText++;
    if(Item=='biryani') biryani.innerText++;
    if(Item=='momo') momo.innerText++;
    if(Item=='dosa') dosa.innerText++;
    
}
function removeItem(Item){
    if(Item=='burger'){
        burger.innerText--;
        if(burger.innerText<0) burger.innerText=0;
    }
    if(Item=='noodles'){
        noodles.innerText--;
        if(noodles.innerText<0) noodles.innerText=0;
    }
    if(Item=='biryani'){
        biryani.innerText--;
        if(biryani.innerText<0) biryani.innerText=0;
    }
    if(Item=='momo'){
        momo.innerText--;
        if(momo.innerText<0) momo.innerText=0;
    }
    if(Item=='dosa'){
        dosa.innerText--;
        if(dosa.innerText<0) dosa.innerText=0;
    }
}

function placeOrder(){
    let total = document.getElementById("total");

    let bg = burger.innerText*99;
    let nd = noodles.innerText*139;
    let br = biryani.innerText*219;
    let mo = momo.innerText*89;
    let ds = dosa.innerText*129;

    total.innerText = bg+nd+br+mo+ds;

    if(total.innerText==0){
        popupWindow4.style.display="block";
        orderButton.style.display="none";
    }
    else{
        let orderNum = Math.floor(Math.random()*100)+25;
        let orderNo = document.getElementById("orderNo");
        orderNo.innerText = `Order No: ${orderNum}`;
        let spanOrder = document.getElementById("spanOrder");
        spanOrder.innerText = orderNum;

        popupWindow1.style.display="block";
        orderButton.style.display="none";
    }
}
function emptyCartButton(){
    popupWindow4.style.display="none";
    orderButton.style.display="block";
}
function cancle(){
    popupWindow1.style.display="none";
    orderButton.style.display="block";
}
function pay(){
    popupWindow1.style.display="none";
    popupWindow3.style.display="block";
    let promise = new Promise((resolve,reject)=>{
        setTimeout(function() {
            popupWindow3.style.display="none"
            popupWindow2.style.display="block";
            resolve("promise has been resolved");
        }, Math.floor(Math.random()*5)*1000+5000);
    })
    
}
function goBack(){
    popupWindow2.style.display="none";
    orderButton.style.display="block";
    burger.innerText=0;
    noodles.innerText=0;
    biryani.innerText=0;
    momo.innerText=0;
    dosa.innerText=0;
}
let searchFood = document.getElementById("searchF");
let itemAvailable = ["burger","noodles","biryani","momos","dosa"];
searchImg.addEventListener("click", ()=>{
    if(itemAvailable.includes(searchFood.value)) alert("Scroll and find it yourself :)");
    else alert("This item is not available!!")
})
