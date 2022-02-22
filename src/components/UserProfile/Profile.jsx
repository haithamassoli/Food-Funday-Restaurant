import React, { useEffect, useState } from "react";
import "./profile.css";

const Profile = () => {
  const [reservations,setReservations] =useState([]);
  useEffect(() => {
    let reservation = [];
    // let users = JSON.parse(localStorage.getItem("users"));
    let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    let booking = JSON.parse(localStorage.getItem("booking"));

    booking.tables.map((table) => {
  
      if (table.reservation) {
       
        if (table.reservation.email == currentUser[0].email) {
          reservation.push(table);
        }
      }

    });
     setReservations(reservation);

  }, []);
console.log(reservations);
  return (
    <>
      <main className="reservation-wrapper">
        <h1>Reservation</h1> 
       { reservations.map(table =>{ return(
        <div className="table-container table-cart" key={table.id}>
        <table>
          <thead>
            <tr>
              <th scope="col">Table #</th>
              <th scope="col">location</th>
              <th scope="col">Time</th>
              <th scope="col">Date</th>
              <th scope="col">Total price</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td data-label="Table"> {table.id}</td>
            <td data-label="Location">{table.location}</td>
            <td data-label="Time"> {table.reservation.time} JD</td>
            <td data-label="Date" className="quantity">{table.reservation.date.slice(0, 10)} </td>
            <td data-label="Capcity"> {table.capacity}</td>
          </tr>     
          </tbody>
        </table>
    
      </div>    )})
    } 
      </main>
    </>
  );
};

export default Profile;
