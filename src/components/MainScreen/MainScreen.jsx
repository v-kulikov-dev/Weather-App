import { useCallback, useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import { withRouter } from 'react-router';

import { responsiveConfig } from '../../helpers/carouselConfig';
import AdditionallyDashboard from '../AdditionallyDashboard';
import AlertsDashboard from '../AlertsDashboard';
import CurrentWeather from '../CurrentWeather';
import Header from '../Header';
import HourlyForecast from '../HourlyForecast';
import SearchField from '../SearchField';
import { getAllWeatherData, getCurrentWeatherData } from '../services';

import 'react-multi-carousel/lib/styles.css';
import './styles.scss';

const MainScreen = ({ weather, setWeather, userLocation }) => {
  const [errors, setErrors] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleChange = useCallback(
    (query) => {
      if (query) {
        getCurrentWeatherData(query).then((result) => {
          if (result.cod === '404') {
            setErrors(result.message);
            setWeather({});
          } else {
            setErrors('');
            const coord = result.coord;
            const info = { name: result.name, country: result.sys.country };

            getAllWeatherData(coord).then((result) => {
              setWeather({ ...result, info });
            });
          }
        });
      }
    },
    [setWeather],
  );

  useEffect(() => {
    if (userLocation.lat && userLocation.lon) {
      handleChange(userLocation);
    }
  }, [handleChange, userLocation]);

  return (
    <>
      <Header />
      <main>
        <SearchField handleChange={handleChange} />
        {weather.daily && weather.daily.length && (
          <div className="sul-box-raised-3 container">
            <Carousel
              additionalTransfrom={0}
              arrows
              centerMode={false}
              containerClass="container-with-dots"
              afterChange={(previousSlide, _ref) =>
                setCurrentSlide(_ref.currentSlide)
              }
              draggable
              focusOnSelect={false}
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              showDots={false}
              slidesToSlide={1}
              swipeable
              responsive={responsiveConfig}
            >
              {weather.daily.map((day) => {
                return (
                  <CurrentWeather
                    key={day.dt}
                    weather={day}
                    info={weather.info}
                    currentSlide={currentSlide}
                  />
                );
              })}
            </Carousel>
            {weather.alerts && currentSlide === 0 && (
              <AlertsDashboard alerts={weather.alerts} />
            )}
            <HourlyForecast weather={weather.hourly} />
            <AdditionallyDashboard weather={weather.daily[currentSlide]} />
          </div>
        )}
        {errors && <div className="sul-box-raised-1 error">{errors}</div>}
      </main>
    </>
  );
};

export default withRouter(MainScreen);
