import { useEffect, useState } from 'react';
import moment from 'moment';

import { getBackgroundImage } from '../../helpers/getBackgroundImage';

import './styles.scss';

const CurrentWeather = ({ weather, info, currentSlide, onClick }) => {
  const [temperature, setTemperature] = useState('');
  const [description, setDescription] = useState([]);

  useEffect(() => {
    setTemperature(Math.round(weather.temp.day));
    setDescription(weather.weather[0].description);
  }, [weather.temp.day, weather.weather]);

  return (
    <div key={weather.dt}>
      <div
        className="sul-box-raised-3 location-container"
        style={{
          backgroundImage: `url(${getBackgroundImage(weather)})`,
        }}
      >
        <div className="location" onClick={onClick}>
          {info.name}, {info.country}
        </div>
        <div className="temperature">{temperature}°C</div>
        <div className="weather">{description}</div>
      </div>
      <div className="current-date">
        {currentSlide === 0 && 'Now: '}
        {moment(weather.dt * 1000).format('dddd - ll')}
      </div>
    </div>
  );
};

export default CurrentWeather;
