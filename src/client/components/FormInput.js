import React, { useEffect, useState } from "react";
import useRandomListContext from "../hooks/useRandomListContext";
import { useForm } from "react-hook-form";
import { Input, Button } from "antd";

const FormInputList = () => {
  const [state, actions] = useRandomListContext();
  const { register, handleSubmit, errors, setValue } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });
  const onSubmit = () => {
    console.dir(item)
    actions.addItem(item);
    setItem("");
  };
  const [item, setItem] = useState("");

  useEffect(() => {
    register(
      { name: "inputName", type: "custom" },
      { required: true, minLength: 5, min: 1 }
    );
  }, [register]);

  return (
    <div style={{ height: " 84px" }}>
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>

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
          // ref={register({ required: true, maxLength: 20 })}
          // ref
          onPressEnter={handleSubmit(onSubmit)}
        />

        <Button
          type="primary"
          htmlType="submit"
          // onClick={handleSubmit(onSubmit)}
        >
          Add
        </Button>
        </form>
      </div>
      {errors.inputName && <span>This field is required</span>}
    </div>
  );
};

export default FormInputList;
