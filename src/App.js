import React, { useState } from "react";
import keys from "./keys";

const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
};

const dateBuild = () => {
  let date = String(new window.Date());
  date = date.slice(3, 15);
  return date;
};

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const handleChange = () => {
    if (query.trim()) {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          setWeather(result);
          console.log(result);
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
        {typeof weather.main !== "undefined" ? (
          <div className="sul-box-raised-3 container">
            <div className="sul-box-raised-3 location-container">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date"> {dateBuild(new Date())}</div>
              <div className="temperature">
                {Math.round(weather.main.temp)}°C
              </div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </main>
    </div>
  );
};

export default App;
