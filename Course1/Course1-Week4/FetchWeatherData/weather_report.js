function showWeatherDetails(event) {
  event.preventDefault();

  const city = document.getElementById("city").value;
  const apiKey = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const weatherInfo = document.getElementById("weatherInfo");
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
      <p>Temperature: ${data.main.temp} &#8451</p>
      <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      const weatherInfo = document.getElementById("weatherInfo");
      weatherInfo.innerHTML = `<p>Failed to retrieve weather data. Please check city name.</p>`;
    });
}

document
  .getElementById("weatherForm")
  .addEventListener("submit", showWeatherDetails);
