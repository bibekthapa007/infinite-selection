import React, { useState, useEffect } from "react";
import algoliasearch from "algoliasearch/lite";
import "./Search.css";
import {
  InstantSearch,
  ClearRefinements,
  RefinementList,
  Configure
} from "react-instantsearch-dom";
import CustomHits from "./Hits";
import CustomSearchBox from "./SearchBox";

const searchClient = algoliasearch(
  "Q170UMK1SN",
  "03271eae173376c194cf5b3e83215a36"
);

function Search( props ) {
  const { searchid } = props.location.state;
  const [searchState, setSearchState] = useState({ query: searchid ? searchid : "" });
  useEffect(() => {
    console.log(props.location.state);
    console.log(searchid);
    console.log(searchState)
  }, []);

  const handleSearchChange = state => {
    console.log(state)
    setSearchState(state);
  };
  return (
    <div className="search-container">
      <h1>Search</h1>
      <InstantSearch
        indexName="product-search"
        searchClient={searchClient}
        createURL={searchState => `?q=${searchState.query}`}
        searchState={searchState}
        onSearchStateChange={handleSearchChange}
      >
        <div className="left-panel">
          <h2>Brands</h2>
          <RefinementList attribute="brand" />
          <h2>Size</h2>
          <RefinementList attribute="size" />
          <ClearRefinements />
          <Configure hitsPerPage={8} />
        </div>
        <div className="right-panel">
          <CustomSearchBox />
          <CustomHits />
        </div>
      </InstantSearch>
    </div>
  );
}

export default Search;
