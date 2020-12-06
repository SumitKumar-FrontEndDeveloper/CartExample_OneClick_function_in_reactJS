import React, { useState, useEffect } from "react";
import "./App.css";
import "h8k-components";
import ProductList from "./components/product-list";
import Cart from "./components/cart";

const title = "HackerShop";

const App = () => {
  const [products, setProducts] = useState();
  const [carts, setCarts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const productss = [...PRODUCTS].map((product, index) => {
    product.id = index + 1;
    product.image = `/images/items/${product.name.toLocaleLowerCase()}.png`;
    product.cartQuantity = 0;
    return product;
  });
  useEffect(() => {
    setProducts(productss);
  }, []);

  const addDataInCart = (product, type) => {
    setCarts((cartStates) => {
      let productIndex = alreadyExistValue(products, product.id);
      let index = alreadyExistValue(carts, product.id);
      let currentProduct = cartStates[index];
      let pQuantity = productss[productIndex].quantity;

      setProducts((productsStates) => {
        productsStates[productIndex].quantity =
          type == "add"
            ? pQuantity != 0
              ? productsStates[productIndex].quantity - 1
              : productsStates[productIndex].quantity
            : currentProduct
            ? productsStates[productIndex].quantity + 1
            : productsStates[productIndex].quantity;

        return productsStates;
      });
      console.log(pQuantity);
      if (index >= 0) {
        cartStates[index].cartQuantity =
          type === "add"
            ? pQuantity != 0
              ? cartStates[index].cartQuantity + 1
              : cartStates[index].cartQuantity
            : type == "remove" && cartStates[index].cartQuantity == 1
            ? cartStates.splice(index, 1)
            : cartStates[index].cartQuantity - 1;
      } else {
        const data = {
          ...product,
          cartQuantity: 1,
        };
        if (type === "add") {
          cartStates.push(data);
        }
      }

      setTotalPrice(() => {
        let tPrice = 0;
        for (let val of cartStates) {
          tPrice += val.price * val.cartQuantity;
        }
        return tPrice;
      });

      return [...cartStates];
    });
  };

  const alreadyExistValue = (json, id) => {
    let hasValue = -1;
    json.find(function (value, i) {
      if (value.id === id) {
        hasValue = i;
      }
    });
    return hasValue;
  };

  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row shop-component">
        {products && (
          <ProductList products={products} addToCart={addDataInCart} />
        )}
        <Cart cart={carts} total={totalPrice} />
      </div>
    </div>
  );
};

export const PRODUCTS = [
  {
    name: "Cap",
    price: 5,
    quantity: 58,
  },
  {
    name: "HandBag",
    price: 30,
    quantity: 15,
  },
  {
    name: "Shirt",
    price: 35,
    quantity: 20,
  },
  {
    name: "Shoe",
    price: 50,
    quantity: 2,
  },
  {
    name: "Pant",
    price: 35,
    quantity: 13,
  },
  {
    name: "Slipper",
    price: 25,
    quantity: 19,
  },
];
export default App;
