import React from "react";
import FormInput from "./FormInput";
import RandomItem from "./RandomItem";
import useRandomListContext from "../hooks/useRandomListContext";
import { MersenneTwister19937, Random } from "random-js";

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
    const newArray = items.filter((itm) => itm !== item);
    console.dir(newArray);
    setItems([...newArray]);
  };

  return (
    <div className="site-layout-content">
      <div className="container">
        <FormInput />
        <button onClick={onShuffle}> Shuffle </button>
        <button onClick={() => onPick(1)}>Pick</button>

        {items &&
          items.map((item, index) => (
            <RandomItem key={index} item={item} onRemoveItem={onRemoveItem} />
          ))}
      </div>
    </div>
  );
}

export default RandomList;
