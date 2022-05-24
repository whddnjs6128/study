import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import More from "./moreCalculator";
import reportWebVitals from "./reportWebVitals";
import Useswrhook from "./Useswrhook";
import UseForm from "./UseForm";
import UseForm2 from "./UseForm2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <hr /> */}
    <App />
    {/* <More /> */}
    <Useswrhook />
    <UseForm />
    {/* <UseForm2 /> */}
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
