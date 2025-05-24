// Get DOM Elements
const form = document.getElementById("weather-form");
const city = document.getElementById("city-input");
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
  } catch (error) {}
});

console.log(API_KEY);
