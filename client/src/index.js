import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { FavoritesContextProvider } from "./store/favorites-context.js";
import { BoughtContextProvider } from "./store/bought-context.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BoughtContextProvider>
    <FavoritesContextProvider>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </FavoritesContextProvider>
  </BoughtContextProvider>
);
