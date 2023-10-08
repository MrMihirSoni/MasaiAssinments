let search = document.getElementById('search');
let weatherDetails = document.getElementById('weather');
let mapDetails = document.getElementById('map');
let forecastDetails = document.getElementById('forecast');
let searchCity = ()=>{
    if(search.value!=''){
        weather();
        map();
        forecast();
        search.value=''
    }
}

let weather = async ()=>{
    weatherDetails.innerHTML = '';
    
    try {
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&APPID=023f609ca2f4a868b6c04d8448dec5e2`);
        let data = await res.json();
        console.log(data);

        let cityCard = document.createElement('div');
        let city = document.createElement('h2');
        city.textContent = data.name;
        cityCard.append(city);

        let tempCard = document.createElement('div');
        tempCard.id = 'temp';
        let temp = document.createElement('h3');
        temp.textContent = 'Temparature:';
        let temparature = document.createElement('p');
        temparature.textContent = `${(data.main.temp-273.15).toFixed(1)}°C`;
        let temp2 = document.createElement('p');
        temp2.textContent = `(Feels like: ${(data.main.feels_like-273.15).toFixed(1)}°C)`;
        tempCard.append(temp,temparature,temp2);

        let iconCard = document.createElement('div');
        iconCard.id = 'icon'
        let iconId = data.weather[0].icon;
        let icon = document.createElement('img');
        icon.src = `http://openweathermap.org/img/wn/${iconId}.png`;
        let iconDescription = document.createElement('p');
        iconDescription.textContent = data.weather[0].main;
        iconCard.append(icon,iconDescription);

        let humidityCard = document.createElement('div');
        let humidity = document.createElement('p');
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        humidityCard.append(humidity);

        let windCard = document.createElement('div');
        let wind = document.createElement('p');
        wind.textContent = `Wind Speed: ${data.wind.speed}Km/h`;
        windCard.append(wind);

        weatherDetails.append(cityCard,tempCard,iconCard,humidityCard,windCard)


    } catch (error) {
        console.log(error)
    }
    weatherDetails.style.visibility = 'visible'
}

let map = ()=>{
    mapDetails.innerHTML = `
    <div class="gmap_canvas">
                <iframe width="800" height="400" id="gmap_canvas"
                  src="https://maps.google.com/maps?q=${search.value}t=&z=11&ie=UTF8&iwloc=&output=embed"
                  frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe>
              </div>
    `
}

let forecast = ()=>{

}