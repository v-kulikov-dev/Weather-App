import { useState, useEffect } from "react";
import HourItem from "../HourItem";

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
  }, [coord, api]);

  return (
    <div className="forecast-container sul-box-inset-1">
      {hourlyWeather.map((hour) => {
        return <HourItem hour={hour} api={api} />;
      })}
    </div>
  );
};

export default HourlyForecast;
