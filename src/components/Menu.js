import React, { useState } from "react";
import data from "../data.js";

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
      <p onClick={handleCategories}>All</p>
      <p id="filter-btn-1" onClick={handleCategories}>
        Breakfast
      </p>
      <p id="filter-btn-2" onClick={handleCategories}>
        Lunch
      </p>
      <p id="filter-btn-3" onClick={handleCategories}>
        Shakes
      </p>

      {dishes.map((food) => {
        const category = food.category;
        return (
          <div data-test-id={`menu-item-${category}`}>
            <img src={food.img} alt={food.title}></img>
            <h2>
              <span>{food.title}</span> <span>{food.price}</span>
            </h2>
            <p>{food.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
