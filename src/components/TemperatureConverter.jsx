import React from "react";
import "./css/TemperatureConverter.css";
import { useState } from "react";

const format = number => {
  // show up to only 4 decimal places
  return /\.\d{5}/.test(number) ? Number(number).toFixed(4) : number;
};

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const convert = (value, setTarget, calcValue) => {
    // convert string value to number & validate input
    const numericalVal = Number(value);
    const isValid = !Number.isNaN(numericalVal) && Boolean(value);

    // if value is valid , update state using formatted value : reset to ""
    setTarget(isValid ? format(calcValue(numericalVal)) : "");
  };

  return (
    <div className="temp-converter">
      <label className="temp-converter-column" htmlFor="celsius">
        <input
          className="temp-converter-row"
          type="number"
          id="celsius"
          value={celsius}
          onChange={e => {
            const newVal = e.target.value;
            setCelsius(newVal);
            convert(newVal, setFahrenheit, value => (value * 9) / 5 + 32);
          }}
        />
        <div className="temp-converter-column-bottom-row">Celsuis</div>
      </label>

      <div className="temp-converter-column">
        <div className="temp-converter-column-top-row">=</div>
      </div>

      <label className="temp-converter-column" htmlFor="fahrenheit">
        <input
          className="temp-converter-row"
          type="number"
          id="fahrenheit"
          value={fahrenheit}
          onChange={e => {
            const newVal = e.target.value;
            setFahrenheit(newVal);
            convert(newVal, setCelsius, value => ((value - 32) * 5) / 9);
          }}
        />
        <div className="temp-converter-column-bottom-row">Fahrenheit</div>
      </label>
    </div>
  );
};

export default TemperatureConverter;
