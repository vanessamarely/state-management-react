import React from "react";
import { useThemeState } from '../../store';

export default function Theme() {
  const [theme, setTheme] = useThemeState();

  const handleChange = (e) => {
    e.preventDefault();
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <button onClick={handleChange}>{theme}</button>
    </>
  );
}
