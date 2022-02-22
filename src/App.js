import React, { useState, useEffect } from "react";
import Cart from "./components/cart/Cart";
import { Routes, Route } from "react-router-dom";
import Booking from "./components/Booking/Booking";
import Register from "./components/Register/Register";
import Login from "./components/login/login";
import Error from "./components/Error404/Error";
import Card from "./Card.js";
import Data from "./Data";
import Buttons from "./Buttons";
import { Header } from "./components/Header/Header.jsx";
import Empty from "./components/Empty Cart/Empty";
import Filter from "./components/filter/Filter";
import ThankYou from "./components/ThankYou/ThankYou";
import About from "./components/about/about";
import Landing from "./components/Landing/Landing";
import Footer from "./components/Footer/Footer";
import { Land } from "./components/Land/land";
import data from "./allTables.json";
import Profile from "./components/UserProfile/Profile";

import "./index.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const [emptyCart, setEmptyCart] = useState(false);
  const [item, setItem] = useState(Data);
  const [LoggedIn, setLoggedIn] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("booking")) {
      localStorage.setItem(
        "booking",
        JSON.stringify({
          date: "2022-02-20T09:00:00.000Z",
          tables: data,
        })
      );
    }
  }, []);

  return (
    <>
      <Header
        emptyCart={emptyCart}
        setEmptyCart={setEmptyCart}
        LoggedIn={LoggedIn}
        setLoggedIn={setLoggedIn}
        counter={counter}
        setCounter={setCounter}
      />
      <Routes>
        <Route path="/" element={<Land />}></Route>
        <Route path="booking" element={<Booking />}></Route>
        <Route path="/success" element={<ThankYou />}></Route>
        <Route
          path="register"
          element={<Register LoggedIn={LoggedIn} setLoggedIn={setLoggedIn} />}
        ></Route>
        <Route
          path="login"
          element={<Login LoggedIn={LoggedIn} setLoggedIn={setLoggedIn} />}
        ></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route
          path="cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              emptyCart={emptyCart}
              setEmptyCart={setEmptyCart}
            />
          }
        ></Route>
        <Route
          path="menu"
          element={
            <Filter
              cart={cart}
              setCart={setCart}
              item={item}
              setItem={setItem}
              counter={counter}
              setCounter={setCounter}
            />
          }
        ></Route>
        <Route path="empty" element={<Empty />}></Route>
        <Route path="/logout" element={<Landing />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
