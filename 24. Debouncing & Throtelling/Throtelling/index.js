let searchItem = document.getElementById('search');
let rootElement = document.getElementById('root');
let searchres = document.getElementById('searchRes');
let flag = true;
rootElement.style.display='none'
searchItem.addEventListener('input', () => {
    if (flag) {
        flag = false;
        setTimeout(() => {
            searchresult();
            flag = true;
        }, 400)
    }
})

let searchresult = async () => {
    try {
        if (searchItem.value != '') {
            let res = await fetch(`https://www.omdbapi.com/?apikey=1f89b8&s=${searchItem.value}`);
            let data = await res.json();
    
            searchres.style.display='block'
            searchres.innerHTML = '';
            data.Search.map(element => {
                let suggestionList = document.createElement('div');
                let suggestedTitle = document.createElement('p');
                suggestedTitle.textContent = element.Title;
                suggestionList.append(suggestedTitle);
                searchres.append(suggestionList);
            })
            
            let movieTitle = document.querySelectorAll('#searchRes>div>p');
            movieTitle.forEach(element=>{
                let nameOfMovie = element.innerHTML;
                element.addEventListener('click', ()=>{
                    console.log(nameOfMovie)
                    moviePage(nameOfMovie)
                })
            })
        }
    } catch (error) {
        console.log('some error occoured')
    }
}

let moviePage = async (nameOfMovie)=>{
    searchItem.value = ''
    rootElement.innerHTML=''
    rootElement.style.display='flex'
    searchres.style.display='none'
    let newUrl = await fetch(`https://www.omdbapi.com/?apikey=1f89b8&t=${nameOfMovie}`)
    let newData = await newUrl.json();
    let page = document.createElement('div');

    let newName = document.createElement('p');
    newName.textContent = newData.Title;
    
    let newImg = document.createElement('img');
    newImg.src = newData.Poster;
    let imgDiv = document.createElement('div');
    imgDiv.append(newImg);

    let released = document.createElement('p');
    released.textContent = `Released on :  ${newData.Released}`;

    let actors = document.createElement('p');
    actors.textContent = `Actors :  ${newData.Actors}`;

    let awards = document.createElement('p');
    awards.textContent = `Awards :  ${newData.Awards}`;

    let boxOffice = document.createElement('p');
    boxOffice.textContent = `BoxOffice Collection :  ${newData.BoxOffice}`;

    let country = document.createElement('p');
    country.textContent = `Country :  ${newData.country}`;

    let director = document.createElement('p');
    director.textContent = `Director :  ${newData.Director}`;

    let genre = document.createElement('p');
    genre.textContent = `Genre :  ${newData.Genre}`;

    let language = document.createElement('p');
    language.textContent = `Languages :  ${newData.Language}`;

    let plot = document.createElement('p');
    plot.textContent = `Plot :  ${newData.Plot}`;

    let rated = document.createElement('p');
    rated.textContent = `Ratings :  ${newData.Rated}`;

    let writers = document.createElement('p');
    writers.textContent = `Written by :  ${newData.Writer}`;

    let runTime = document.createElement('p');
    runTime.textContent = `Total Runtime :  ${newData.Runtime}`;

    let imdbRating = document.createElement('p');
    imdbRating.textContent = `IMDB Rating :  ${newData.imdbRating}`;

    let textDiv = document.createElement('div');
    textDiv.append(newName, released, actors, awards, boxOffice, director, country, language, genre, plot, rated, writers, runTime, imdbRating)

    page.append(imgDiv, textDiv);
    rootElement.append(page)
}