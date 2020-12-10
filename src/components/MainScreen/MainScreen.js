import { useState } from "react";
import HourlyForecast from "../HourlyForecast";
import CurrentWeather from "../CurrentWeather";
import AdditionallyDashboard from "../AdditionallyDashboard";
import keys from "../../helpers/keys";

const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
  image: keys.IMAGES_URL,
};

const MainScreen = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const handleChange = () => {
    if (query.trim()) {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          setWeather(result);
        });
    }
  };

  const changeMode = (e) => {
    if (!e.target.checked) {
      document.body.classList.replace("light-mode", "dark-mode");
    } else {
      document.body.classList.replace("dark-mode", "light-mode");
    }
  };

  const search = (e) => {
    if (e.key === "Enter") {
      handleChange();
    }
  };

  return (
    <div className="app-container">
      <header className="sul-box-raised-2">
        <h1 className="title">Weather App.</h1>
        <input
          type="checkbox"
          className="sul-checkbox-type-2"
          onClick={(e) => changeMode(e)}
        />
      </header>
      <main>
        <div className="search-container sul-box-raised-3">
          <input
            type="text"
            placeholder="Search..."
            className="sul-text-field"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
          <button className="sul-btn" onClick={handleChange}>
            search
          </button>
        </div>
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
