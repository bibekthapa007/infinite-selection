import React from "react";
import "./Landing.css";

function Landing() {
  return (
    <div>
      <section id="hero-home">
        <div className="hero-img">
          <img
            src="https://d2ky5n6hgync6u.cloudfront.net/uploads/0f4996748b24df9d6d8acf2b6b6048b1/product_group/photo/7a15ce9a-f30d-4e00-b166-99b7f0073253/large_18cb1705-7f9a-42fd-9758-9cc3aa8dce47.jpg"
            alt="hero"
          />
        </div>
        <div className="hero-text">
          <h1>Rent Authentic Sneakers</h1>
          <div>Rent Collectable Sneakers From Top Brands</div>
          <div>Like Nike, Air Jordan, Adidas, and More</div>
          <button>Rent Now</button>
        </div>
      </section>
      <section id="releases">
        <div className="header">
          <h2>New Releases</h2>
          <div>View All</div>
        </div>
        <div className="items">
          <div className="item">
            <img
              src="https://d2ky5n6hgync6u.cloudfront.net/uploads/0f4996748b24df9d6d8acf2b6b6048b1/product_group/photo/bfb7240c-36c2-47c0-bf0a-0dfede37234c/large_1e23b276-c835-466e-8555-a482d9f4881f.jpg"
              alt="Jordan 1 Triple Black"
            />
            <div className="item-text">
              <h3 className="item-header">Jordan 1 Triple Black</h3>
              <div>$ 110 Value</div>
              <div className="display4 item-price">$1</div>
            </div>
          </div>
          <div className="item">
            <img
              src="https://d2ky5n6hgync6u.cloudfront.net/uploads/0f4996748b24df9d6d8acf2b6b6048b1/product_group/photo/2dbb06e0-dbbe-48b2-a566-1d09969d6dba/large_d4b68e50-45d9-43d7-988a-400987d592cc.jpg"
              alt="Jordan 14 Reverse Ferrari"
            />
            <div className="item-text">
              <h3 className="item-header">Jordan 1 Triple Black</h3>
              <div>$ 110 Value</div>
              <div className="display4 item-price">$1</div>
            </div>
          </div>
        </div>
      </section>
      <section id="guarantee">
        <div id="guarantee-header">
          We Feel You, No One Should Ever Spend Money On Fake Sneakers. Or Have
          To Spend Hundreds To Rock The Real Ones.
        </div>
        <button>Authenticity Guarantee</button>
      </section>
      <section id="cleaning">
        <h1>How We Clean</h1>
        <img
          src="https://infiniteselection.com/wp-content/uploads/2019/07/IMG_8779-option-2-min-e1562113703134.jpg"
          alt="washing shoe"
        />
        <div>Learn More</div>
      </section>
      <section id="rent">
        <h1>Same Sneakers, Better Prices</h1>
        <img
          src="https://d2ky5n6hgync6u.cloudfront.net/uploads/0f4996748b24df9d6d8acf2b6b6048b1/product_group/photo/d29b10d1-8983-46e1-b212-cdc4c3de01f7/large_a369b872-98d3-40d9-b9e2-098b9801aa1d.jpg"
          alt="Sneakers"
        />
        <button>Rent Now</button>
      </section>
    </div>
  );
}

export default Landing;
