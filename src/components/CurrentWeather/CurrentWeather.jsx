import { useState, useEffect } from "react";
import moment from "moment";
import "./styles.scss";

const CurrentWeather = ({
  weather,
  info,
  currentSlide,
  currentDay,
  onClick,
}) => {
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState([]);

  useEffect(() => {
    setTemperature(
      Math.round(currentSlide === 0 ? currentDay.temp : weather.temp.day)
    );

    setDescription(
      currentSlide === 0
        ? currentDay.weather[0].description
        : weather.weather[0].description
    );
  }, [
    currentSlide,
    currentDay.weather,
    weather.temp.day,
    currentDay.temp,
    weather.weather,
  ]);

  return (
    <div key={weather.dt}>
      <div className="sul-box-raised-3 location-container">
        <div className="location" onClick={onClick}>
          {info.name}, {info.country}
        </div>
        <div className="temperature">{temperature}°C</div>
        <div className="weather">{description}</div>
      </div>
      <div className="current-date">
        {currentSlide === 0 && "Now: "}
        {moment(weather.dt * 1000).format("dddd - ll")}
      </div>
    </div>
  );
};

export default CurrentWeather;
