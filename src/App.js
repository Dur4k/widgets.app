import React from "react";
import "./style.css";
import Accordian from "./components/accordian.js";

const items = [
  {
    title: "what is react?",
    content: "react is front end javascript framework",
  },
  {
    title: " why use react?",
    content: "react is popular framework around devs",
  },
  {
    title: "how to use react?",
    content: "check out the documentation",
  },
];

export default () => {
  return <Accordian items={items} />;
};
