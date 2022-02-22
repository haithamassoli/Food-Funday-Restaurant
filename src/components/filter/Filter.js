import React, { useEffect } from "react";
import Buttons from "../../Buttons";
import Card from "../../Card";
import Data from "../../Data";

const Filter = ({ item, setItem ,counter, setCounter}) => {
  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };

  return (
    <>
      {/* filter  */}
      <div className="container3">
        <div className="row3">
          <h1 className="col-12 fw-bold head my-3 text-center">Our Menu</h1>
          <Buttons
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
          <Card item={item}  counter={counter}
              setCounter={setCounter}/>
        </div>
      </div>
    </>
  );
};

export default Filter;
