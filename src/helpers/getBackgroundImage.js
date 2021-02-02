import Clear from '../assets/Clear-min.png';
import Clouds from '../assets/Clouds-min.png';
import Drizzle from '../assets/Drizzle-min.png';
import Rain from '../assets/Rain-min.png';
import Snow from '../assets/Snow-min.png';
import Thunderstorm from '../assets/Thunderstorm-min.png';

export const getBackgroundImage = (
  weather,
  currentSlide = null,
  currentDay = null,
) => {
  const mainWeather =
    currentSlide === 0 ? currentDay.weather[0].main : weather.weather[0].main;
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
};
