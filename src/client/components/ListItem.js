import React from "react";
import Item from "./Item";

function ListItem({ items }) {
  const onRemoveItem = (item) => {
    const newArray = items.filter((itm) => itm !== item);
    setItems([...newArray]);
  };

  return (
    <div className="list-item container">
      {items &&
        items.map((item, index) => (
          <Item
            key={index}
            index={index + 1}
            item={item}
            onRemoveItem={onRemoveItem}
          />
        ))}
    </div>
  );
}

export default ListItem;
