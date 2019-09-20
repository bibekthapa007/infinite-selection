import React, { useState } from "react";
import { default as data } from "./final.json";

export const ProductsContext = React.createContext();

const ProductsContextProvider = props => {
  const [products, setProducts] = useState(data);
  const [size, setSize] = useState(0);
  const [brand, setBrand] = useState(0);

  const updateBrand = newBrand => {
    console.log(size, newBrand);
    if (brand !== newBrand) {
      setBrand(newBrand);
    } else {
      setBrand(0);
      newBrand = 0;
    }
  };

  const applyFilter = () => {
    const updatedData = data
      .filter(product =>
        brand ? product.brand === brand : product.brand
      )
      .filter(product => {
        if (size) {
          return product.size.includes(size);
        } else {
          return 1;
        }
      });
    setProducts(updatedData);
  };

  const updateSize = newSize => {
    console.log(newSize, brand);
    if (newSize !== size) {
      setSize(newSize);
    } else {
      setSize(0);
      newSize = 0;
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        size,
        brand,
        updateBrand,
        updateSize,
        applyFilter
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
