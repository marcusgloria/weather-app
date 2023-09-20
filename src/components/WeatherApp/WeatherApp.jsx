import React, { useState } from 'react'
import './WeatherApp.css'

import hot_background from "../assets/BACK-HOT-APP.png";
import cold_background from "../assets/BACK-COLD-APP.png";
import sun_icon from "../assets/SUN.png";
import clear_icon from "../assets/clear-sky.png";
import drizzle_icon from "../assets/drizzle.png";
import cloud_icon from "../assets/cloud-2.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import search_icon from "../assets/search.png";

const WeatherApp = () => {
 
  let api_key = "a59cae7790169635f887f04a20f7075b";

  const [wicon, setWicon] = useState(sun_icon);

  console.log(api_key);


  const search = async () => {
    const element = document.getElementsByClassName("cityInput");

    if(element[0].value===""){
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&lang=pt&appid=${api_key}`;

    console.log(url);

    let response = await fetch(url);
    let data = await response.json();

    const condition = document.getElementsByClassName("weather-condition");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    condition[0].innerHTML = (data.weather[0].description).replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase());
    temperature[0].innerHTML = Math.floor(data.main.temp)+" °C";
    location[0].innerHTML = `${data.name} - ${data.sys.country}`;

    if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
      setWicon(sun_icon);
    }
    else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
      setWicon(cloud_icon);
    }
    else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
      setWicon(drizzle_icon);
    }
    else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
      setWicon(drizzle_icon);
    }
    else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
      setWicon(rain_icon);
    }
    else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
      setWicon(rain_icon);
    }
    else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
      setWicon(snow_icon);
    }
    else{
      setWicon(clear_icon);
    }

  }

  return (
    <div className='container'>
      <div className='top-bar'>
        <input type="text" className="cityInput" placeholder='Pesquisar Cidade'/>
        <div className="search-icon" onClick={()=>{search()}}>
            <img src={search_icon} width="32px" alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} width="250px" alt="" />
      </div>
      <div className="weather-temp"></div>
      <div className="weather-location"></div>
      <div className="weather-condition"></div>

    </div>
  )
}

export default WeatherApp
