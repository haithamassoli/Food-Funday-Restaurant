import React, { useEffect } from "react";
import "./thank.css"
function ThankYou() {

  useEffect(()=>{
    sessionStorage.removeItem('cart');
  },[])

  
  return (
    <div className="thank-container">
     
     <img
          src="booked.png"
          alt="donut"
          width={170}
          className="inline ml-4"
        />
      <h1 className="text-center text-5xl mt-10 ]">
        Thank You! Booking Confirmed
      </h1>

      <p className="text-center text-5xl mt-10">
        You can view the details of your reservation on your profile .
      </p>
    </div>
  );
}

export default ThankYou;
