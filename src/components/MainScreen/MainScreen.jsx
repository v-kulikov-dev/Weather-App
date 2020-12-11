import { useState } from "react";
import HourlyForecast from "../HourlyForecast";
import CurrentWeather from "../CurrentWeather";
import AdditionallyDashboard from "../AdditionallyDashboard";
import Header from "../Header";
import SearchField from "../SearchField";
import Carousel from "react-multi-carousel";
import keys from "../../helpers/keys";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";

const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
  image: keys.IMAGES_URL,
};

const MainScreen = () => {
  const [weather, setWeather] = useState({});
  const [errors, setErrors] = useState("");

  const responsiveConfig = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="app-container">
      <Header />
      <main>
        <SearchField setWeather={setWeather} api={api} setErrors={setErrors} />
        {weather.daily && weather.daily.length && (
          <div className="sul-box-raised-3 container">
            <Carousel
              additionalTransfrom={0}
              arrows
              centerMode={false}
              className=""
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={false}
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
              responsive={responsiveConfig}
            >
              {weather.daily.map((day, idx) => {
                return <CurrentWeather weather={day} info={weather.info} />;
              })}
            </Carousel>
            <HourlyForecast weather={weather.hourly} api={api} />
            <AdditionallyDashboard weather={weather.daily[0]} />
          </div>
        )}
        {errors && <div className="sul-box-raised-1 error">{errors}</div>}
      </main>
    </div>
  );
};

export default MainScreen;
