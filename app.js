"use strict"

var apiKey = config.KEY;

searchButton.addEventListener('click', searchWeather);

function searchWeather(){
  var cityName = searchCity.value;
  if (cityName.trim().length == 0)
  {
    return alert('Please enter a city name')
  }
  var http = new XMLHttpRequest();
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=' + apiKey;

  http.open (GET, url);
  http.onreadystatechange = function(){
    if (http.readyState == XMLHttpRequest.DONE && http.status === 200)
    {
      var data = JSON.parse(http.responseText);
      var weatherData = new Weather(cityName, data.weather[0].description.toUpperCase());
      weatherData.temperature = data.main.temp;
    } else if (http.readyState == XMLHttpRequest.DONE )
    {
      alert("something went wrong");
    }
  };
  http.send()
}
