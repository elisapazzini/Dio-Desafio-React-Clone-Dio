import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyles } from "./styles/global";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalStyles></GlobalStyles>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
