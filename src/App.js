import React, { useState } from "react";
import "./style.css";
import Accordian from "./components/accordian.js";
import Sreach from "./components/sreach.js";
import Dropdown from "./components/dropdown.js";
import Dropdown2 from "./components/dropdown2.js";
import Translate from "./components/translate.js";

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
  { label: "color Red", value: "#F4869C" },
  { label: "color green", value: "#8AFF8A" },
  { label: "color blue", value: "#006469" },
];
// function componentWillMount() {
//   document.body.style.color = "green";
// }

// function componentWillUnmount() {
//   document.body.style.Color = null;
// }
export default () => {
  // const color = { color: selected.value };
  const [selected, setSelected] = useState(options[0]);
  document.body.style.backgroundColor = selected.value;
  return (
    <div>
      <div style={{ margin: "240px" }} className="ui segment">
        <Dropdown selected={selected} setSelected={setSelected} options={options} />

        <Translate />
      </div>
    </div>
  );
};
