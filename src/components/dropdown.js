import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({ options, selected, setSelected }) => {
  document.body.style.backgroundColor = "green;";

  /**
   * Component that alerts if you click outside of it
   */
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const [active, setActive] = useState(false);
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setActive(false);
        }
      };

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const renOptions = options.map((o) => {
    if (selected.label === o.label) {
      return (
        <div onClick={() => setSelected(o)} key={o.value} className={"item"}>
          <strong>{o.label}</strong>
        </div>
      );
    }
    return (
      <div onClick={() => setSelected(o)} key={o.value} className={"item"}>
        {o.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div ref={wrapperRef} className="field">
        <label className="label">Select color</label>
        <div onClick={() => setActive(!active)} className={`ui selection dropdown ${active ? "visible active" : ""}`}>
          <i className="dropdown icon"></i>

          <div className="text">{selected.label}</div>
          <div className={`menu ${active ? "visible transition" : ""}`}> {renOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

/* import React from "react";

const Dropdown = ({ options }) => {
  const renOptions = options.map((o) => {
    return (
      <div key={o.value} className={"item"}>
        {options.label}
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">select color</label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>

          <div className="text">Select color</div>
          <div className="menu visible transition"> {renOptions}</div>
        </div>{" "}
      </div>
    </div>
  );
};
export default Dropdown;

 */
