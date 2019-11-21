import React from "react";
import { Link } from "react-router-dom";

function Item({ id, image, name, cost, costValue }) {
  // console.log(id);
  return (
    <Link to={`/product/${id}`} className="item" >
        <img className="item-img" src={image} alt={name} />
        <div className="item-text">
          <h3 className="item-header">{name}</h3>
          <div>{costValue}</div>
          <div className="display4 item-price">{cost}</div>
        </div>
     </Link>
  );
}
export default Item;
