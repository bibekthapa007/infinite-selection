import React, { useState, useEffect } from "react";
import Firebase from "../Firebase";

export const ProductsContext = React.createContext();

var data;

const ProductsContextProvider = props => {
  const [products, setProducts] = useState(null);
  const [size, setSize] = useState(null);
  const [brand, setBrand] = useState(null);
  const [apply, setApply] = useState(0);
  const [loading, setLoading] = useState(1);
  let productsRef = Firebase.firestore().collection("products");

  useEffect(() => {
    async function fetchData() {
      if (brand) {
        productsRef = productsRef.where("brand", "==", brand);
      }
      if (size) {
        productsRef = productsRef.where("size", "array-contains", size);
      }
      return await productsRef
        .get()
        .then(querySnapshot => {
          data = querySnapshot.docs.map(doc => {
            var d = doc.data();
            d.id = doc.id;
            // console.log(d,doc.id)
            return d;
          });
          console.log(data);
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
