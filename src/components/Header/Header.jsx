import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

export const Header = ({ LoggedIn, setLoggedIn, counter, setCounter }) => {
  let navigate = useNavigate();

  const u = () => {
    if (sessionStorage.getItem("cart") === null) {
      navigate("/empty");
    } else if (JSON.parse(sessionStorage.getItem("cart")).length === 0) {
      navigate("/empty");
    } else {
      navigate("/cart");
    }
  };
 

  const logoutHandler = () => {
    setLoggedIn(false);
    sessionStorage.clear();
    navigate(-1);
  };
  return (
    <div>
      <div id="site-header">
        <header id="header" className="header-block-top">
          <div className="container">
            <div className="row">
              <div className="main-menu">
                <nav className="navbar navbar-default" id="mainNav">
                  <div className="navbar-header">
                    <button
                      type="button"
                      className="navbar-toggle collapsed"
                      data-toggle="collapse"
                      data-target="#navbar"
                      aria-expanded="false"
                      aria-controls="navbar"
                    >
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    <div className="logo">
                      <a
                        className="navbar-brand js-scroll-trigger logo-header"
                        href="#h"
                      >
                        <img
                          src="images/logo.png"
                          alt=""
                          style={{ width: "100%" }}
                        />
                      </a>
                    </div>
                  </div>
                  <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="menu">Menu</Link>
                      </li>
                      <li>
                        <Link to="booking">Reservation</Link>
                      </li>
                      <li>
                        <Link to="about">About us</Link>
                      </li>
                      <li>
                        {LoggedIn === true ? (
                          <a onClick={logoutHandler}>Logout</a>
                        ) : (
                          <Link to="login">Login</Link>
                        )}
                      </li>
                      {LoggedIn === true ? (
                            <li>
                            <Link to="profile"><i className="fa-solid fa-user"></i></Link>
                          </li>

                      ) : (
                        <li>
                          <Link to="register">Register</Link>
                        </li>
                      )}
                      <li className="">
                        <a>
                          <i
                            onClick={u}
                            className="fa fa-shopping-basket relative header-cart"
                            aria-hidden="true"
                            style={{ fontSize: "20px" }}
                          >
                            { JSON.parse(sessionStorage.getItem("cart")) &&
                            JSON.parse(sessionStorage.getItem("cart")).length >
                              0 ? (
                              <span className="cart-counter absolute top-[-11px] right-0 z-10 text-[10px]">
                                {
                                  JSON.parse(sessionStorage.getItem("cart"))
                                    .length
                                }
                              </span>
                            ) : (
                              ""
                            )}
                          </i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
