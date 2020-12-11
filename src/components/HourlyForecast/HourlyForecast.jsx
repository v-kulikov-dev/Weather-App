import HourItem from "../HourItem";
import "./styles.css";

const HourlyForecast = ({ weather, api }) => {
  return (
    <div className="forecast-container sul-box-inset-1">
      {weather.map((hour) => {
        return (
          <div key={hour.dt} className="hour-item-wrapper">
            <HourItem hour={hour} api={api} />
          </div>
        );
      })}
    </div>
  );
};

export default HourlyForecast;
