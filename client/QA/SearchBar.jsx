import React from "react";

const SearchBar = () => {
  return (
    <div>
      <form action="/" method="get">
        <input

          type="text"
          id="header-search"
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS"
          name="s"
        />
      </form>
    </div>
  );
};

export default SearchBar;
