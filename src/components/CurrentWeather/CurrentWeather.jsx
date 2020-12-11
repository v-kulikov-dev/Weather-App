import moment from "moment";
import "./styles.css";

const CurrentWeather = ({ weather, info }) => {
  return (
    <div>
      <div className="sul-box-raised-3 location-container">
        <div className="location">
          {info.name}, {info.country}
        </div>
        <div className="temperature">{Math.round(weather.temp.day)}°C</div>
        <div className="weather">{weather.weather[0].description}</div>
      </div>
      <div className="current-date">
        {moment(weather.dt * 1000).format("dddd - ll")}
      </div>
    </div>
  );
};

export default CurrentWeather;
