import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { useSelector } from "react-redux";
import Counter from "./components/counter/counter";
import Theme from "./components/theme/theme";
import "./App.css";

function App() {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme === "dark" ? "dark " : "light"}>
      <Theme />
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React</h1>
      <div className="card">
        <Counter />
      </div>
    </div>
  );
}

export default App;
