let btn = document.querySelector(".searchBox button");
let weatherIcon = document.querySelector(".weatherIcon");
// logic
async function checkWeather(apiURL) {
    const response = await fetch(apiURL);
    // handle error
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        console.log("error catch")
    }
    // handle the response 
    else {
        const data = await response.json();
        console.log(data)
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°c';
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
        document.querySelector(".wind").innerHTML = data.wind.speed + 'Km/h';
    // handle the weather icon
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = './resources/clouds.png';
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = './resources/clear.png';
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = './resources/rain.png';
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = './resources/drizzle.png';
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = './resources/mist.png';
        } else if (data.weather[0].main == "Haze") {
            weatherIcon.src = './resources/mist.png';
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = './resources/snow.png';
        } else if (data.weather[0].main == "Humidity") {
            weatherIcon.src = './resources/humidity.png';
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}
// event handler
btn.addEventListener("click", () => {
    const apiC = 'f91d8aa239caa76722ca60e28e0a93d7';
    let input = document.querySelector(".searchBox input[type='text']");
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiC}&units=metric`;
    if (!input.value) {
        alert("Please Input the City")
    } else {
        checkWeather(apiURL);
        input.value = "";
    }
})
