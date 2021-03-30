import React from "react";
import FormInput from "./FormInput";
import RandomItem from "./RandomItem";
import useRandomListContext from "../hooks/useRandomListContext";
import { MersenneTwister19937, Random } from "random-js";
import { List, Divider, Button } from "antd";

const random = new Random(MersenneTwister19937.autoSeed());

function RandomList() {
  const [{ items }, { setItems }] = useRandomListContext();

  const onShuffle = () => {
    const newArray = random.shuffle(items);
    setItems([...newArray]);
  };

  const onPick = (count) => {
    const newArray = random.shuffle(items);
    setItems(newArray.slice(0, count));
  };

  const onRemoveItem = (item) => {
    const newArray = items.filter(itm => itm !== item);
    console.dir(newArray);
    setItems([...newArray]);
  }

  return (
    <div className="site-layout-content">
      <div className="container">
        <FormInput />
        <Button onClick={onShuffle}> Shuffle </Button>
        <Button onClick={() => onPick(3)}>Pick</Button>
        <Divider />
        <List
          bordered
          dataSource={items}
          renderItem={(item) => <RandomItem item={item} onRemoveItem={onRemoveItem}/>}
        ></List>
      </div>
    </div>
  );
}

export default RandomList;
