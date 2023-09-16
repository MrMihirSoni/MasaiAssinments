let data = ["https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/12/will-robert-downey-jr-ever-return-as-iron-man-in-the-marvel-cinematic-universe-heres-what-he-says-001.jpg",
"https://c4.wallpaperflare.com/wallpaper/997/794/382/miles-morales-spiderman-miles-morales-spider-man-peter-parker-spider-gwen-hd-wallpaper-preview.jpg",
"https://static1.srcdn.com/wordpress/wp-content/uploads/2023/03/the-hulk-in-the-mcu-with-marvel-comics-immortal-hulk-story.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5",
"https://www.nme.com/wp-content/uploads/2018/02/Black-Widow-Avengers-696x442.jpg",
"https://4.bp.blogspot.com/-lRmM51b7HYM/VzL1JY3fSLI/AAAAAAAAMJI/VjIBeRO2Q7UROsFpGtofbfgMPBek0HyDACLcB/s1600/Chris-Hemsworth-Thor-Art-by-PC-Designs.jpg",
"https://spitfireaudio.imgix.net/77a191f4-76bc-460a-bed7-8d36c2b02653/LOKI2.jpeg?auto=format&crop=entropy&fit=crop&fm=jpg&h=630&q=80&rect=148%2C0%2C1621%2C1080&w=1200",
"https://images.indianexpress.com/2021/01/chris-evans-captain-america-1200.jpg",
"https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/02/ant-man-paul-rudd.jpg",
"https://static.toiimg.com/thumb/msid-64231627,width-1280,resizemode-4/64231627.jpg",
"https://s.yimg.com/ny/api/res/1.2/2pZT.yCqEBD1F.ceNk_h5g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en_US/News/TheWrap/Here8217s_What_Happened_to_Thanos-ee76234a8272b969a6c3d61fb159b163",
"https://phantom-marca.unidadeditorial.es/ec271e8372634e376df57699e55d99e1/resize/1200/f/jpg/assets/multimedia/imagenes/2021/12/22/16402016411702.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaKKFV3pnU0ECdiLQ5e1SSWNVMJALMTaCrFQ&usqp=CAU",
"https://mir-s3-cdn-cf.behance.net/projects/404/c8ced4174914283.Y3JvcCw4NzMsNjgzLDg4OCwzODk.png",
"https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/09/12/Brie-Larson-Captain-Marvel.jpg",
"https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/lo4jgukcbmbwwt9a_1647435001.jpeg",
"https://media.gq.com/photos/58b9fda8803bdb766dd69ef7/16:9/w_1280,c_limit/wolverine.jpg",
"https://images.thedirect.com/media/article_full/black-panther-new-suit-marvel.jpg",
"https://m.media-amazon.com/images/M/MV5BNWYwNDIyNWMtNWEzYS00MTMwLThmNjItNDZkYWUzMjgwZjM4XkEyXkFqcGdeQXZ3ZXNsZXk@._V1_.jpg",
"https://i.cdn.newsbytesapp.com/images/l53320220804135032.jpeg",
"https://thedisinsider.com/wp-content/uploads/2021/04/hawkeye-2020-artwork-3s.jpg",
"https://www.digitaltrends.com/wp-content/uploads/2021/12/eternals-celestial-arishem.jpg?p=1"
];

let myImage = document.querySelector("img");
let Pause = document.getElementById("Pause");
let Play = document.getElementById("Play");

Play.style.display="none"

let i=0;
let timer = null;

function slideShow(){
    i++;
    if(i==data.length) i=0;
    myImage.src=data[i];
}

timer = setInterval(slideShow,2000);

function pause(){
    Pause.style.display="none";
    Play.style.display="block";
    clearInterval(timer);
}

function play(){
    Pause.style.display="block";
    Play.style.display="none";
    timer = setInterval(slideShow,2000);
}

function leftSlide(){
    Pause.style.display="block";
    Play.style.display="none";
    clearInterval(timer)
    i--;
    if(i==-1) i=data.length-1;
    myImage.src=data[i]
    timer = setInterval(slideShow,2000);
}

function rightSlide(){
    Pause.style.display="block";
    Play.style.display="none";
    clearInterval(timer);
    i++;
    if(i==data.length) i=0;
    myImage.src=data[i]
    timer = setInterval(slideShow,2000);
}
