import React, { useState } from "react";
import data from "../constants/data.js";
import MenuItem from "./MenuItem.js";

const Menu = () => {
  let [dishes, setDishes] = useState(data);

  function handleCategories(e) {
    const value = e.target.innerText;
    setDishes(
      value === "All"
        ? data
        : data.filter((food) => food.category === value.toLowerCase())
    );
  }

  return (
    <div id="main">
      <h1>Our Menu</h1>
      <button onClick={handleCategories}>All</button>
      <button id="filter-btn-1" onClick={handleCategories}>
        Breakfast
      </button>
      <button id="filter-btn-2" onClick={handleCategories}>
        Lunch
      </button>
      <button id="filter-btn-3" onClick={handleCategories}>
        Shakes
      </button>

      <div className="menu-container">
        {dishes.map((food) => (
          <MenuItem key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
