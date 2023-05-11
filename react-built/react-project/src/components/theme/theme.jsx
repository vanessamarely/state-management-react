import React, { useContext } from "react";
import  ThemeContext  from "../../themeContext";

export default function Theme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <button onClick={toggleTheme}>
        {theme === "dark" ? "Light" : "Dark"} Theme
      </button>
    </>
  );
}
