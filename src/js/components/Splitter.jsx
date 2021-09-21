import React from "react";

const Splitter = (props) => {
  return (
    <span>
      {props.children.split("").map(function (char, index) {
        let theClass = "char";
        if (char == " ") {
          theClass = "whitespace";
        }
        return (
          <span aria-hidden='true' key={index} className={theClass}>
            {char}
          </span>
        );
      })}
    </span>
  );
};

export default Splitter;
