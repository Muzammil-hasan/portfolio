import React from "react";
import { useStore } from "../contexts/Store";
const ToggleTheme = ({ switchTheme, theme }) => {
  const { mouseOutEvent, mouseOverEvent } = useStore();

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
