import React from "react";
import "./style.css";
import { motion } from "framer-motion";

const Card = ({ item, setItem, counter, setCounter}) => {
 
  const addToCartHandler = (dish) => {
    if (sessionStorage.getItem("cart") == null) {
      sessionStorage.setItem("cart", JSON.stringify([dish]));
    } else {
      let cart = JSON.parse(sessionStorage.getItem("cart"));
      let exist = cart.filter((meal) => {
        if (meal.id == dish.id) return meal;
      });

      if (exist.length !== 0) {
        let c = cart.map((meal) => {
          if (meal.id == dish.id) {
            meal.total = meal.total + 1;
          }
        });
        sessionStorage.setItem("cart", JSON.stringify(cart));
      } else {
        cart = [...cart, dish];
        sessionStorage.setItem("cart", JSON.stringify(cart));
      }

    }
    setCounter(JSON.parse(sessionStorage.getItem("cart")).length);
  };

  return (
    <>
      <div className="container2 ">
        <div className="menu">
          <h2 className="menu-group-heading"></h2>
          <div className="menu-group">
            {item.map((Val) => {
              return (
                <motion.div
                  layout
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  className="menu-item"
                  key={Val.id}
                >
                  <img
                    className="menu-item-image"
                    src={Val.img}
                    alt="Bruschetta"
                  />

                  <div className="menu-item-text">
                    <h3 className="menu-item-heading">
                      <span className="menu-item-name"> {Val.name}</span>
                      <span className="menu-item-price">
                        <a onClick={() => addToCartHandler(Val)}>
                          {Val.price} JD
                          <i
                            className="fa fa-shopping-basket"
                            aria-hidden="true"
                            style={{ marginLeft: "10px" }}
                          ></i>
                        </a>
                      </span>
                    </h3>
                    <p className="menu-item-description">{Val.description}</p>
                    <hr />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
