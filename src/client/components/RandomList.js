import React from "react";
import AddItem from "./AddItem";
import Item from "./Item";
import useRandomListContext from "clientApp/hooks/useRandomListContext";
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
    <div>
      <div className="container">
        <AddItem />
        {/* <button onClick={onShuffle}> Shuffle </button>
        <button onClick={() => onPick(1)}>Pick</button> */}

        {items &&
          items.map((item, index) => (
            <Item key={index} item={item} onRemoveItem={onRemoveItem} />
          ))}
      </div>
    </div>
  );
}

export default RandomList;
