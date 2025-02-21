import React, {useState, useEffect, useContext} from "react";
import _ from 'underscore'

const SearchBar = ({UpdateQlist, qList, baseList, updateHighlightedWords}) => {
  const [input, setInput] = useState('search for questions');
  const handleChange = (e) =>{
    if (e.target.value.length > 2) {
      UpdateQlist(_.filter(baseList, (listItem) =>{
        if (listItem.question_body.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1) {
          updateHighlightedWords(e.target.value);
          return listItem;
        }
      }))
    } else {
      UpdateQlist(baseList);
      updateHighlightedWords('');
    }
  }

  return (
    <div className="a_search__container">
      <div className="search">
        <input
          type="search"
          className="a_search__input"
          id="search"
          placeholder="search for questions"
          name="s"
          onChange={e => handleChange(e)}
        />
      </div>
    </div>
  );
};

export default SearchBar;