import React, { useState } from "react";
import { useForm, register } from "react-hook-form"; // react-hook-form import

const initValue = { name: "", animal: { name: "", color: "" }, money: "" };

const UseForm2 = () => {
  const { control, handleSubmit, Controller } = useForm({
    mode: "onSubmit",
    defaultValues: initValue,
  });
  console.log(control);
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {" "}
      <Controller
        name="name"
        control={control}
        render={({ field }) => {
          console.log("### field", field);
          return <input {...field} />;
        }}
      />{" "}
      <Controller
        name="animal.name"
        control={control}
        render={({ field }) => {
          return <input {...field} />;
        }}
      />{" "}
      <Controller
        name="animal.color"
        control={control}
        render={({ field }) => {
          return <input {...field} />;
        }}
      />{" "}
      <Controller
        name="money"
        control={control}
        render={({ field }) => {
          return <input {...field} />;
        }}
      />
      {} <input type="submit" />{" "}
    </form>
  );
};

export default UseForm2;
