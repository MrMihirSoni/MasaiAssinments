let flag = true;
let flag2 = true;
let rootElement = document.getElementById('root');
let root2Element = document.getElementById('root2');
let category = document.getElementById('categories');
let shortList = document.getElementById('shortList');
let myInp = document.getElementById('myInp');
let categoryItem;
let arr = [];

let home = async () => {
    let res = await fetch('https://fakestoreapi.com/products/');
    let data = await res.json();
    arr = data;
    getData()
}
let categories = async () => {
    category.style.display='block'
    let res = await fetch('https://fakestoreapi.com/products/categories/');
    let data = await res.json();
    if (flag) {
        data.forEach(element => {
            let ele = document.createElement('p');
            ele.textContent = element;
            category.append(ele);
            flag = false;
        });
        categoryItem = document.querySelectorAll('#categories > p');
        categoryItem.forEach(element => {
            element.addEventListener('click', () => {
                openCategory(element.innerHTML);
            })
        })
    }
    else {
        category.innerHTML = ''
        flag = true;
        category.style.display='none'
    }
}

let openCategory = async (item) => {
    category.innerHTML = '';
    flag = true;
    rootElement.innerHTML = '';
    let res = await fetch(`https://fakestoreapi.com/products/category/${item}`);
    let data = await res.json();
    arr = data;
    getData()
}

let shortBy = () => {
    if (flag2) {
        shortList.style.display = 'block';
        flag2 = false;
    }
    else {
        shortList.style.display = 'none';
        flag2 = true;
    }
}

let itemDescription = async (id)=>{
    root2Element.style.display='block'
    root2Element.innerHTML='';
    rootElement.style.display = 'none';
    let res = await fetch(`https://fakestoreapi.com/products/${id}`);
    let data = await res.json()
    console.log(data)
        let imgDiv = document.createElement('div');
        let dataDiv = document.createElement('div');
        let img = document.createElement('img');
        img.src = data.image;
        imgDiv.append(img);
        let title = document.createElement('h1');
        title.textContent = data.title;
        let price = document.createElement('h2');
        price.innerHTML = `Price : <span>₹${data.price}</span>`;
        let description = document.createElement('p');
        description.textContent = `Description : ${data.description}`;
        let category = document.createElement('p');
        category.innerHTML = `Categoty : <span>${data.category}</span>`;
        let rating = document.createElement('p');
        rating.innerHTML = `Ratings : <span>${data.rating.rate}</span>`;
        dataDiv.append(title,price,rating,description,category);
        dataDiv.style.backgroundColor = 'white'
        root2Element.append(imgDiv,dataDiv);
}

let lowHigh = ()=>{
    rootElement.innerHTML = '';
    shortList.style.display = 'none';
    flag2 = true;
    arr.sort((a,b)=>{
        return a.price-b.price;
    });
    getData();
}

let highLow = ()=>{
    rootElement.innerHTML = '';
    shortList.style.display = 'none';
    flag2 = true;
    arr.sort((a,b)=>{
        return b.price-a.price;
    });
    getData();
}

let aToZ = ()=>{
    rootElement.innerHTML = '';
    shortList.style.display = 'none';
    flag2 = true;
    arr.sort((a,b)=>{
        let first = a.title;
        let second = b.title;
        return first.localeCompare(second);
    });
    getData();
}

let zToA = ()=>{
    rootElement.innerHTML = '';
    shortList.style.display = 'none';
    flag2 = true;
    arr.sort((a,b)=>{
        let first = a.title;
        let second = b.title;
        return -first.localeCompare(second);
    });
    getData();
}

let searchProduct = async()=>{
    arr=[];
    let res = await fetch('https://fakestoreapi.com/products/');
    let data = await res.json();
    if(myInp.value=='') alert('Please Write Something In SearchBar');
    else {
        data.forEach(element=>{
            if(element.title.toLowerCase().includes(myInp.value.toLowerCase())) arr.push(element);
        })
        getData()
    }
}

function getData(){
    root2Element.style.display = 'none'
    rootElement.style.display='grid'
    category.style.display='none'
    rootElement.innerHTML=''
    arr.forEach(element => {
        let elementCard = document.createElement('div');
        elementCard.id = `${element.id}`
        let imgElement = document.createElement('img');
        imgElement.src = element.image;
        
        let titleElement = document.createElement('p');
        titleElement.textContent = element.title;
        
        let priceElement = document.createElement('p');
        priceElement.textContent = `Price: ₹${element.price * 80}`;
        
        elementCard.append(imgElement, titleElement, priceElement);
        rootElement.append(elementCard)
    })
    
    let elementCard = document.querySelectorAll('#root>div');
    elementCard.forEach(element=>{
        element.addEventListener('click', ()=>{
            itemDescription(element.id);
        })
    })
}

home()