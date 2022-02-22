import React from "react";

function Table(props) {
  const getRow1 = () => {
    let chairs = [];
    for (var i = 0; i < Math.ceil(props.chairs / 2); i++) {
      chairs.push(
        <i
          key={i}
          className={
            props.empty
              ? "fa-solid fa-chair m-1 rounded-full py-1 px-3"
              : "fa-solid fa-chair  m-1 rounded-full py-1 px-3"
          }
        ></i>
      );
    }
    return chairs;
  };
  const getRow2 = () => {
    let chairs2 = [];
    for (var i = 0; i < Math.floor(props.chairs / 2); i++) {
      chairs2.push(
        <i
          key={i}
          className={
            props.empty
              ? "fa-solid fa-chair m-1 rounded-full py-1 px-3"
              : "fa-solid fa-chair   m-1 rounded-full py-1 px-3"
          }
        ></i>
      );
    }
    return chairs2;
  };

  return (
    <div className="grid items-center justify-center">
      <div
        className={
          props.empty
            ? "m-2 table cursor-pointer rounded-xl bg-[#f5f6fa66] p-4"
            : "m-2 table rounded-xl bg-[#f5f6fa66] p-4 text-left opacity-60 "
        }
        onClick={() => {
          props.empty
            ? props.selectTable(props.name, props.id)
            : console.log("Tried to select a full table");
        }}
      >
        <div className="mb-1">
          <div className="text-center">{getRow1()}</div>
        </div>
        <div className="mb-1">
          <div className="text-center">{getRow2()}</div>
        </div>

        <p className="text-center text-white">{props.name}</p>
      </div>
    </div>
  );
}

export default Table;
