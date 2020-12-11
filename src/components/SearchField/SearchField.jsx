import { useState } from "react";

const SearchField = ({ setWeather, api }) => {
  const [query, setQuery] = useState("");

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
