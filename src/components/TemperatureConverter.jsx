import React from "react";
import "./css/TemperatureConverter.css";
import { useState } from "react";

const TemperatureConverter = () => {
  const [celsiusTemp, setCelsiusTemp] = useState("");
  const [fahrenheitTemp, setFahrenheitTemp] = useState("");

  const convertTemperature = (temperature, toCelsius) => {
    let result;
    if (toCelsius) {
      result = parseFloat(((temperature - 32) / (5 / 9)).toFixed(4));
    } else {
      result = parseFloat((temperature * (9 / 5) + 32).toFixed(4));
    }
    return result;
  };

  const handleCelsiusChange = (event) => {
    const temperatureInput = event.target.value;
    if (temperatureInput === "") {
      setCelsiusTemp("");
      setFahrenheitTemp("");
    } else {
      setCelsiusTemp(temperatureInput);
      setFahrenheitTemp(convertTemperature(temperatureInput, false));
    }
  };

  const handleFahrenheitChange = (event) => {
    const temperatureInput = event.target.value;
    if (temperatureInput === "") {
      setCelsiusTemp("");
      setFahrenheitTemp("");
    } else {
      setFahrenheitTemp(temperatureInput);
      setCelsiusTemp(convertTemperature(temperatureInput, true));
    }
  };

  return (
    <div className="temp-converter-container">
      <div className="celsuis-temp-container">
        <input
          className="temp-input"
          value={celsiusTemp}
          onChange={(event) => handleCelsiusChange(event)}
          type="text"
        />
        <p>Celsius</p>
      </div>
      <span>=</span>
      <div className="fahrenheit-temp-container">
        <input
          className="temp-input"
          value={fahrenheitTemp}
          onChange={(event) => handleFahrenheitChange(event)}
          type="text"
        />
        <p>Fahrenheit</p>
      </div>
    </div>
  );
};

export default TemperatureConverter;
