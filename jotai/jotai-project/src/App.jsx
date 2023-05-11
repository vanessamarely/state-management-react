import { useAtom } from "jotai";
import reactLogo from "./assets/react.svg";
import Counter from "./components/counter/counter";
import Theme from "./components/theme/theme";
import "./App.css";

import { themeStore } from "./store";

function App() {
  const [theme] = useAtom(themeStore);

  return (
    <div className={theme === "dark" ? "dark " : "light"}>
      <Theme />
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React - Jotai</h1>
      <div className="card">
        <Counter />
      </div>
    </div>
  );
}

export default App;
