import { UTCToTime } from "../../helpers/datePicker";
import "./styles.css";

const AdditionallyDashboard = ({ weather }) => {
  return (
    <div className="sul-box-raised-3">
      <div
        className="additionally-wrapper"
        style={{ borderBottom: "3px #c4c4c4 solid" }}
      >
        <div>
          <p className="additionally-mark">{UTCToTime(weather.sys.sunrise)}</p>
          <p className="additionally-key">sunrise</p>
        </div>
        <div>
          <p className="additionally-mark">{UTCToTime(weather.sys.sunset)}</p>
          <p className="additionally-key">sunset</p>
        </div>
        <div>
          <p className="additionally-mark">{weather.main.pressure}hPa</p>
          <p className="additionally-key">pressure</p>
        </div>
      </div>
      <div className="additionally-wrapper">
        <div>
          <p className="additionally-mark">{weather.main.humidity}%</p>
          <p className="additionally-key">humidity</p>
        </div>
        <div>
          <p className="additionally-mark">{weather.clouds.all}%</p>
          <p className="additionally-key">clouds</p>
        </div>
        <div>
          <p className="additionally-mark">
            {Math.round(weather.main.feels_like)}°C
          </p>
          <p className="additionally-key">feels like</p>
        </div>
      </div>
    </div>
  );
};

export default AdditionallyDashboard;
