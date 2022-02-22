import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./login.css";

const Login = ({ LoggedIn, setLoggedIn }) => {
  const [errors, setErrors] = useState([]);
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const setValue = (e) => {
    setErrors([]);
    const name = e.target.name;
    setUser({
      ...user,
      [name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    //sessionStorage.clear();
    e.preventDefault();
    let isValid = true;
    let errors = {};
    let emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (user.password === "") {
      errors["password"] = "This field is required!";
      isValid = false;
    }

    //Email Validation
    if (user.email === "") {
      errors["email"] = "This field is required!";
      isValid = false;
    } else if (!emailRegex.test(user.email)) {
      errors["email"] = "It is not valid email";
      isValid = false;
    } else if (JSON.parse(localStorage.getItem("users")) !== null) {
      var users = JSON.parse(localStorage.getItem("users"));
      var u = users.filter((u) => {
        if (u.email === user.email) return true;
      });
      if (u.length === 0) {
        errors["email"] = "You have to register first :) ";
        isValid = false;
      } else if (u[0].password !== user.password) {
        errors["password"] = "Wrong password  :( ";
        isValid = false;
      } else {
        setErrors([]);
        sessionStorage.setItem("currentUser", JSON.stringify(u));
        setLoggedIn(true);
        setUser({
          name: "",
          email: "",
          password: "",
        });
        navigate(-1);
      }
    }
    setErrors(errors);
  };

  return (
    <React.Fragment>
      <main className="login-wrapper">
        <h1 id="heading1">Login</h1>
        <img
          className="login-image"
          src="user.png"
          alt="Login Logo"
          className="imgLogin"
        />

        <div className="formcontainer">
          <form className="myForm" onSubmit={submitHandler}>
            <div className="input-container">
              <i className="fa fa-envelope icon"></i>
              <input
                className="input-field"
                placeholder="User Email"
                type="email"
                name="email"
                value={user.email}
                onChange={setValue}
              />
            </div>
            <span>{errors.email}</span>
            <div className="input-container">
              <i className="fa fa-key icon"></i>
              <input
                className="input-field"
                placeholder="User Password"
                type="password"
                name="password"
                value={user.password}
                onChange={setValue}
                autoComplete="on"
              />
            </div>
            <span>{errors.password}</span>
            <button className="bttn" type="submit">
              Login
            </button>
          </form>
        </div>
      </main>
    </React.Fragment>
  );
};
export default Login;
