import { useState, useEffect } from "react";
import moment from "moment";
import { getImages } from "../services";
import "./styles.scss";

const HourItem = ({ hour }) => {
  const [time, setTime] = useState("");
  useEffect(() => {
    setTime(moment(hour.dt * 1000).format("hh a"));
  }, [hour]);

  return (
    <div className="forecast-item sul-box-raised-1 with-hover">
      <div>{time}</div>
      <div className="item-temperature">{Math.round(hour.temp)}°C</div>
      <div className="weather-logo">
        <img src={getImages(hour.weather[0].icon)} alt="weather-logo" />
      </div>
      <div>{hour.weather[0].main}</div>
    </div>
  );
};

export default HourItem;
