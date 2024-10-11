import React, { useState } from "react";
import data from "../constants/data.js";

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
        {dishes.map((food) => {
          const { id, title, category, price, img, desc } = food;
          return (
            <div
              key={id}
              data-test-id={`menu-item-${category}`}
              className="menu-item"
            >
              <img src={img} alt={title}></img>
              <div className="menu-item-content">
                <h2>
                  <span>{title}</span> <span>{price}</span>
                </h2>
              </div>
              <p>{desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
