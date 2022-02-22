import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./land.css";

import { Pagination, Navigation } from "swiper";

export const Land = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <div id="banner" className="banner full-screen-mode parallax">
          <div className="pr container">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="banner-static">
                <div className="banner-text">
                  <div
                    className="banner-cell"
                    style={{ paddingBottom: "210px" }}
                  >
                    <h1>
                      Dinner with us
                      <span
                        className="typer"
                        id="some-id"
                        data-delay="200"
                        data-delim=":"
                        data-words="Friends:Family:Officemates"
                        data-colors="red"
                      ></span>
                      <span
                        className="cursor"
                        data-cursorDisplay="_"
                        data-owner="some-id"
                      ></span>
                    </h1>
                    <h2>Accidental appearances </h2>
                    <div className="book-btn">
                      <Link
                        to="/booking"
                        className="table-btn hvr-underline-from"
                        style={{ marginLeft: "20px" }}
                      >
                        Book my Table
                      </Link>
                    </div>
                    <a href="#about"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="special-menu pad-top-100 parallax">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div
                  className="wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0.1s"
                >
                  <h2 className="block-title color-white text-center">
                    Today's Special
                  </h2>
                </div>
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  slidesPerGroup={1}
                  loop={true}
                  loopFillGroupWithBlank={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper my-12"
                >
                  <SwiperSlide className="item item-type-zoom">
                    <img src="images/special-menu-1.jpg" alt="sp-menu" />
                  </SwiperSlide>
                  <SwiperSlide className="item item-type-zoom">
                    <img src="images/special-menu-2.jpg" alt="sp-menu" />
                  </SwiperSlide>
                  <SwiperSlide className="item item-type-zoom">
                    <img src="images/special-menu-3.jpg" alt="sp-menu" />
                  </SwiperSlide>
                  <SwiperSlide className="item item-type-zoom">
                    <img src="images/special-menu-2.jpg" alt="sp-menu" />
                  </SwiperSlide>
                  <SwiperSlide className="item item-type-zoom">
                    <img src="images/special-menu-1.jpg" alt="sp-menu" />
                  </SwiperSlide>
                  <SwiperSlide className="item item-type-zoom">
                    <img src="images/special-menu-3.jpg" alt="sp-menu" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="about-main pad-top-100 pad-bottom-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div
                className="wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
              >
                <h2 className="block-title"> About Us </h2>
                <h3>IT STARTED, QUITE SIMPLY, LIKE THIS...</h3>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusm incididunt ut labore et dolore magna aliqua. Ut enim
                  ad minim venia, nostrud exercitation ullamco.{" "}
                </p>

                <p>
                  {" "}
                  Aenean commodo ligula eget dolor aenean massa. Cum sociis nat
                  penatibu set magnis dis parturient montes, nascetur ridiculus
                  mus. quam felisorat, ultricies nec, Aenean commodo ligula eget
                  dolor penatibu set magnis is parturient montes, nascetur
                  ridiculus mus. quam felisorat, ultricies nec, pellentesque eu,
                  pretium quis, sem. quat massa quis enim. Donec vitae sapien ut
                  libero venenatis fauci Nullam quis ante. Etiam sit amet rci
                  eget eros.{" "}
                </p>

                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusm incididunt ut labore et dolore magna aliqua. Ut enim
                  ad minim venia, nostrud exercitation ullamco.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div
                className="wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
              >
                <div className="about-images">
                  <img
                    className="about-main"
                    src="images/about-main.jpg"
                    alt="About Main Image"
                  />
                  <img
                    className="about-inset"
                    src="images/about-inset.jpg"
                    alt="About Inset Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
