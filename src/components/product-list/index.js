import React, { Component } from "react";
import "./index.css";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="layout-row wrap justify-content-center flex-70 app-product-list">
      {products.map((product, i) => {
        return (
          <section
            className="w-30"
            data-testid={"product-item-" + i}
            key={product.id}
          >
            <div className="card ma-16">
              <img
                alt="Your Cart"
                src={product.image}
                className="d-inline-block align-top product-image"
              />
              <div className="card-text pa-4">
                <h5 className="ma-0 text-center">{product.name}</h5>
                <p className="ma-0 mt-8 text-center">${product.price}</p>
              </div>
              <div className="card-actions justify-content-center pa-4">
                <button
                  className="x-small outlined"
                  data-testid="btn-item-add"
                  onClick={() => addToCart(product, "add")}
                >
                  Add To Cart
                </button>

                <div className="layout-row justify-content-between align-items-center">
                  <button
                    className="x-small icon-only outlined"
                    data-testid="btn-quantity-subtract"
                    onClick={() => addToCart(product, "remove")}
                  >
                    -
                  </button>

                  <input
                    type="number"
                    disabled
                    className="cart-quantity"
                    data-testid="cart-quantity"
                    value={product.quantity}
                  />

                  <button
                    className="x-small icon-only outlined"
                    data-testid="btn-quantity-add"
                    onClick={() => addToCart(product, "add")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ProductList;
