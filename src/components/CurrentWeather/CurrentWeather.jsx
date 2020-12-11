import moment from "moment";
import "./styles.css";

const CurrentWeather = ({
  weather,
  info,
  currentSlide,
  currentDay,
  onClick,
}) => {
  const temperature = Math.round(
    currentSlide === 0 ? currentDay.temp : weather.temp.day
  );

  const description =
    currentSlide === 0
      ? currentDay.weather[0].description
      : weather.weather[0].description;

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
        {moment(weather.dt * 1000).format("dddd - ll")}
      </div>
    </div>
  );
};

export default CurrentWeather;
