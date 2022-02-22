import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import CartDish from "./CartDish";

const Cart = ({ cart, setCart, setEmptyCart, emptyCart }) => {
  const [totalCart, setTotalCart] = useState(0);
  const [radio, setRadio] = useState("book");
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("cart") !== null) {
      var sessionCart = JSON.parse(sessionStorage.getItem("cart"));
      setCart(sessionCart);
    } else {
      navigate("/empty");
    }
  }, [setCart, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const takeAway = () => {
    let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    if (currentUser !== null) {
      let users = JSON.parse(localStorage.getItem("users"));
      let cart = JSON.parse(sessionStorage.getItem("cart"));
      console.log(currentUser);
      users.map((user) => {
        if (user.email == currentUser.email) {
          if (!user.takeAway) {
            user.takeAway = [{ ...cart }];
          } else {
            user.takeAway = [...user.takeAway, { ...cart }];
          }
        }
      });
      localStorage.setItem("users", JSON.stringify(users));
      navigate("/success");
    } else {
      navigate("/login");
    }
  };

  return (
    <React.Fragment>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Dish Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total price</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((dish) => (
              <CartDish
                cart={cart}
                key={dish.id}
                setCart={setCart}
                dish={dish}
                dishId={dish.id}
                totalCart={totalCart}
                setTotalCart={setTotalCart}
              />
            ))}
          </tbody>
        </table>
        <div className="check-out">
          <h1>
            {" "}
            <strong>Order Summary</strong>{" "}
          </h1>
          <div className="total-cart">
            <strong>Total Cart</strong>
            <strong>{totalCart} JD</strong>
          </div>
          <div className="book-option">
            <div>
              <input
                type="radio"
                id="book"
                name="book"
                value="book"
                checked={radio === "book"}
                onChange={(e) => setRadio(e.target.value)}
              />
              <label htmlFor="book">BooK Table</label>
            </div>
            <div>
              <input
                type="radio"
                id="take"
                name="book"
                value="take"
                checked={radio === "take"}
                onChange={(e) => setRadio(e.target.value)}
              />
              <label htmlFor="take">Take Away</label>
            </div>
          </div>
          {radio === "take" ? (
            <button onClick={takeAway}> Book Now </button>
          ) : (
            <button onClick={() => navigate("/booking")}> Book table </button>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cart;
