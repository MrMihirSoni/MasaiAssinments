// fill in javascript code here
const form = document.querySelector("form");
const empName = document.querySelector("#name");
const empID = document.querySelector("employeeID");
const empDepartment = document.querySelector("department");
const empXp = document.querySelector("exp");
const empEmail = document.querySelector("email");
const empMob = document.querySelector("mbl");
const tbody = document.querySelector("tbody");

const allRecord = [];
form.addEventListener("submit", event=>{
    event.preventDefault();
    let data = {
        name : empName.value,
        ID : empID.value,
        department : empDepartment.value,
        experience : empXp.value,
        email : empEmail.value,
        mobile : empMob.value
    };

    allRecord.push(data);
    tbody.innerHTML="";
    allRecord.map(ele=>{
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");
        const td6 = document.createElement("td");

        td1.innerText=ele.name;
        td2.innerText=ele.ID;
        td3.innerText=ele.departmemnt;
        td4.innerText=ele.experience;
        td5.innerText=ele.email;
        td6.innerText=ele.mobile;

        tr.append(td1,td2,td3,td4,td5,td6);
        tbody.append(tr);
    })
})
