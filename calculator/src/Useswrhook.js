import React from "react";
import { useUser } from "./libs/api";

const Useswrhook = () => {
  const { user, isLoading } = useUser();
  if (isLoading) return <div>loading...</div>;
  return <h1>컴포넌트를 사용한 swr : {user.id}</h1>;
};

export default Useswrhook;
