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
            setWeather(result);
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
