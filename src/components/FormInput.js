import React, { useEffect, useState } from "react";
import useRandomListContext from "../hooks/useRandomListContext";
import { useForm } from "react-hook-form";
import { Input, Button } from "antd";

const FormInputList = () => {
  const [state, actions] = useRandomListContext();
  const { register, handleSubmit, errors, setValue } = useForm();
  const onSubmit = () => {
    actions.addItem(item);
    setItem("");
  };
  const [item, setItem] = useState("");

  useEffect(() => {
    register({ name: "inputName" }, { required: true, minLength: 1,  });
  }, []);

  return (
    <div style={{ height: " 84px" }}>
      <div className="form-container">
        <Input
          style={{ marginRight: "10px" }}
          type="text"
          name="inputName"
          id="inputItem"
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
            setValue("inputName", e.target.value);
          }}
          ref={register({ required: true, maxLength: 20 })}
          onPressEnter={handleSubmit(onSubmit)}
        />

        <Button
          type="primary"
          htmlType="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Add
        </Button>
      </div>
      {errors.inputName && <span>This field is required</span>}
    </div>
  );
};

export default FormInputList;
