import { useState } from "react";
import HourlyForecast from "../HourlyForecast";
import CurrentWeather from "../CurrentWeather";
import AdditionallyDashboard from "../AdditionallyDashboard";
import Header from "../Header";
import SearchField from "../SearchField";
import keys from "../../helpers/keys";
import "./styles.css";

const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
  image: keys.IMAGES_URL,
};

const MainScreen = () => {
  const [weather, setWeather] = useState({});

  return (
    <div className="app-container">
      <Header />
      <main>
        <SearchField setWeather={setWeather} api={api} />
        {typeof weather.main !== "undefined" && (
          <div className="sul-box-raised-3 container">
            <CurrentWeather weather={weather} />
            <HourlyForecast coord={weather.coord} api={api} />
            <AdditionallyDashboard weather={weather} />
          </div>
        )}
      </main>
    </div>
  );
};

export default MainScreen;
