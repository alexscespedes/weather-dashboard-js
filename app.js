// Get DOM Elements
const form = document.getElementById("weather-form");
const cityInput = document.getElementById("city-input");
const errorMessage = document.getElementById("error-message");
const weatherResult = document.getElementById("weather-result");

const cityName = document.getElementById("city-name");
const weatherIcon = document.getElementById("weather-icon");
const description = document.getElementById("description");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const city = cityInput.value.trim();
  if (!city) return;

  errorMessage.classList.add("hidden");
  weatherResult.classList.add("hidden");

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/weather?q=${encodeURIComponent(
        city
      )}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    cityName.textContent = `${data.name}, ${data.sys.country}`;
    description.textContent = data.weather[0].description;
    temperature.textContent = data.main.temp.toFixed(1);
    humidity.textContent = data.main.humidity;
    windSpeed.textContent = (data.wind.speed * 3.6).toFixed(1);
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.alt = data.weather[0].description;

    weatherResult.classList.remove("hidden");
  } catch (error) {
    errorMessage.textContent = error.message;
    errorMessage.classList.remove("hidden");
  }
});
