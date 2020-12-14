import { useState } from "react";
import "./styles.scss";

const SearchField = ({ handleChange }) => {
  const [query, setQuery] = useState("");

  const search = (e) => {
    if (e.key === "Enter") {
      handleChange(query);
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
      <button className="sul-btn" onClick={() => handleChange(query)}>
        search
      </button>
    </div>
  );
};

export default SearchField;
