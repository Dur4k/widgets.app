import React, { useState } from "react";
import "./style.css";
import Accordian from "./components/accordian.js";
import Sreach from "./components/sreach.js";
import Dropdown from "./components/dropdown.js";

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

const options = [
  { label: "color Red", value: "red" },
  { label: "color green", value: "green" },
  { label: "color blue", value: "blue" },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Dropdown selected={selected} setSelected={setSelected} options={options} />
    </div>
  );
};
