import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const darkTheme = {
  colors: {
    primary: "#000",
    secondary: "#fff",
    accent: "#000",
    background: "#000",
    card: "#000",
    text: "#fff",
    border: "#fff",
    notification: "#000",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      
        <App />
      
    </QueryClientProvider>
  </React.StrictMode>
);
