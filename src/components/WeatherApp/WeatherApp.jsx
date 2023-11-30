import React, { useState } from 'react'
import './WeatherApp.css'

import sun_icon from "../assets/SUN.png";
import clear_icon from "../assets/clear-sky.png";
import drizzle_icon from "../assets/drizzle.png";
import cloud_icon from "../assets/cloud-2.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import search_icon from "../assets/search.png";

const WeatherApp = () => {

  const [cor_background, setCor] = useState("padrao");
 
  let api_key = "a59cae7790169635f887f04a20f7075b";

  const [wicon, setWicon] = useState("null");

  const search = async () => {

    const element = document.getElementsByClassName("cityInput");
    if(element[0].value===""){
      return 0;
    }

    const condition = document.getElementsByClassName("weather-condition");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    try{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&lang=pt&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();

    condition[0].innerHTML = (data.weather[0].description).replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase());
    temperature[0].innerHTML = Math.floor(data.main.temp)+" °C";
    location[0].innerHTML = `${data.name} - ${data.sys.country}`;


    if(data.main.temp > 15){
      setCor("red");
    }
    else{
      setCor("blue");
    }

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
    }catch(error){
      setWicon("null");
      location[0].innerHTML = "Digite uma cidade válida!";
      condition[0].innerHTML = "";
      temperature[0].innerHTML = "";
      console.log(error);
    }
  }

  return (
    <div className='container' id={cor_background}>
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
      <div className="weather-location">Insira o nome da cidade!</div>
      <div className="weather-condition"></div>

    </div>
  )
}

export default WeatherApp
