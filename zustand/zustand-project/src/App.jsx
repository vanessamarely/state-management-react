import reactLogo from "./assets/react.svg";
import Counter from "./components/counter/counter";
import Theme from "./components/theme/theme";

import { useThemeStore } from "./store";
import "./App.css";

function App() {
  const store = useThemeStore();
  return (
    <div className={store.theme  === "dark" ? "dark " : "light"}>
      <Theme />
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React - Zustand </h1>
      <div className="card">
        <Counter />
      </div>
    </div>
  );
}

export default App;
