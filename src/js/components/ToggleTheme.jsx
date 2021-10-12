import React from "react";

const ToggleTheme = ({ mouseOutEvent, mouseOverEvent, switchTheme, theme }) => {
  return (
    <button
      className={`header__toggleTheme`}
      onMouseOut={mouseOutEvent}
      onMouseOver={mouseOverEvent}
      onClick={(e) => switchTheme(e)}
    >
      {theme == "dark" ? "light" : "dark"} theme
    </button>
  );
};

export default ToggleTheme;
