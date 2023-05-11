import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./theme.slice";

export default function Theme() {
  const { theme } = useSelector((state) => state.theme);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const next = theme === "dak" ? "light" : "dark";
    dispatch(toggleTheme(next));
  };

  return (
    <>
      <button onClick={handleChange}>{theme}</button>
    </>
  );
}
