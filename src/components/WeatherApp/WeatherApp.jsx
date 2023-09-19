import React from 'react'
import './WeatherApp.css'

import hot_background from "../assets/BACK-HOT-APP.png";
import cold_background from "../assets/BACK-COLD-APP.png";
import sun_icon from "../assets/SUN.png";
import cloud_icon from "../assets/cloud-2.png";
import search_icon from "../assets/search.png";


const WeatherApp = () => {
  return (
    <div className='container'>
      <div className='top-bar'>
        <input type="text" className="cityInput" placeholder='Pesquisar Cidade'/>
        <div className="search-icon">
            <img src={search_icon} width="32px" alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={cloud_icon} width="300px" alt="" />
      </div>
      <div className="weather-temp">24° C</div>
      <div className="weather-location">London</div>
      <div className="data-container">
          <img src="" alt="" className='icon'/>
          <div className="data">
          </div>
      </div>

    </div>
  )
}

export default WeatherApp
