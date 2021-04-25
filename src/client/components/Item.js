import React from "react";

const Item = ({ index, item, onRemoveItem }) => {
  return (
    <div className="random-item item">
      <div className="item-box item-index" >{index}</div>
      <div className="item-box item-description">{item}</div>
      <div className="item-delete" onClick={() => onRemoveItem(item)}>delete</div>
    </div>
  );
};

export default Item;
