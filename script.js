const apikey="5ac15fef2e5ea35c950273d6736de3aa";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


async function weatherCall(city) {
  const resolve=await fetch(apiurl+city+`&appid=${apikey}`)
  var data=await resolve.json(); 
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C"

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
  
    document.querySelector(".Wind-Speed").innerHTML=data.wind.speed+"km/h";
  
  
    let weather=data.weather[0].main;
    console.log(weather);
    
  
  
    let WeatherReport=document.querySelector(".weather-img");
    if (weather === "Clear") {
      WeatherReport.src = "images/clear.png";
    } else if (weather === "Clouds") {
      WeatherReport.src = "images/clouds.png";
    } else if (weather === "Drizzle") {
      WeatherReport.src = "images/drizzle.png";
    } else if (weather === "Mist") {
      WeatherReport.src = "images/mist.png";
    } else if (weather === "Rain") {
      WeatherReport.src = "images/rain.png";
    } else if (weather === "Snow") {
      WeatherReport.src = "images/snow.png";
    }
    else if (weather === "Thunderstorm") {
      WeatherReport.src = "images/thunderstorm.png";
    } else if (weather === "Fog") {
      WeatherReport.src = "images/fog.png";
    } else if (weather === "Haze") {
      WeatherReport.src = "images/haze.png";
    } else if (weather === "Smoke") {
      WeatherReport.src = "images/smoke.png";
    }
    else if (weather === "Tornado") {
      WeatherReport.src = "images/tornado.png";
    } else if (weather === "Dust ") {
      WeatherReport.src = "images/dust.png";
    }
  }
  const input=document.querySelector(".input");
  const btn=document.querySelector(".btn");
  btn.addEventListener("click",()=>{
    weatherCall(input.value)
  })
  
