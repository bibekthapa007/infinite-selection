import React, { useEffect, useState } from "react";
import "./browse.css";
import "./filter-overlay.css";
import data from "../data.json";
import Item from "./Item";

function Browse() {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    console.log(data);
  }, []);
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
                <FilterContent></FilterContent>
              </div>
            </div>
          </div>
        </div>
        <div className="filters">
          <h2>Filters</h2>
          <FilterContent></FilterContent>
        </div>
        <div className="showcase">
          <div className="header">
            <h2>Browse Sneakers</h2>
            <div>63 Results</div>
          </div>
          <div className="items">
            {data.sneakers.map(sneaker => {
              return <Item key={sneaker.image} {...sneaker} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Browse;


function FilterContent() {
  return (
    <div className="filter-content">
      <h3>Brands</h3>
      <div className="brands">
        <button>Adidas</button>
        <button>Jordan</button>
      </div>
      <h3>Men's size</h3>
      <div className="size">
        <button>10</button>
        <button>11</button>
        <button>12</button>
        <button>8</button>
        <button>9</button>
      </div>
      <button className="apply">Apply</button>
    </div>
  );
}
