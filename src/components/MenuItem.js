import React from "react";

function MenuItem({ food }) {
  const { id, title, category, price, img, desc } = food;
  return (
    <div key={id} data-test-id={`menu-item-${category}`} className="menu-item">
      <img src={img} alt={title}></img>
      <div className="menu-item-content">
        <h2>
          <span>{title}</span> <span>{price}</span>
        </h2>
      </div>
      <p>{desc}</p>
    </div>
  );
}

export default MenuItem;
