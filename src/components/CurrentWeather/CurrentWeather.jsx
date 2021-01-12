import { useEffect, useState } from 'react';
import moment from 'moment';

import './styles.scss';

const CurrentWeather = ({
  weather,
  info,
  currentSlide,
  currentDay,
  onClick,
}) => {
  const [temperature, setTemperature] = useState('');
  const [description, setDescription] = useState([]);

  const currentMainWeather = () => {
    const mainWeather = weather.weather[0].main;
    switch (mainWeather) {
      case 'Snow':
        return 'red';
      case 'Rain':
        return 'green';
      case 'Clear':
        return 'gray';
      case 'Thunderstorm':
        return 'gray';
      case 'Drizzle':
        return 'gray';
      case 'Clouds':
        return 'gray';
      default:
        return 'transparent';
    }
  };

  useEffect(() => {
    setTemperature(
      Math.round(currentSlide === 0 ? currentDay.temp : weather.temp.day),
    );

    setDescription(
      currentSlide === 0
        ? currentDay.weather[0].description
        : weather.weather[0].description,
    );
  }, [
    currentSlide,
    currentDay.weather,
    weather.temp.day,
    currentDay.temp,
    weather.weather,
  ]);

  return (
    <div key={weather.dt}>
      <div
        className="sul-box-raised-3 location-container"
        style={{ backgroundColor: currentMainWeather() }}
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
