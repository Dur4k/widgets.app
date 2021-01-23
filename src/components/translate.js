import React, { useState } from "react";
import Dropdown2 from "./dropdown2";
import Convert from "./convert";
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
const options = [
  { label: "afrikaaans", value: "af" },
  { label: "arabic", value: "ar" },
  { label: "Hindi", value: "hi" },
  { label: "Slovak", value: "sk" },
];
const Translate = () => {
  const [selected, setSelected] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div style={{ margin: " 20px 0 0 0" }} className="ui form">
        <div className="field">
          <label>Enter text</label>
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
      </div>

      <Dropdown2 selected={selected} setSelected={setSelected} options={options} />
      <hr></hr>
      <h3 className="ui header"></h3>
      <Convert text={text} language={selected} />
    </div>
  );
};

export default Translate;
