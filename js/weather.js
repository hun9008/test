const API_KEY = "04dd538dc5fc18f1168a8f9901125d7c"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        let weaI = data.weather[0].main
        if (data.weather[0].main == "Clear")
        {
            weaI = "☀️";
        }
        else if (data.weather[0].main == "Clouds")
        {
            weaI = "☁️";
        }
        else if (data.weather[0].main == "Rain")
        {
            weaI = "🌧";
        }
        else if (data.weather[0].main == "Snow")
        {
            weaI = "❄️";
        }
        weather.innerText = `${weaI}   ${data.main.temp} C`;

    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
