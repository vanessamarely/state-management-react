import React from "react";
import { useThemeStore } from "../../store";

export default function Theme() {
  const store = useThemeStore();

  const handleChange = () => {
    store.toggleTheme(store.theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <button onClick={handleChange}>
        {store.theme === "dark" ? "Light" : "Dark"} Theme
      </button>
    </>
  );
}
