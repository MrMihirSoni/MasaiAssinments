const myForm = document.querySelector("form");
const inptask = document.querySelector("#task");
const priority = document.querySelector("#priority");
const tbody = document.querySelector("tbody");


const allTask = [];
myForm.addEventListener("submit",event=>{
    event.preventDefault();
    let data = {
        input : inptask.value,
        priority : priority.value
    }
    allTask.push(data);
    tbody.innerHTML="";
    allTask.map(ele=>{
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");

        td1.innerText = ele.input;
        td2.innerText = ele.priority;

        tr.append(td1,td2);
        tbody.append(tr);
    })
    
})


