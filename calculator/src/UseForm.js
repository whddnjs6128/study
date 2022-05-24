import clsx from "clsx";
import React, { useState } from "react";
// import { Button } from "react-bootstrap";
import { useForm, register } from "react-hook-form"; // react-hook-form import
import dayjs from "dayjs";

function UseForm() {
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm();

  const [val, setval] = useState({
    test: "",
    test1: "",
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  const onError = (err) => {
    console.log(err);
  };
  const result = clsx({
    a: val,
    b_second: val,
    c_false: !val,
  });
  console.log(dayjs().format("YYYY MM DD dddd HH:mm:ss"));

  return (
    <div>
      <hr />
      <p className={result}>컴포넌트를 사용한</p>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <input
          {...register("test", {
            required: true,
            minLength: {
              value: 5,
              message: "Username must be longer than 5 characters",
            },
          })}
        />
        <input
          {...register("test1", {
            required: true,
            minLength: {
              value: 5,
              message: "Username must be longer than 5 characters",
            },
          })}
        />

        <button
          type="submit"
          onClick={() => {
            const values = getValues(); // { test: "test-input", test1: "test1-input" }
            const singleValue = getValues("test"); // "test-input"
            const multipleValues = getValues(["test", "test1"]);
            // { test: "test-input", test1: "test1-input" }
            console.log(values);
            console.log(singleValue);
            console.log(multipleValues);
            setval(values);
          }}
        >
          Get Values
        </button>
        {errors?.test?.message && <h1>{errors?.test?.message}</h1>}
      </form>
      {JSON.stringify(val)}
      <hr />
    </div>
  );
}

export default UseForm;
