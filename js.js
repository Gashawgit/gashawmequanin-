document.getElementById("searchBtn").addEventListener("click", getWeather);

function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            const weatherData = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>🌡 Temperature: ${data.main.temp}°C</p>
                <p>☁ Weather: ${data.weather[0].description}</p>
                <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
            `;
            document.getElementById("weatherResult").innerHTML = weatherData;
        })
        .catch(error => {
            document.getElementById("weatherResult").innerHTML = `<p style="color:red;">${error.message}</p>`;
        });
}

