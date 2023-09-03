// fill in javascript code here

const form = document.querySelector("form");
const dName = document.querySelector("#name");
const dID = document.querySelector("#docID");
const dSpecs = document.querySelector("#dept");
const dXp = document.querySelector("#exp");
const dEmail = document.querySelector("#email");
const dMob = document.querySelector("#mbl");
const tbody = document.querySelector("tbody");

const allRecord = [];
form.addEventListener("submit", event=>{
    event.preventDefault();
    let data = {
        name : dName.value,
        ID : dID.value,
        specialization : dSpecs.value,
        experience : dXp.value,
        email : dEmail.value,
        mobNo : dMob.value
    };
    allRecord.push(data);

    tbody.innerHTML = "";
    allRecord.map(ele=>{
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");
        const td6 = document.createElement("td");

        td1 = ele.name;
        td2 = ele.ID;
        td3 = ele.specialization;
        td4 = ele.experience;
        td5 = ele.email;
        td6 = ele.mobNo;

        tr.append(td1,td2,td3,td4,td5,td6);
        tbody.append(tr);
    })
})
