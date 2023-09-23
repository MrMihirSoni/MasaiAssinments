let myForm = document.querySelector("form");
let myName = document.querySelector("#name");
let myAge = document.querySelector("#age");
const tbody = document.querySelector("tbody");

myForm.addEventListener("submit", event=>{
    event.preventDefault();
    let Name = myName.value;
    let Age = myAge.value
    if(Name!=""){
        localStorage.setItem(Name,Age)
    myForm.reset()
    }
})

let localData = ()=>{
    tbody.innerHTML="";

    for (const i in localStorage) {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");

        if(i!="length" && i!="clear" && i!="getItem" && i!="key" && i!="removeItem" && i!="setItem"){
            td1.textContent = i;
            td2.textContent = localStorage[i];
            tr.append(td1,td2);
            tbody.append(tr);
        }
        
    }
}

let clr = ()=>{
    localStorage.clear();
    localData();
}