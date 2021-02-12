import { withRouter } from 'react-router';

import BackToSearchButton from '../BackToSearchButton';
import LineChart from '../charts/LineChart';
import HourlyDashboardItem from '../HourlyDashboardItem';

import './styles.scss';

const HourlyDashboard = ({ history, weather }) => {
  if (!weather) {
    history.push('/');
  }

  return (
    <>
      <div className="sul-box-raised-3 hourly-dashboard-wrapper">
        <h1>48 Hour Forecast</h1>
        <BackToSearchButton />
      </div>
      <div className="sul-box-raised-3 hour-list">
        <LineChart weather={weather} />
        {weather &&
          weather.map((el) => {
            return <HourlyDashboardItem hourWeather={el} key={el.dt} />;
          })}
      </div>
    </>
  );
};

export default withRouter(HourlyDashboard);
