import React, { useState } from "react";
import "./index.css";
import "./App.css";
import axios from "axios";

export default function Weather() {
  let weatherData = {
    city: "Bratislava",
    temperature: "4",
    time: "05:16",
    description: "Foggy",
    feelsLike: "1",
    wind: "5",
    humidity: "81",
  };

  function showTemp(response) {
    setLoading(true);
    let icon = (
      <img
        alt="weathericon"
        src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
      />
    );
    showTemperature(Math.round(response.data.main.temp));
    showWind(Math.round(response.data.wind.speed));
    showHumidity(response.data.main.humidity);
    showDescription(response.data.weather[0].main);
    showIcon(icon);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4f6484d9a7c6987f3133d7c6fd4bd3b8`;
    axios.get(url).then(showTemp);
  }

  return (
    <div className="Weather">
      <h1>{weatherData.city}</h1>
      <h2>
        <span className="actualTemp">{weatherData.temperature}</span>
        <span className="celsius">°C</span>
      </h2>
      <h3>
        <span class="time"> {weatherData.time} </span>|
        <span class="description"> {weatherData.description}</span>
        <div>
          Feels-like temperature {weatherData.feelsLike}°C | Wind speed{" "}
          {weatherData.wind}m/s | Humidity {weatherData.humidity} %
        </div>
      </h3>
      <div>
        <div className="Weather">
          <div className="container">
            <div className="row">
              <div className="offset-sm-1 col-sm-10">
                <form onSubmit={handleSubmit}>
                  <div class="mb-3 location">
                    <label for="exampleInputEmail1" class="form-label"></label>
                    <input
                      type="text"
                      placeholder="Enter location"
                      class="form-control"
                      autoComplete="off"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
