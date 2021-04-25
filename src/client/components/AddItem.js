import React, { useEffect, useState } from "react";
import useRandomListContext from "../hooks/useRandomListContext";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const [state, actions] = useRandomListContext();

  const onSubmit = () => {
  };
  
  const [item, setItem] = useState("");
  
  
  return (
    <div className="form-container">
      <form>
        <input
          type="text"
          name="inputName input-text"
          id="inputItem"
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
          />

        <button className="btn" type="primary" onClick={(e) => {
          e.preventDefault();
          actions.addItem(item);
          setItem("");
        }} >Add</button>
      </form>
    </div>
  );
};

export default AddItem;
