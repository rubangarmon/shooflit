import React from "react";

const Item = ({ index, item, onRemoveItem }) => {
  return (
    <div className="item">
      <div className="item-index-circle">
        <span>{index}</span>
      </div>
      <div className="item-description">{item}</div>
      {/* <div className="item-delete" onClick={() => onRemoveItem(item)}>delete</div> */}
    </div>
  );
};

export default Item;
