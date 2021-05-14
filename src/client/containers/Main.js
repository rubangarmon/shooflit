import React from "react";
// import RandomList from "../components/RandomList";
import ListItem from "clientApp/components/ListItem";
import Control from "clientApp/components/Control";
import useRandomListContext from "clientApp/hooks/useRandomListContext";

const Main = () => {
  const [{ items }] = useRandomListContext();
  return (
    <div className="main" style={{ display: "flex", justifyContent: "center" }}>
      <div className="site-layout-content">
        <ListItem items={items} />
        {/* <Control /> */}
      </div>
    </div>
  );
};

export default Main;
