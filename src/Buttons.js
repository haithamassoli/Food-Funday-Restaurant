import React from "react";
import Data from "./Data";

const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        {menuItems.map((Val, id) => {
          return (
            <button
              className="bg-[#efefef] text-black rounded-xl px-5 py-2  mx-5 "
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}
        <button
          className="bg-[#efefef] text-black rounded-xl px-5 py-2  mx-5 mt-5 "
          onClick={() => setItem(Data)}
        >
          All
        </button>
      </div>
    </>
  );
};

export default Buttons;
