import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartDish = ({ cart, setCart, dish, setTotalCart, totalCart }) => {
  const [count, setCount] = useState(dish.total);
  const [total, setTotal] = useState(dish.price * dish.total);

  var countTotal = 0;
  let navigate = useNavigate();

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    if (count >= 2) setCount(count - 1);
  };

  //delete dish from the cart
  const deleteHandle = () => {
    let sessionCart = JSON.parse(sessionStorage.getItem("cart"));
    let remainder = sessionCart.filter((d) => {
      if (d.id !== dish.id) {
        return d;
      } else {
        setTotalCart(totalCart - d.total * d.price);
      }
    });
    console.log(remainder);
    if (remainder.length === 0) {
      navigate("/empty");
    }
    sessionStorage.setItem("cart", JSON.stringify(remainder));
    setCart(remainder);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //get the total cart
  useEffect(() => {
    let updateCart = JSON.parse(sessionStorage.getItem("cart"));
    let sum = updateCart.reduce(
      (countTotal, item) => countTotal + item.total * item.price,
      0
    );
    setTotalCart(sum);
  }, [cart]);

  //update single cart's item  total
  useEffect(() => {
    setTotal(count * dish.price);
    updateTotal();
  }, [count]);

  const updateTotal = () => {
    let updateCart = JSON.parse(sessionStorage.getItem("cart"));
    updateCart = updateCart.map((el) =>
      el.id == dish.id ? { ...el, total: count } : el
    );
    setCart(updateCart);
    sessionStorage.setItem("cart", JSON.stringify(updateCart));
    let sum = updateCart.reduce(
      (countTotal, item) => countTotal + item.total * item.price,
      0
    );
    setTotalCart(sum);
  };

  return (
    
    <tr>
      <td data-label="Dish">
        <img width="100px" className="dish-image" src={dish.img} alt="" />
      </td>
      <td data-label="Dish Name">{dish.name}</td>
      <td data-label="Price"> {dish.price} JD</td>
      <td data-label="Quantity" className="quantity">
        <div className="quantity-td">
          <button className="btn-minus" type="button" onClick={decrementCount}>
            &#9866;
          </button>

          <input
            type="text"
            className="quantity-input"
            value={count}
            placeholder=""
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
            readOnly
          />

          <button className="btn-plus" type="button" onClick={incrementCount}>
            &#10011;
          </button>
        </div>
      </td>
      <td data-label="Price">{total} JD</td>
      <td data-label="Delete Dish">
        <button className="delete-btn" onClick={deleteHandle}>
          &#10008;
        </button>
      </td>
    </tr>
  );
};

export default CartDish;
