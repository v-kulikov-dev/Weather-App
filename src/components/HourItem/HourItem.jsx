import moment from "moment";
import "./styles.css";

const HourItem = ({ hour, api }) => {
  const time = moment(hour.dt * 1000).format("hh a");
  const image = `${api.image}${hour.weather[0].icon}@2x.png`;

  return (
    <div className="forecast-item sul-box-raised-1 with-hover">
      <div>{time}</div>
      <div className="item-temperature">{Math.round(hour.temp)}°C</div>
      <div className="weather-logo">
        <img src={image} alt="weather-logo" />
      </div>
      <div>{hour.weather[0].main}</div>
    </div>
  );
};

export default HourItem;
