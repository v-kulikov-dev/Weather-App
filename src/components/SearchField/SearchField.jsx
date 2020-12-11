import { useState } from "react";

const SearchField = ({ setWeather, api, setErrors }) => {
  const [query, setQuery] = useState("");

  const handleChange = () => {
    if (query.trim()) {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          if (result.cod === "404") {
            setErrors(result.message);
            setWeather({});
          } else {
            setQuery("");
            setErrors("");
            const coord = result.coord;
            const info = { name: result.name, country: result.sys.country };

            fetch(
              `${api.base}onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=minutely&units=metric&APPID=${api.key}`
            )
              .then((res) => res.json())
              .then((result) => {
                setWeather({
                  hourly: result.hourly.slice(1, 4),
                  daily: result.daily,
                  info,
                });
              });
          }
        });
    }
  };

  const search = (e) => {
    if (e.key === "Enter") {
      handleChange();
    }
  };

  return (
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
  );
};

export default SearchField;
