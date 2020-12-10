import { useState, useEffect } from "react";
import moment from "moment";

const HourlyForecast = ({ coord, api }) => {
  const [hourlyWeather, setHourlyWeather] = useState([]);

  useEffect(() => {
    fetch(
      `${api.base}onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=minutely,daily&units=metric&APPID=${api.key}`
    )
      .then((res) => res.json())
      .then((result) => {
        setHourlyWeather(result.hourly.slice(1, 4));
      });
  }, [coord]);

  return (
    <div className="forecast-container sul-box-inset-1">
      {hourlyWeather.map((hour) => {
        const time = moment(hour.dt * 1000).format("hh a");
        const image = `${api.image}${hour.weather[0].icon}@2x.png`;
        return (
          <div
            className="forecast-item sul-box-raised-1 with-hover"
            key={hour.id}
          >
            <div>{time}</div>
            <div className="item-temperature">{Math.round(hour.temp)}°C</div>
            <div className="weather-logo">
              <img src={image} alt="weather-logo" />
            </div>
            <div>{hour.weather[0].main}</div>
          </div>
        );
      })}
    </div>
  );
};

export default HourlyForecast;
