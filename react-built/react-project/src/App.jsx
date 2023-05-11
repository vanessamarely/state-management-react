
import React, { useContext } from "react";
import reactLogo from "./assets/react.svg";
import Counter from "./components/counter/counter";
import "./App.css";
import Theme from "./components/theme/theme";
import ThemeContext  from "./themeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === "dark" ? "dark " : "light"}>
      <Theme />
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React - useState - Context API</h1>
      <div className="card">
        <Counter />
      </div>
    </div>
  );
}

export default App;
