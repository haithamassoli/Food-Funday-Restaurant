import React from 'react';
const Footer = () => {
    return ( <> <div id="footer" className="footer-main">
  
    <div className="footer-box pad-top-70 " >
        <div className="container">
            <div className="row">
                <div className="footer-in-main">
                    <div className="footer-logo">
                        <div className="text-center">
                            <img src="images/logo.png" alt="" style={{width:' 30% '}}/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 ">
                        <div className="footer-box-a">
                            <h3>About Us</h3>
                            <p>Aenean commodo ligula eget dolor aenean massa. Cum sociis nat penatibu set magnis dis parturient montes.</p>
                            <ul className="socials-box footer-socials pull-left">
                                <li>
                                    <a href="#">
                                        <div className="social-circle-border"><i className="fa-brands fa-facebook"></i></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="social-circle-border"><i className="fa-brands fa-twitter"></i></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="social-circle-border"><i className="fa-brands fa-instagram-square"></i></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="social-circle-border"><i className="fa-brands fa-snapchat-square"></i></div>
                                    </a>
                                </li>
                               
                            </ul>

                        </div>
                        {/* <!-- end footer-box-a --> */}
                    </div>
                    {/* <!-- end col --> */}
                   
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div className="footer-box-c">
                            <h3>Contact Us</h3>
                            <p>
                                <i className="fa fa-map-signs" aria-hidden="true"></i>
                                <span>6 E Esplanade, St Albans VIC 3021, Australia</span>
                            </p>
                            <p>
                                <i className="fa fa-mobile" aria-hidden="true"></i>
                                <span>
                                +91 80005 89080 
                            </span>
                            </p>
                            <p>
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                <span><a href="#">support@foodfunday.com</a></span>
                            </p>
                        </div>
                        {/* <!-- end footer-box-c --> */}
                    </div>
                    {/* <!-- end col --> */}
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div className="footer-box-d">
                            <h3>Opening Hours</h3>

                            <ul>
                                <li>
                                    <p>Monday - Thursday </p>
                                    <span> 9:00 AM - 5:00 PM</span>
                                </li>
                                <li>
                                    <p>Friday - Saturday </p>
                                    <span> 9:00 AM - 5:00 PM</span>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- end footer-box-d --> */}
                    </div>
                    {/* <!-- end col --> */}
                </div>
                {/* <!-- end footer-in-main --> */}
            </div>
            {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
        <div id="copyright" className="copyright-main">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h6 className="copy-title"> Copyright &copy; 2017 Food Funday is powered by <a href="#" target="_blank"></a> </h6>
                    </div>
                </div>
                {/* <!-- end row --> */}
            </div>
            {/* <!-- end container --> */}
        </div>
        {/* <!-- end copyright-main --> */}
    </div>
    {/* <!-- end footer-box --> */}
</div>
{/* <!-- end footer-main --> */}
</> );
}
 
export default Footer;