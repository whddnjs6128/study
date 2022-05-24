import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { Main, Detail } from "./pages";

// simple calculator

function App() {
  // const [first, setFirst] = useState(0);
  // const [second, setSecond] = useState(0);
  // const [operator, setOper] = useState("+");
  // const [result, setResult] = useState(0);

  // const calcul = () => {
  //   if (operator === "+") {
  //     setResult(parseInt(first) + parseInt(second));
  //   } else if (operator === "-") {
  //     setResult(parseInt(first) - parseInt(second));
  //   } else if (operator === "*") {
  //     setResult(parseInt(first) * parseInt(second));
  //   } else if (operator === "/") {
  //     setResult(parseInt(first) / parseInt(second));
  //   } else if (operator === "%") {
  //     setResult(parseInt(first) % parseInt(second));
  //   }
  // };

  return (
    // <div className="App">
    //   <input type="number" placeholder="first" onChange={(e) => setFirst(e.target.value)}></input>
    //   <select id="seledtBox" onChange={(e) => setOper(e.target.value)}>
    //     <option id="0" value="+">+</option>
    //     <option id="1" value="-">-</option>
    //     <option id="2" value="*">*</option>
    //     <option id="3" value="/">/</option>
    //     <option id="4" value="%">%</option>
    //   </select>
    //   {/* <input type="text" onChange={(e)=>setOper(e.target.value)}></input> */}
    //   <input type="number" placeholder="second" onChange={(e) => setSecond(e.target.value)}></input>
    //   <button onClick={calcul}>calculator</button>
    //   <p>{result}</p>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
