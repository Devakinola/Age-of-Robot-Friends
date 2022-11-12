import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Card from "./Card";
import reportWebVitals from "./reportWebVitals";
import { friends } from "./Friends";
import "tachyons";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="Robots pa5">
      <Card name={friends[0].name} says={friends[0].says} />
      <Card name={friends[1].name} says={friends[1].says} />
      <Card name={friends[2].name} says={friends[2].says} />
      <Card name={friends[3].name} says={friends[3].says} />
      <Card name={friends[4].name} says={friends[4].says} />
      <Card name={friends[5].name} says={friends[5].says} />
      <Card name={friends[6].name} says={friends[6].says} />
      <Card name={friends[7].name} says={friends[7].says} />
      <Card name={friends[8].name} says={friends[8].says} />
      <Card name={friends[9].name} says={friends[9].says} />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
