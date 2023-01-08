import React, { useState } from "react";
import "./index.css";
import "./App.css";
import axios from "axios";

export default function Weather() {
  const [loading, setLoading] = useState(false);
  const [city, changeCity] = useState("");

  function updateCity(event) {
    changeCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4f6484d9a7c6987f3133d7c6fd4bd3b8`;
    axios.get(url).then(showTemp);
  }
  function showTemp(response) {
    setLoading(true);
    let icon = (
      <img
        alt="weathericon"
        src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
      />
    );

    return (
      <div className="Weather">
        <h1>{city}</h1>
        <h2>
          <span className="actualTemp">
            {Math.round(response.data.main.temp)}
          </span>
          <span className="celsius">°C</span>
        </h2>
        <h3>
          <span class="time"> </span>|
          <span class="description"> {response.data.weather[0].main}</span>
          <div>
            Feels-like temperature °C | Wind speed{" "}
            {Math.round(response.data.wind.speed)}m/s | Humidity{" "}
            {response.data.main.humidity} %
          </div>
        </h3>
        <div>
          <div className="Weather">
            <div className="container">
              <div className="row">
                <div className="offset-sm-1 col-sm-10">
                  <form onSubmit={handleSubmit}>
                    <div class="mb-3 location">
                      <label
                        for="exampleInputEmail1"
                        class="form-label"
                      ></label>
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
}
