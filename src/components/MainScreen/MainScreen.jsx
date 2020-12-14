import { useState, useCallback } from "react";
import { withRouter } from "react-router";
import Carousel from "react-multi-carousel";
import HourlyForecast from "../HourlyForecast";
import CurrentWeather from "../CurrentWeather";
import AdditionallyDashboard from "../AdditionallyDashboard";
import Header from "../Header";
import SearchField from "../SearchField";
import { responsiveConfig } from "../../helpers/carouselConfig";
import "react-multi-carousel/lib/styles.css";
import "./styles.scss";
import { getAllWeatherData, getCurrentWeatherData } from "../services";

const MainScreen = ({ weather, setWeather }) => {
  const [errors, setErrors] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleChange = useCallback((query) => {
    if (query && query.trim()) {
      getCurrentWeatherData(query).then((result) => {
        if (result.cod === "404") {
          setErrors(result.message);
          setWeather({});
        } else {
          setErrors("");
          const coord = result.coord;
          const info = { name: result.name, country: result.sys.country };

          getAllWeatherData(coord).then((result) => {
            setWeather({
              current: result.current,
              hourly: result.hourly,
              daily: result.daily,
              info,
            });
          });
        }
      });
    }
  }, []);

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
                    currentDay={weather.current}
                    currentSlide={currentSlide}
                  />
                );
              })}
            </Carousel>
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
