import React from "react";
// import RandomList from "../components/RandomList";
import ListItem from "../components/ListItem";
import Control from "../components/Control";
import useRandomListContext from "../hooks/useRandomListContext";

const Main = () => {
  const [{ items }] = useRandomListContext();
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="site-layout-content">
        <ListItem items={items} />
        <Control />
      </div>
    </div>
  );
};

export default Main;
