import React, { useState } from "react";
const Accordian = ({ items }) => {
  const [numb, setNumb] = useState(null);
  const stuff = items.map((a, index) => {
    const open = () => {
      return numb === index ? "active" : "";
    };
    return (
      <React.Fragment key={a.title}>
        <div onClick={() => setNumb(index)} className={"title " + open()}>
          <i className={"dropdown icon "}></i>
          {a.title}
        </div>
        <div className={`content  ${open()}`}>
          <p>{a.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="ui styled accordion">
      {stuff}
      <h1></h1>
    </div>
  );
};

export default Accordian;
/* const Accordian = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const renderedItems = items.map((item, index) => {
    const onTitleClick = (index) => {
      setActiveIndex(index);
      console.log("title clicked", index);
    };
    return (
      <React.Fragment key={item.title}>
        <div onClick={() => onTitleClick(index)} className="title active">
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.title}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion">
      {renderedItems}
      <h1>{activeIndex}</h1>
    </div>
  );
};
 */
