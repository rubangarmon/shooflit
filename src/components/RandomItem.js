import React from "react";
import { List } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";

const RandomItem = ({ item, onRemoveItem }) => {

  return (
    <List.Item className="random-item">
      <span>{item}</span>
      <DeleteTwoTone twoToneColor="red" onClick={() => onRemoveItem(item)}/>
    </List.Item>
  );
};

export default RandomItem;
