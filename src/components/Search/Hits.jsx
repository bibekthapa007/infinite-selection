import { connectHits } from "react-instantsearch-dom";
import React from "react";
import { Link } from "react-router-dom";
import { Highlight } from "react-instantsearch-dom";

const Hits = ({ hits }) => (
  <div className="search-items">
    
    {hits.map(hit => {
      console.log(hits)
      const { objectID, image, cost, costValue, name } = hit;
      return (
        <Link
          key={objectID}
          to={`/product/${objectID}`}
          className="search-item item"
        >
          <img className="item-img" src={image} alt={name} />
          <div className="item-text">
            <h3 className="item-header">
              <Highlight attribute="name" hit={hit} />
            </h3>
            <div>{costValue}</div>
            <div className="display4 item-price">{cost}</div>
          </div>
        </Link>
      );
    })}
  </div>
);

export default connectHits(Hits);
