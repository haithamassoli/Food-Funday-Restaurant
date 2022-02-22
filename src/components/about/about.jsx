import React, { useEffect } from "react";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div id="our_team" className="team-main pad-top-100 pad-bottom-100 parallax">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div
                className="wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
              >
                <h2 className="block-title text-center">&#160;</h2>
                <h2 className="block-title text-center">our Chefs</h2>
                <p className="title-caption text-center">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.{" "}
                </p>
              </div>
              <div className="team-box">
                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    <div className="sf-team">
                      <div className="thumb">
                        <a href="#">
                          <img
                            src={require("../../images/staff-01.jpg")}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="text-col">
                        <h3>John Doggett</h3>
                        <p>
                          Nullam quis ante. Etiam sit amet orci eget eros
                          faucibus tincidunt. Duis leo. Sed fringilla mauris sit
                          amet nibh. Donec sodales sagittis magna. Aenean
                          commodo ligula.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6">
                    <div className="sf-team">
                      <div className="thumb">
                        <a href="#">
                          <img
                            src={require("../../images/staff-02.jpg")}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="text-col">
                        <h3>Jeffrey Spender</h3>
                        <p>
                          Nullam quis ante. Etiam sit amet orci eget eros
                          faucibus tincidunt. Duis leo. Sed fringilla mauris sit
                          amet nibh. Donec sodales sagittis magna. Aenean
                          commodo ligula.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6">
                    <div className="sf-team">
                      <div className="thumb">
                        <a href="#">
                          <img
                            src={require("../../images/staff-03.jpg")}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="text-col">
                        <h3>Monica Reyes</h3>
                        <p>
                          Nullam quis ante. Etiam sit amet orci eget eros
                          faucibus tincidunt. Duis leo. Sed fringilla mauris sit
                          amet nibh. Donec sodales sagittis magna. Aenean
                          commodo ligula.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of our team */}
      <div id="gallery" className="gallery-main pad-top-100 pad-bottom-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div
                className="wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
              >
                <h2 className="block-title text-center">Our Gallery</h2>
                <p className="title-caption text-center">
                  There are many variations of passages of Lorem Ipsum available{" "}
                </p>
              </div>
              <div className="gal-container clearfix">
                <div className="col-md-8 col-sm-12 co-xs-12 gal-item">
                  <div className="box">
                    <a href="#" data-toggle="modal" data-target="#1">
                      <img
                        src={require("../../images/gallery_01.jpg")}
                        alt=""
                      />
                    </a>
                    <div className="modal fade" id="1" tabindex="-1" role="dialog">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                          <div className="modal-body">
                            <img src="images/gallery_01.jpg" alt="" />
                          </div>
                          <div className="col-md-12 description">
                            <h4>This is the 1 one on my Gallery</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 co-xs-12 gal-item">
                  <div className="box">
                    <a href="#" data-toggle="modal" data-target="#2">
                      <img
                        src={require("../../images/gallery_02.jpg")}
                        alt=""
                      />
                    </a>
                    <div className="modal fade" id="2" tabindex="-1" role="dialog">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                          <div className="modal-body">
                            <img
                              src={require("../../images/gallery_02.jpg")}
                              alt=""
                            />
                          </div>
                          <div className="col-md-12 description">
                            <h4>This is the 2 one on my Gallery</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 co-xs-12 gal-item">
                  <div className="box">
                    <a href="#" data-toggle="modal" data-target="#3">
                      <img
                        src={require("../../images/gallery_03.jpg")}
                        alt=""
                      />
                    </a>
                    <div className="modal fade" id="3" tabindex="-1" role="dialog">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                          <div className="modal-body">
                            <img
                              src={require("../../images/gallery_03.jpg")}
                              alt=""
                            />
                          </div>
                          <div className="col-md-12 description">
                            <h4>This is the 3 one on my Gallery</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 co-xs-12 gal-item">
                  <div className="box">
                    <a href="#" data-toggle="modal" data-target="#4">
                      <img
                        src={require("../../images/gallery_04.jpg")}
                        alt=""
                      />
                    </a>
                    <div className="modal fade" id="4" tabindex="-1" role="dialog">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                          <div className="modal-body">
                            <img src="images/gallery_04.jpg" alt="" />
                          </div>
                          <div className="col-md-12 description">
                            <h4>This is the 4 one on my Gallery</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 co-xs-12 gal-item">
                  <div className="box">
                    <a href="#" data-toggle="modal" data-target="#5">
                      <img
                        src={require("../../images/gallery_05.jpg")}
                        alt=""
                      />
                    </a>
                    <div className="modal fade" id="5" tabindex="-1" role="dialog">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                          <div className="modal-body">
                            <img
                              src={require("../../images/gallery_05.jpg")}
                              alt=""
                            />
                          </div>
                          <div className="col-md-12 description">
                            <h4>This is the 5 one on my Gallery</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 co-xs-12 gal-item">
                  <div className="box">
                    <a href="#" data-toggle="modal" data-target="#9">
                      <img
                        src={require("../../images/gallery_06.jpg")}
                        alt=""
                      />
                    </a>
                    <div className="modal fade" id="9" tabindex="-1" role="dialog">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                          <div className="modal-body">
                            <img src="images/gallery_06.jpg" alt="" />
                          </div>
                          <div className="col-md-12 description">
                            <h4>This is the 6 one on my Gallery</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 col-sm-12 co-xs-12 gal-item">
                  <div className="box">
                    <a href="#" data-toggle="modal" data-target="#10">
                      <img
                        src={require("../../images/gallery_07.jpg")}
                        alt=""
                      />
                    </a>
                    <div className="modal fade" id="10" tabindex="-1" role="dialog">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                          <div className="modal-body">
                            <img
                              src={require("../../images/gallery_07.jpg")}
                              alt=""
                            />
                          </div>
                          <div className="col-md-12 description">
                            <h4>This is the 7 one on my Gallery</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 co-xs-12 gal-item">
                  <div className="box">
                    <a href="#" data-toggle="modal" data-target="#11">
                      <img
                        src={require("../../images/gallery_08.jpg")}
                        alt=""
                      />
                    </a>
                    <div className="modal fade" id="11" tabindex="-1" role="dialog">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                          <div className="modal-body">
                            <img
                              src={require("../../images/gallery_08.jpg")}
                              alt=""
                            />
                          </div>
                          <div className="col-md-12 description">
                            <h4>This is the 8 one on my Gallery</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 co-xs-12 gal-item">
                  <div className="box">
                    <a href="#" data-toggle="modal" data-target="#12">
                      <img
                        src={require("../../images/gallery_09.jpg")}
                        alt=""
                      />
                    </a>
                    <div className="modal fade" id="12" tabindex="-1" role="dialog">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                          <div className="modal-body">
                            <img
                              src={require("../../images/gallery_09.jpg")}
                              alt=""
                            />
                          </div>
                          <div className="col-md-12 description">
                            <h4>This is the 9 one on my Gallery</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 co-xs-12 gal-item">
                  <div className="box">
                    <a href="#" data-toggle="modal" data-target="#13">
                      <img
                        src={require("../../images/gallery_10.jpg")}
                        alt=""
                      />
                    </a>
                    <div className="modal fade" id="13" tabindex="-1" role="dialog">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                          <div className="modal-body">
                            <img
                              src={require("../../images/gallery_10.jpg")}
                              alt=""
                            />
                          </div>
                          <div className="col-md-12 description">
                            <h4>This is the 10 one on my Gallery</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
