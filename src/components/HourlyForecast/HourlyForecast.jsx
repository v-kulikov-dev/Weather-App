import { useCallback } from 'react';
import { withRouter } from 'react-router';

import HourItem from '../HourItem';

import './styles.scss';

const HourlyForecast = ({ history, weather }) => {
  const goToDaily = useCallback(() => {
    history.push('/daily');
  }, [history]);

  const goToPollution = useCallback(() => {
    history.push('/air-pollution');
  }, [history]);

  return (
    <>
      <div className="sul-box-inset-1">
        <div className="forecast-container">
          {weather.slice(1, 4).map((hour) => {
            return (
              <div key={hour.dt} className="hour-item-wrapper">
                <HourItem hour={hour} />
              </div>
            );
          })}
        </div>
        <button className="sul-btn forecast" onClick={goToDaily}>
          See 48 hour forecast
        </button>
      </div>
      <div className="button-wrapper">
        <button className="sul-btn" onClick={goToPollution}>
          See Air Pollution For Now
        </button>
      </div>
    </>
  );
};

export default withRouter(HourlyForecast);
