function getWeather() {
  const city = document.getElementById("cityInput").value;

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  // Dummy data (replace with API later)
  document.getElementById("city").innerText = city;
  document.getElementById("temp").innerText = "28°C";
  document.getElementById("condition").innerText = "Sunny";
  document.getElementById("humidity").innerText = "60%";
  document.getElementById("wind").innerText = "12 km/h";
}
