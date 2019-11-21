import React, { useContext } from "react";
import { ProductsContext } from "../ProductsContext";

function Filter({ close }) {
  const sizeId = [10, 11, 12, 8, 9];
  const {
    updateBrand,
    updateSize,
    applyFilter,
    size,
    brand,
    loading
  } = useContext(ProductsContext);

  return (
    <div className="filter-content">
      <h3>Brands</h3>
      <div className="brands">
        <BrandButton
          updateFilter={() => updateBrand("addidas")}
          brand={brand}
          id="addidas"
        />
        <BrandButton
          updateFilter={() => updateBrand("jordan")}
          brand={brand}
          id="jordan"
        />
      </div>
      <h3>Men's size</h3>
      <div className="size">
        {sizeId.map(id => {
          return (
            <SizeButton
              key={id}
              updateFilter={() => updateSize(id)}
              size={size}
              id={id}
            />
          );
        })}
      </div>
      <button
        onClick={() => {
          applyFilter();
          close();
        }}
      >
        {loading ? "Apply" : "Loading"}
      </button>
    </div>
  );
}

export default Filter;

function BrandButton({ updateFilter, brand, id }) {
  //   console.log(brand, id);
  return (
    <button className={brand === id ? "active" : "not"} onClick={updateFilter}>
      {id}
    </button>
  );
}

function SizeButton({ updateFilter, size, id }) {
  //   console.log(size, id);
  return (
    <button className={size === id ? "active" : "not"} onClick={updateFilter}>
      {id}
    </button>
  );
}
