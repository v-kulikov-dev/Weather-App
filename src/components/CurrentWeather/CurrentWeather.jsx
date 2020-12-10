const CurrentWeather = ({ weather }) => {
  return (
    <div className="sul-box-raised-3 location-container">
      <div className="location">
        {weather.name}, {weather.sys.country}
      </div>
      <div className="temperature">{Math.round(weather.main.temp)}°C</div>
      <div className="weather">{weather.weather[0].description}</div>
    </div>
  );
};

export default CurrentWeather;
