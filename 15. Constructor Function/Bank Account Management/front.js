const form = document.querySelector("form");
const accNo = document.querySelector("#accNo");
const accHName = document.querySelector("#accHName");
const accType = document.querySelector("#accType");
const balance = document.querySelector("#balance");
const tbody = document.querySelector("tbody");

const allRecord = [];
form.addEventListener("submit", event=>{
    event.preventDefault();
    let data = {
        accNo : accNo.value,
        accHName : accHName.value,
        accType : accType.value,
        balance : balance.value
    };

    allRecord.push(data);
    tbody.innerHTML="";
    allRecord.map((ele,i)=>{
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");
        const td6 = document.createElement("td");

        td1.innerText=ele.accNo;
        td2.innerText=ele.accHName;
        td3.innerText=ele.accType;
        td4.innerText=ele.balance;
        td5.innerText="Deposite";
        td6.innerText="Withdraw";

        tr.append(td1,td2,td3,td4,td5,td6);
        tbody.append(tr);
    })
})
