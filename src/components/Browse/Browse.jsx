import React, { useContext, useState } from "react";
import "./browse.css";
import "./filter-overlay.css";
import Item from "./Item";
import Filter from "./Filter";
import { ProductsContext } from "./ProductsContext";

function Browse() {
  const [height, setHeight] = useState(0);
  const {products} = useContext(ProductsContext);
  return (
    <div>
      <div className="filters-overlay-button">
        <button onClick={() => setHeight(100)}>Filters</button>
      </div>
      <section id="browse">
        <div id="filter-wrapper">
          <div
            style={{ height: height + "%" }}
            id="filter-overlay"
            className="overlay"
          >
            <div className="overlay-content">
              <div className="overlay-filters">
                <div className="ofilter-header">
                  <h2>Filters</h2>
                  <a className="closebtn" onClick={() => setHeight(0)}>
                    ×
                  </a>
                </div>
                <Filter></Filter>
              </div>
            </div>
          </div>
        </div>
        <div className="filters">
          <h2>Filters</h2>
          <Filter></Filter>
        </div>
        <div className="showcase">
          <div className="header">
            <h2>Browse Sneakers</h2>
            <div>{products.length} Results</div>
          </div>
          <div className="items">
            {products.map(sneaker => {
              return <Item key={sneaker.image} {...sneaker} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Browse;
