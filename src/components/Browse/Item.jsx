import React from "react";

function Item({ image, name, cost, costValue }) {
    // console.log(image);
  return (
    <div className="item">
      <img className="item-img" src={image} alt={name} />
      <div className="item-text">
        <h3 className="item-header">{name}</h3>
        <div>{costValue}</div>
        <div className="display4 item-price">{cost}</div>
      </div>
    </div>
  );
}
export default Item;
