import React from "react";
import algoliasearch from "algoliasearch/lite";
import "./Search.css";
import {
  InstantSearch,
  ClearRefinements,
  Configure
} from "react-instantsearch-dom";
import CustomHits from "./Hits";
import CustomSearchBox from "./SearchBox";

const searchClient = algoliasearch(
  "Q170UMK1SN",
  "03271eae173376c194cf5b3e83215a36"
);

function Search() {
  return (
    <div className="search-container">
      <h1>Search</h1>
      <InstantSearch indexName="product-search" searchClient={searchClient}>
        <div className="left-panel">
          <ClearRefinements />
          <h2>Brands</h2>
          {/* <MenuSelect attribute="categories" /> */}
          <Configure hitsPerPage={8} />
        </div>
        <div className="right-panel">
          <CustomSearchBox />
          <div>
            <CustomHits />
          </div>
        </div>
      </InstantSearch>
    </div>
  );
}

export default Search;
