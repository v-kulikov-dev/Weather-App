import { UTCToTime } from "../../helpers/datePicker";
import "./styles.scss";

const AdditionallyDashboard = ({ weather }) => {
  return (
    <div className="sul-box-raised-3">
      <div className="additionally-wrapper">
        <div className="additionally-items">
          <p className="additionally-mark">{UTCToTime(weather.sunrise)}</p>
          <p className="additionally-key">sunrise</p>
        </div>
        <div className="additionally-items">
          <p className="additionally-mark">{UTCToTime(weather.sunset)}</p>
          <p className="additionally-key">sunset</p>
        </div>
        <div className="additionally-items">
          <p className="additionally-mark">{weather.pressure}hPa</p>
          <p className="additionally-key">pressure</p>
        </div>
      </div>
      <div className="additionally-wrapper">
        <div className="additionally-items">
          <p className="additionally-mark">{weather.humidity}%</p>
          <p className="additionally-key">humidity</p>
        </div>
        <div className="additionally-items">
          <p className="additionally-mark">{weather.clouds}%</p>
          <p className="additionally-key">clouds</p>
        </div>
        <div className="additionally-items">
          <p className="additionally-mark">
            {Math.round(weather.feels_like.day)}°C
          </p>
          <p className="additionally-key">feels like</p>
        </div>
      </div>
    </div>
  );
};

export default AdditionallyDashboard;
