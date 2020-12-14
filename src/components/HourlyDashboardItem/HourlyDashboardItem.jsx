import "./styles.css";
import moment from "moment";
import keys from "../../helpers/keys";

const HourlyDashboardItem = ({ hourWeather }) => {
  const image = `${keys.IMAGES_URL}${hourWeather.weather[0].icon}@2x.png`;

  return (
    <div className="sul-box-raised-2 hour-wrapper">
      <img src={image} alt="weather-logo" />
      <div className="main">{hourWeather.weather[0].main}</div>
      <div className="temperature-dashboard">
        {Math.round(hourWeather.temp)}°C
      </div>
      <div className="date">
        {moment(hourWeather.dt * 1000).format("hh:mma dddd")}
      </div>
    </div>
  );
};

export default HourlyDashboardItem;
