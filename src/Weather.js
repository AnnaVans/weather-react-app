import React, { useState } from "react";
import "./index.css";
import "./App.css";
import axios from "axios";

export default function Weather() {
  const [city, changeCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [temperature, showTemperature] = useState(null);
  const [wind, showWind] = useState(null);
  const [humidity, showHumidity] = useState(null);
  const [description, showDescription] = useState(null);
  const [feelsLike, showFeelsLike] = useState(null);
  const [icon, showIcon] = useState(null);
  let form = (
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
                    onChange={updateCity}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function showTemp(response) {
    setLoading(true);
    let icon = (
      <img
        alt="weathericon"
        src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
      />
    );
    showTemperature(Math.round(response.data.main.temp));
    showFeelsLike(Math.round(response.data.main.feels_like));
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

  function updateCity(event) {
    changeCity(event.target.value);
  }

  if (loading) {
    return (
      <div className="Weather">
        <h1>{city}</h1>
        <h2>
          <span className="actualTemp">{temperature}</span>
          <span className="celsius">°C</span>
        </h2>
        <h3>
          <span class="time"> </span>|
          <span class="description"> {description}</span>
          <div>
            Feels-like temperature {feelsLike} °C | Wind speed {wind}m/s |
            Humidity {humidity} % | <span className="icon"> {icon} </span>
          </div>
        </h3>
        <div>{form}</div>
      </div>
    );
  } else {
    return (
      <div className="Weather">
        <h1>Bratislava</h1>
        <h2>
          <span className="actualTemp">{temperature}</span>
          <span className="celsius">°C</span>
        </h2>
        <h3>
          <span className="time"> </span>|
          <span className="description"> {description}</span>
          <div>
            Feels-like temperature °C | Wind speed {wind}m/s | Humidity{" "}
            {humidity} % | <span> {icon}</span>
          </div>
        </h3>
        <div>{form}</div>
      </div>
    );
  }
}
