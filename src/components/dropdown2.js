import React, { useState, useRef, useEffect } from "react";

const Translate = ({ options, selected, setSelected }) => {
  const [active, setActive] = useState(false);
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setActive(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const passingOptions = options.map((o) => {
    return (
      <div onClick={() => setSelected(o)} class="item">
        {o.label}
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className=" field ">
        <label style={{ margin: "10px 0 0 0" }} className="label">
          Select language
        </label>

        <div ref={wrapperRef}>
          <div onClick={() => setActive(!active)} class={`ui selection dropdown  ${active ? "active" : ""}`}>
            <input type="hidden" name="gender" />
            {selected.label}
            <i class="dropdown icon"></i>
            <div class="default text"></div>
            <div class={`menu   ${active ? "visible active transition" : ""}`}>{passingOptions}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Translate;
