let availableBallance = Math.floor(Math.random() * 10000) + 10000;

let sendMoneyWindow1 = document.getElementById("sendMoneyWindow1");
let sendMoneyWindow2 = document.getElementById("sendMoneyWindow2");
let sendMoneyWindow3 = document.getElementById("sendMoneyWindow3");
let sendMoneyWindow4 = document.getElementById("sendMoneyWindow4");
let sendMoneyWindow5 = document.getElementById("sendMoneyWindow5");

let mobNumber = document.getElementById("sendNum");
let sendAmount = document.getElementById("sendAmt");
let sendMessage = document.getElementById("sendMsg");

let addMoneyWindow1 = document.getElementById("addMoneyWindow1");
let addMoneyWindow2 = document.getElementById("addMoneyWindow2");
let addMoneyWindow3 = document.getElementById("addMoneyWindow3");

let addAmount = document.getElementById("addAmt");
let addMessage = document.getElementById("addMsg");

let checkBallanceWindow1 = document.getElementById("checkBalanceWindow1");
let checkBallanceWindow2 = document.getElementById("checkBalanceWindow2");

let checkMsg = document.getElementById("checkMsg");

let rechargeWindow1 = document.getElementById("rechargeWindow1");
let rechargeWindow2 = document.getElementById("rechargeWindow2");
let rechargeWindow3 = document.getElementById("rechargeWindow3");

let rechargeNumber = document.getElementById("rechargeNum");
let rechargeAmount = document.getElementById("rechargeAmt");
let rechargeMsg = document.getElementById("rechargeMsg");


let sendMoney = () => {
    sendMoneyWindow1.style.visibility = "hidden";
    sendMoneyWindow3.style.visibility = "hidden";
    sendMoneyWindow4.style.visibility = "hidden";
    sendMoneyWindow5.style.visibility = "hidden";

    addMoneyWindow1.style.visibility = "hidden";
    addMoneyWindow3.style.visibility = "hidden";

    checkBallanceWindow1.style.visibility="hidden";

    rechargeWindow1.style.visibility = "hidden";
    rechargeWindow3.style.visibility = "hidden";
    sendMoneyWindow1.style.visibility = "visible"
}
let sendM = () => {
    sendMoneyWindow1.style.visibility = "hidden";
    if (mobNumber.value == "" || sendAmount.value == "") {
        sendMoneyWindow5.style.visibility = "visible"
    }
    else if (sendAmount.value > availableBallance) {
        sendMoneyWindow4.style.visibility = "visible"
    }
    else {
        sendMoneyWindow2.style.visibility = "visible";
        let promise = new Promise((resolve, reject) => {
            setTimeout(function () {
                sendMoneyWindow2.style.visibility = "hidden";
                sendMoneyWindow3.style.visibility = "visible";
                availableBallance-=Number(sendAmount.value);
                sendMessage.textContent = `₹${sendAmount.value} sent to ${mobNumber.value}.`
                resolve("promise has been resolved");
            }, Math.floor(Math.random() * 3) * 1000 + 2000);
        })
    }
}

let addMoney = () => {
    sendMoneyWindow1.style.visibility = "hidden";
    sendMoneyWindow3.style.visibility = "hidden";
    sendMoneyWindow4.style.visibility = "hidden";
    sendMoneyWindow5.style.visibility = "hidden";

    addMoneyWindow1.style.visibility = "hidden";
    addMoneyWindow3.style.visibility = "hidden";

    checkBallanceWindow1.style.visibility="hidden";

    rechargeWindow1.style.visibility = "hidden";
    rechargeWindow3.style.visibility = "hidden";
    addMoneyWindow1.style.visibility = "visible"
}
let addM = () => {
    addMoneyWindow1.style.visibility = "hidden"
    if (addAmount.value == "") {
        sendMoneyWindow5.style.visibility = "visible"
    }
    else {
        addMoneyWindow2.style.visibility = "visible";
        let promise = new Promise((resolve, reject) => {
            setTimeout(function () {
                addMoneyWindow2.style.visibility = "hidden";
                addMoneyWindow3.style.visibility = "visible";
                availableBallance+=Number(addAmount.value);
                addMessage.textContent = `₹${addAmount.value} added to your Bank account.`
                resolve("promise has been resolved");
            }, Math.floor(Math.random() * 3) * 1000 + 2000);
        })
    }
}

let checkBallance = () => {
    sendMoneyWindow1.style.visibility = "hidden";
    sendMoneyWindow3.style.visibility = "hidden";
    sendMoneyWindow4.style.visibility = "hidden";
    sendMoneyWindow5.style.visibility = "hidden";

    addMoneyWindow1.style.visibility = "hidden";
    addMoneyWindow3.style.visibility = "hidden";

    checkBallanceWindow1.style.visibility="hidden";

    rechargeWindow1.style.visibility = "hidden";
    rechargeWindow3.style.visibility = "hidden";
    checkBallanceWindow2.style.visibility="visible";
    let promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            checkBallanceWindow2.style.visibility="hidden";
            checkBallanceWindow1.style.visibility="visible";
            checkMsg.textContent=`Your account ballance is ${availableBallance}`;
            resolve("promise has been resolved");
        }, Math.floor(Math.random() * 3) * 1000 + 2000);
    })
}

let recharge = () => {
    sendMoneyWindow1.style.visibility = "hidden";
    sendMoneyWindow3.style.visibility = "hidden";
    sendMoneyWindow4.style.visibility = "hidden";
    sendMoneyWindow5.style.visibility = "hidden";

    addMoneyWindow1.style.visibility = "hidden";
    addMoneyWindow3.style.visibility = "hidden";

    checkBallanceWindow1.style.visibility="hidden";

    rechargeWindow1.style.visibility = "hidden";
    rechargeWindow3.style.visibility = "hidden";
    rechargeWindow1.style.visibility = "visible"
}
let rechargeM = () => {
    rechargeWindow1.style.visibility = "hidden";
    if(rechargeNumber.value==""||rechargeAmount.value==""){
        sendMoneyWindow5.style.visibility = "visible"
    }
    else {
        rechargeWindow2.style.visibility = "visible";
        let promise = new Promise((resolve, reject) => {
            setTimeout(function () {
                rechargeWindow2.style.visibility = "hidden";
                rechargeWindow3.style.visibility = "visible";
                availableBallance-=Number(rechargeAmount.value);
                rechargeMsg.textContent = `Mobile number ${rechargeNumber.value} is recharged with ₹${rechargeAmount.value}.`
                resolve("promise has been resolved");
            }, Math.floor(Math.random() * 3) * 1000 + 2000);
        })
    }
}



let crossButton = document.querySelectorAll(".popup>img");
crossButton.forEach(item => {
    item.addEventListener("click", () => {
        sendMoneyWindow1.style.visibility = "hidden";
        sendMoneyWindow3.style.visibility = "hidden";
        sendMoneyWindow4.style.visibility = "hidden";
        sendMoneyWindow5.style.visibility = "hidden";

        addMoneyWindow1.style.visibility = "hidden";
        addMoneyWindow3.style.visibility = "hidden";

        checkBallanceWindow1.style.visibility="hidden";

        rechargeWindow1.style.visibility = "hidden";
        rechargeWindow3.style.visibility = "hidden";
    })
}) 