import React, { useState, useEffect, Fragment } from "react";
import Table from "./Table";
import { useNavigate } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import data from "../../allTables.json";
import "./Booking.css";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Booking() {
  let navigate = useNavigate();
  const [totalTables, setTotalTables] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // User's selections
  const [selection, setSelection] = useState({
    table: {
      name: null,
      id: null,
    },
    date: new Date(),
    time: null,
    location: "Any Location",
    size: 0,
  });

  const [booking, setBooking] = useState({
    name: sessionStorage.getItem("currentUser")
      ? JSON.parse(sessionStorage.getItem("currentUser"))[0].name
      : "",
    phone: "",
    email: sessionStorage.getItem("currentUser")
      ? JSON.parse(sessionStorage.getItem("currentUser"))[0].email
      : "",
  });
  // List of potential locations
  const [locations] = useState(["Any Location", "Outside", "Inside", "Garden"]);
  const [times] = useState([
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
  ]);
  // Basic reservation "validation"
  const [reservationError, setReservationError] = useState(false);

  const getDate = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date =
      months[selection.date.getMonth()] +
      " " +
      selection.date.getDate() +
      " " +
      selection.date.getFullYear();
    let time = selection.time.slice(0, -2);
    time = selection.time > 12 ? time + 12 + ":00" : time + ":00";
    console.log(time);
    const datetime = new Date(date + " " + time);
    return datetime;
  };

  const getEmptyTables = (_) => {
    let tables = totalTables.filter((table) => table.isAvailable);
    return tables.length;
  };

  useEffect(() => {
    // Check availability of tables from DB when a date and time is selected
    if (selection.time && selection.date) {
      let datetime = getDate();
      let bookingStored = JSON.parse(localStorage.getItem("booking"));
      if (bookingStored) {
        if (bookingStored.date === datetime) {
          setTotalTables(bookingStored.tables);
        }
        // else {
        //   setTotalTables(data);
        //   localStorage.setItem(
        //     "booking",
        //     JSON.stringify({
        //       date: datetime,
        //       tables: data,
        //     })
        //   );
        // }
      }
      let res = JSON.parse(localStorage.getItem("booking"));
      // Filter available tables with location and group size criteria
      let tables = res.tables.filter(
        (table) =>
          (selection.size > 0 ? table.capacity >= selection.size : true) &&
          (selection.location !== "Any Location"
            ? table.location === selection.location
            : true)
      );
      setTotalTables(tables);
      console.log(tables);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selection.time, selection.date, selection.size, selection.location]);

  // Make the reservation if all details are filled out
  const reserve = () => {
    if (
      (booking.name.length === 0) |
      (booking.phone.length === 0) |
      (booking.email.length === 0)
    ) {
      console.log("Incomplete Details");
      setReservationError(true);
    } else {
      const datetime = getDate();
      let res = JSON.parse(localStorage.getItem("booking"));
      let cart = JSON.parse(sessionStorage.getItem("cart"));
      res.tables.forEach((table) => {
        if (table.id == selection.table.id) {
          // The correct table is table
          table.isAvailable = false;
          table.reservation = {
            ...booking,
            cart: { ...cart },
            date: selection.date,
            time: selection.time
          };
          // console.log(table);
          console.log(res);
          localStorage.setItem(
            "booking",
            JSON.stringify({
              date: datetime,
              tables: res.tables,
            })
          );
        }
      });
      navigate("/success");
    }
  };

  // Clicking on a table sets the selection state
  const selectTable = (table_name, table_id) => {
    setSelection({
      ...selection,
      table: {
        name: table_name,
        id: table_id,
      },
    });
  };

  // Generate party size dropdown
  const getSizes = () => {
    let newSizes = [];

    for (let i = 1; i < 8; i++) {
      newSizes.push(
        <Menu.Item>
          {({ active }) => (
            <button
              key={i}
              className={classNames(
                active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                "block w-full px-4 py-2 text-sm"
              )}
              onClick={(e) => {
                let newSel = {
                  ...selection,
                  table: {
                    ...selection.table,
                  },
                  size: i,
                };
                setSelection(newSel);
              }}
            >
              {i}
            </button>
          )}
        </Menu.Item>
      );
    }
    return newSizes;
  };

  // Generate locations dropdown
  const getLocations = () => {
    let newLocations = [];
    locations.forEach((loc) => {
      newLocations.push(
        <Menu.Item>
          {({ active }) => (
            <button
              key={loc}
              className={classNames(
                active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                "block w-full px-4 py-2 text-sm"
              )}
              onClick={() => {
                let newSel = {
                  ...selection,
                  table: {
                    ...selection.table,
                  },
                  location: loc,
                };
                setSelection(newSel);
              }}
            >
              {loc}
            </button>
          )}
        </Menu.Item>
      );
    });
    return newLocations;
  };

  // Generate Times dropdown
  const getTimes = () => {
    let newTimes = [];
    times.forEach((time) => {
      newTimes.push(
        <Menu.Item>
          {({ active }) => (
            <button
              key={time}
              className={classNames(
                active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                "block w-full px-4 py-2 text-sm"
              )}
              onClick={() => {
                let newSel = {
                  ...selection,
                  table: {
                    ...selection.table,
                  },
                  time: time,
                };
                setSelection(newSel);
              }}
            >
              {time}
            </button>
          )}
        </Menu.Item>
      );
    });
    return newTimes;
  };

  // Generating tables from available tables state
  const getTables = () => {
    console.log("Getting tables");
    if (getEmptyTables() > 0) {
      let tables = [];
      totalTables.forEach((table) => {
        if (table.isAvailable) {
          tables.push(
            <Table
              key={table.id}
              id={table.id}
              chairs={table.capacity}
              name={table.name}
              empty
              selectTable={selectTable}
            />
          );
        } else {
          tables.push(
            <Table
              key={table.id}
              id={table.id}
              chairs={table.capacity}
              name={table.name}
              selectTable={selectTable}
            />
          );
        }
      });
      return tables;
    }
  };

  return (
    <>
      <div className="my-[150px] lg:mx-[130px]">
        <div className="align-items-center mt-8 text-center">
          <div>
            <h1 className="book-header text-[3rem]">
              {!selection.table.id ? "Book a Table" : "Confirm Reservation"}
              <i
                className={
                  !selection.table.id
                    ? "fas fa-chair ml-3 text-[3rem] text-orange-600"
                    : "fas fa-clipboard-check ml-3 text-[3rem] text-orange-600"
                }
              ></i>
            </h1>
            <p className="mt-6  text-[20px]">
              {selection.table.id
                ? "You are booking " + selection.table.name
                : null}
            </p>

            {reservationError ? (
              <p className="mt-3 text-red-500">
                * Please fill out all of the details.
              </p>
            ) : null}
          </div>
        </div>

        {!selection.table.id ? (
          <div>
            <div className="align-items-center mx-8 grid grid-cols-2 gap-4   text-center md:grid-cols-4">
              <input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                required="required"
                className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-[12px] text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 sm:text-[15px]"
                value={selection.date.toISOString().split("T")[0]}
                onChange={(e) => {
                  if (!isNaN(new Date(new Date(e.target.value)))) {
                    let newSel = {
                      ...selection,
                      table: {
                        ...selection.table,
                      },
                      date: new Date(e.target.value),
                    };
                    setSelection(newSel);
                  } else {
                    console.log("Invalid date");
                    let newSel = {
                      ...selection,
                      table: {
                        ...selection.table,
                      },
                      date: new Date(),
                    };
                    setSelection(newSel);
                  }
                }}
              ></input>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex h-14 w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-[12px] text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 sm:text-[15px]">
                    {selection.time === null ? "Select a Time" : selection.time}
                    <ChevronDownIcon
                      className="-mr-1 ml-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">{getTimes()}</div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex h-14 w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-[12px] text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 sm:text-[15px]">
                    {selection.location}
                    <ChevronDownIcon
                      className="-mr-1 ml-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">{getLocations()}</div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex h-14 w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-[12px] text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 sm:text-[15px]">
                    {selection.size === 0
                      ? "Select a Party Size"
                      : selection.size.toString()}
                    <ChevronDownIcon
                      className="-mr-1 ml-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">{getSizes()}</div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <div className="mx-5 mt-20 rounded-xl bg-orange-500 p-10 text-white md:mx-20">
              <div>
                {getEmptyTables() > 0 ? (
                  <p className="mb-5">{getEmptyTables()} available</p>
                ) : null}

                {selection.date && selection.time ? (
                  getEmptyTables() > 0 ? (
                    <div className="my-10">
                      <div className="text-white">
                        <span className="m-1 rounded-full border border-white bg-[#f5f6fa66] py-1 px-3"></span>
                        &nbsp; Available &nbsp;&nbsp;
                        <span className="m-1 rounded-full border border-white bg-[#f5f6fa66] py-1 px-3 opacity-60"></span>
                        &nbsp; Unavailable &nbsp;&nbsp;
                      </div>
                      <div className="mt-6 grid grid-cols-2  items-center justify-center gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-0">
                        {getTables()}
                      </div>
                    </div>
                  ) : (
                    <p className="p-5 text-center text-[1.5rem]  text-white">
                      No Available Tables
                    </p>
                  )
                ) : (
                  <p className="p-5 text-center text-[1.5rem] text-white">
                    Please select a date and time for your reservation.
                  </p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="mx-6 mt-8 max-w-2xl md:mx-auto">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="mb-2 block text-[12px] font-bold  text-gray-900 dark:text-black sm:text-[12px]"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  bsSize="lg"
                  placeholder="Name"
                  className="block h-14 w-full  rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-[10px] text-sm text-gray-900 focus:border-orange-500 focus:ring-orange-500 dark:border-gray-500 dark:bg-white dark:text-black dark:placeholder-gray-400 dark:focus:border-orange-500 dark:focus:ring-orange-500"
                  value={booking.name}
                  onChange={(e) => {
                    setBooking({
                      ...booking,
                      name: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="number"
                  className="mb-2 block text-[12px] font-bold  text-gray-900  dark:text-black sm:text-[12px]"
                >
                  Your Number
                </label>
                <input
                  type="number"
                  bsSize="lg"
                  placeholder="Phone Number"
                  className="block h-14  w-full  rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-[10px] text-sm text-gray-900 focus:border-orange-500 focus:ring-orange-500 dark:border-gray-500 dark:bg-white dark:text-black dark:placeholder-gray-400 dark:focus:border-orange-500 dark:focus:ring-orange-500"
                  value={booking.phone}
                  onChange={(e) => {
                    setBooking({
                      ...booking,
                      phone: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="mb-2 block  text-[12px] font-bold  text-gray-900 dark:text-black sm:text-[12px]"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  bsSize="lg"
                  placeholder="Email"
                  className="block h-14  w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-[10px] text-sm text-gray-900 focus:border-orange-500 focus:ring-orange-500 dark:border-gray-500 dark:bg-white dark:text-black dark:placeholder-gray-400 dark:focus:border-orange-500 dark:focus:ring-orange-500"
                  value={booking.email}
                  onChange={(e) => {
                    setBooking({
                      ...booking,
                      email: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className="text-center">
              <div>
                <button
                  className="ronded rounded-xl bg-orange-500 py-3 px-5 text-white"
                  onClick={() => {
                    reserve();
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Booking;
