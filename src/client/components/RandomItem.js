import React from "react";

const RandomItem = ({ item, onRemoveItem }) => {
  return (
    <li className="random-item">
      <span>{item}</span>
      <span onClick={() => onRemoveItem(item)}>delete</span>
    </li>
  );
};

export default RandomItem;
