import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const SLIDES = [
  {
    title: "TITLE ONE",
    text: "Text of first slide",
  },
  {
    title: "TITLE TWO",
    text: "Text of second slide",
  },
  {
    title: "TITLE  THREE",
    text: "Text of third slide",
  },
  {
    title: "TITLE  FOUR",
    text: "Text of fourth slide",
  },
  {
    title: "TITLE  FIVE",
    text: "Text of fifth slide",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App slides={SLIDES} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
