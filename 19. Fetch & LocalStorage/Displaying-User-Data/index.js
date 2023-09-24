let fetchUser = ()=>{
    fetch("https://reqres.in/api/users")
    .then(response => response.json())
    .then(resObj => printData(resObj.data))
    .catch(error =>{
        console.log('some error occoured')
    })
    let fetchBtn = document.querySelector("button");
    fetchBtn.style.visibility="hidden"
}

let rootElement = document.getElementById("root");

let printData = (data)=>{
    data.forEach(element => {
        console.log(element)
        let userCard = document.createElement("div");

        let userImg = document.createElement("img");
        userImg.src = element.avatar;

        let userName = document.createElement("p");
        userName.textContent = `${element.first_name} ${element.last_name}`;

        let userId = document.createElement("p");
        userId.textContent = `ID: ${element.id}`;

        let userEmail = document.createElement("p");
        userEmail.textContent = element.email;

        userCard.append(userImg,userName,userId,userEmail);
        rootElement.append(userCard);
    });
}