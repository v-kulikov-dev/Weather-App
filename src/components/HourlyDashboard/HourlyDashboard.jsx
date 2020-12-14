import { withRouter } from "react-router";
import HourlyDashboardItem from "../HourlyDashboardItem";
import "./styles.css";

const HourlyDashboard = ({ history, weather }) => {
  if (!weather) {
    history.push("/");
  }

  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <div className="sul-box-raised-3 hourly-dashboard-wrapper">
        <h1>48 Hour Forecast</h1>
        <button className="unit" type="button" onClick={goBack}>
          <i className="icon ion-md-arrow-back"></i>
        </button>
      </div>
      <div className="sul-box-raised-3 hour-list">
        {weather &&
          weather.map((el) => {
            return <HourlyDashboardItem hourWeather={el} />;
          })}
      </div>
    </>
  );
};

export default withRouter(HourlyDashboard);
