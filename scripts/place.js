const windChill = document.querySelector("#wind-chill");

let temperature = 12; //In degrees celsius
let windSpeed = 5; // km/h

const calculateWindChill = function (temperature, windSpeed) {
  const calculatedWindChill =
    13.12 +
    0.6215 * temperature -
    11.37 * windSpeed ** 0.16 +
    0.3965 * temperature * windSpeed ** 0.16;
  return calculatedWindChill.toFixed(1);
};

if (temperature <= 10 && windSpeed > 4.8) {
  windChill.innerHTML = `Wind Chill: ${calculateWindChill(
    temperature,
    windSpeed
  )}℃`;
} else {
  windChill.innerHTML = `Wind Chill: N/A`;
}

// Use the svg in mobile view
const weatherH2 = document.querySelector("#weatherH2");
const svg = document.querySelector("#weather-svg");
const viewportWidth = window.innerWidth;
if (viewportWidth > 740) {
  weatherH2.innerHTML = `Weather⛅`;
} else {
  weatherH2.innerHTML = `Weather`;
}
