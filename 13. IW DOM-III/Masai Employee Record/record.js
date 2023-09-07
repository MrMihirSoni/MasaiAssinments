// fill in javascript code here

const form = document.querySelector("form");
const empName = document.querySelector("#name");
const empId = document.querySelector("#employeeID");
const empDepartment = document.querySelector("#department");
const empXp = document.querySelector("#exp");
const empEmail = document.querySelector("#email");
const empMob = document.querySelector("#mbl");
const tbody = document.querySelector("tbody");

const allRecord = [];
form.addEventListener("submit", event=>{
    event.preventDefault();
    let data = {
        name : empName.value,
        ID : empId.value,
        department : empDepartment.value,
        experience : empXp.value,
        email : empEmail.value,
        mobile : empMob.value
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
        const td7 = document.createElement("td");
        const td8 = document.createElement("td");

        td1.innerText=ele.name;
        td2.innerText=ele.ID;
        td3.innerText=ele.department;
        td4.innerText=ele.experience;
        td5.innerText=ele.email;
        td6.innerText=ele.mobile;
        if(ele.experience<=1) td7.innerText="Fresher";
        else if(ele.experience<5) td7.innerText="Junior";
        else td7.innerText="Senior";
        td8.innerText="Delete";

        td8.style.backgroundColor="red";
        td8.addEventListener("click", ()=>{
            tr.innerHTML="";
            allRecord.splice(i,1);
        })

        tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
        tbody.append(tr);
    })
})


