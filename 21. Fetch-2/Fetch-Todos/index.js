let tbody = document.querySelector('tbody');
let init = async ()=>{
    try {
        let response = await fetch('http://localhost:3000/todos');
        let data = await response.json();

        data.forEach(element => {
            // console.log(element)
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let p4 = document.createElement('p');
            let td2 = document.createElement('td');
            p1.textContent = `User ID : ${element.userId}`
            p2.textContent = `ID : ${element.id}`
            p3.textContent = `Title : ${element.title}`
            p4.textContent = `Is Completed : ${element.completed}`
            td2.innerHTML = 'Delete';
            td2.addEventListener('click', ()=>{
                tr.innerHTML='';
            })
            td1.append(p1,p2,p3,p4)
            tr.append(td1,td2)
            tbody.append(tr)
            
        });
    } catch (error) {
        console.log(error)
    }
}
init()