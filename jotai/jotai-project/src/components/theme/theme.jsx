import React from "react";
import { atom, useAtom } from 'jotai';

import { themeStore } from '../../store';

export default function Theme() {
  const [theme, setTheme] = useAtom(themeStore);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <button onClick={toggleTheme}>{theme}</button>
    </>
  );
}
