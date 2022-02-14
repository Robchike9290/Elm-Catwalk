import React from "react";

const SearchBar = () => {
  return (
    <div>
      <form action="/" method="get">
        <input
          onClick={(e) => {
            return getData();
          }}
          type="text"
          id="header-search"
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS"
          name="s"
        />
      </form>
      <button>Ask a question</button>
    </div>
  );
};

export default SearchBar;
