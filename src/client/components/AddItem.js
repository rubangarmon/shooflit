import React, { useEffect, useState } from "react";
import useRandomListContext from "../hooks/useRandomListContext";
import { useForm } from "react-hook-form";
import { useFormik } from "formik";

const AddItem = () => {
  const [state, actions] = useRandomListContext();
  const [error, setError] = useState("");

  const handleClickAdd = (e) => {
    e.preventDefault();
    if (!item) {
      setError("must add an item");
    }
  };

  const [item, setItem] = useState("");

  return (
    <div className="form-container">
      <input
        type="text"
        name="inputName input-text"
        id="item"
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />

      {
        error && (
          <label>{error}</label>
        )
      }

      <button
        className="btn"
        type="primary"
        
        onClick={(e) => {
          // e.preventDefault();
          if (!item || item === "") {
            setError("must add an item");
            return;
          }
          actions.addItem(item);
          setItem("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddItem;
