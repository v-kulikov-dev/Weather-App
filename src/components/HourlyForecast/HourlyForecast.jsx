import { useCallback } from 'react';
import { withRouter } from 'react-router';

import HourItem from '../HourItem';

import './styles.scss';

const HourlyForecast = ({ history, weather }) => {
  const handleChange = useCallback(() => {
    history.push('/daily');
  }, [history]);

  return (
    <div>
      <div className="forecast-container sul-box-inset-1">
        {weather.slice(1, 4).map((hour) => {
          return (
            <div key={hour.dt} className="hour-item-wrapper">
              <HourItem hour={hour} />
            </div>
          );
        })}
      </div>
      <div className="button-wrapper">
        <button className="sul-btn" onClick={handleChange}>
          See 48 hour forecast
        </button>
      </div>
    </div>
  );
};

export default withRouter(HourlyForecast);
