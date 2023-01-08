import React from "react";
import "./index.css";
import "./Weather.css";

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
                <form>
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
        <span class="sourcecode">
          <a href="https://github.com/AnnaVans/first-project">
            Open-source code
          </a>
          by Anna Vans
        </span>
      </div>
    </div>
  );
}
