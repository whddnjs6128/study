import React from "react";
import { GetData } from "../libs/api";

const Main = () => {
  const data = GetData();
  console.log(data);

  return (
    <div>
      <h5>id : {data.id}</h5>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
      {}
    </div>
  );
};

export default Main;
