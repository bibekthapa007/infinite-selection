import { connectSearchBox } from "react-instantsearch-dom";
import React from "react";

const SearchBox = ({ currentRefinement, refine }) => {
  return (
    <input
      className="full-search"
      type="search"
      placeholder="Air Jordan"
      value={currentRefinement}
      onChange={event => refine(event.currentTarget.value)}
    />
  );
};

export default connectSearchBox(SearchBox);
