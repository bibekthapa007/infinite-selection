import React, { useState, useEffect } from "react";
// import { default as data } from "./final.json";
import Firebase from "../Firebase";

export const ProductsContext = React.createContext();

var data;

const ProductsContextProvider = props => {
  const [products, setProducts] = useState(null);
  const [size, setSize] = useState(null);
  const [brand, setBrand] = useState(null);
  const [apply, setApply] = useState(0);
  const [loading, setLoading] = useState(1);

  useEffect(() => {
    async function fetchData() {
      var colRef = Firebase.firestore().collection("products");
      if (brand) {
        colRef = colRef.where("brand", "==", brand);
      }
      if (size) {
        colRef = colRef.where("size", "array-contains", size);
      }
      return await colRef
        .get()
        .then(querySnapshot => {
          data = querySnapshot.docs.map(doc => doc.data());
          // console.log(data);
          setProducts(data);
          setLoading(1);
        })
        .catch(e => console.log(e));
    }
    fetchData();
  }, [apply]);

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
    setLoading(0);
    setApply(1 + apply);
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
        applyFilter, 
        loading
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
