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
        name1 : dName.value,
        ID : dID.value,
        specialization : dSpecs.value,
        experience : dXp.value,
        email : dEmail.value,
        mobNo : dMob.value
    };

    allRecord.push(data);
    tbody.innerHTML = "";
    allRecord.map((ele,i)=>{
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");
        const td6 = document.createElement("td");
        const td7 = document.createElement("td");
        const td8 = document.createElement("td");

        td1.innerText = ele.name1;
        td2.innerText = ele.ID;
        td3.innerText = ele.specialization;
        td4.innerText = ele.experience;
        td5.innerText = ele.email;
        td6.innerText = ele.mobNo;
        if(ele.experience<1) td7.innerText = "Trainee";
        else if(ele.experience<5) td7.innerText = "Junior";
        else td7.innerText = "Senior";
        td8.innerText = "Delete";

        td8.style.backgroundColor="red"
        td8.addEventListener("click", ()=>{
            tr.innerHTML="";
            allRecord.splice(i,1);
        })

        tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
        tbody.append(tr);
    })
})
