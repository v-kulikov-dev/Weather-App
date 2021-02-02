import moment from 'moment';

import { getBackgroundImage } from '../../helpers/getBackgroundImage';
import { getImages } from '../services';

import './styles.scss';

const HourlyDashboardItem = ({ hourWeather }) => {
  return (
    <div
      className="sul-box-raised-2 hour-wrapper"
      style={{ backgroundImage: `url(${getBackgroundImage(hourWeather)})` }}
    >
      <img src={getImages(hourWeather.weather[0].icon)} alt="weather-logo" />
      <div className="main">{hourWeather.weather[0].main}</div>
      <div className="temperature-dashboard">
        {Math.round(hourWeather.temp)}°C
      </div>
      <div className="date">
        {moment(hourWeather.dt * 1000).format('hh:mma dddd')}
      </div>
    </div>
  );
};

export default HourlyDashboardItem;
