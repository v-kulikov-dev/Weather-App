import { useCallback, useEffect, useState } from 'react';
import moment from 'moment';

import Clear from '../../assets/Clear-min.png';
import Clouds from '../../assets/Clouds-min.png';
import Drizzle from '../../assets/Drizzle-min.png';
import Rain from '../../assets/Rain-min.png';
import Snow from '../../assets/Snow-min.png';
import Thunderstorm from '../../assets/Thunderstorm-min.png';

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

  const currentMainWeather = useCallback(() => {
    const mainWeather = weather.weather[0].main;
    switch (mainWeather) {
      case 'Snow':
        return Snow;
      case 'Rain':
        return Rain;
      case 'Clear':
        return Clear;
      case 'Thunderstorm':
        return Thunderstorm;
      case 'Drizzle':
        return Drizzle;
      case 'Clouds':
        return Clouds;
      default:
        return 'transparent';
    }
  }, [weather]);

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
        style={{ backgroundImage: `url(${currentMainWeather()})` }}
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
