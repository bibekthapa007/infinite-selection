import React, { useEffect, useState } from "react";
import "./Product.css";
import { default as data } from "../Browse/final.json";

function unslugify(iid) {
  const lid = iid.split("-").join(" ");
  return lid;
}

function Product({ match }) {
  const [product, setProduct] = useState(null);
  const id = match.params.id;
  const [found, setFound] = useState(true);

  useEffect(() => {
    const name = unslugify(id);
    const product = data.filter(p => {
      return p.name.toLowerCase() === name;
    });
    if (product.length === 1) {
      setProduct(product[0]);
    } else {
      setFound(false);
    }
  }, [id]);
  console.log(found);

  return (
    <div className="product-container" >
      {found ? (
        product ? (
          <section className="product">
            <img
              src={product.gif ? product.gif : product.images}
              alt="Sneakers"
            />
            <div className="display1">{product.name}</div>
            <div className="row">
              <h4 className="text1">Condition: {product.condition}</h4>
              <h4 className="text2">${product.costValue} Value</h4>
            </div>
            {product.description ? (
              <div className="col">
                <div className="text2">4 DAYS: ${product.description[0]}</div>
                <div className="text2">8 DAYS: ${product.description[1]}</div>
              </div>
            ) : null}
            <h3>Choose a Way to Rent</h3>
            <button className="rentalBtn">One Time Rental</button>
            {product.info ? (
              <div className="product-info">
                <div className="info-item">
                  <div className="text1">SKU</div>
                  <div className="text2">B75571</div>
                </div>
                <div className="info-item">
                  <div className="text1">COLORWAY</div>
                  <div className="text2">GREY/CHALK WHITE/CORE BLACK</div>
                </div>
                <div className="info-item">
                  <div className="text1">RETAIL PRICE</div>
                  <div className="text2">$300</div>
                </div>
                <div className="info-item">
                  <div className="text1">RELEASE DATE</div>
                  <div className="text2">11/01/2017</div>
                </div>
              </div>
            ) : null}
            <div className="promise">
              <h2>Our Promise</h2>
              <h3>No-stress Insurance</h3>
              <div className="text2">
                The $5 fee covers slips, spills and general clumsiness
              </div>
              <h3>100% Authentic Sneakers</h3>
              <div className="text2">
                We guarantee every pair of sneakers you receive from us are 100%
                authentic or your money back
              </div>
              <h3>Free Returns</h3>
              <div className="text2">
                We provide a prepaid label. Plus the cleaning’s on us
              </div>
            </div>
          </section>
        ) : (
          <div>Loading</div>
        )
      ) : <div>Not Found</div>}
    </div>
  );
}

export default Product;
