import * as React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/home";
import { Login } from "./pages/login";

export default function App() {
  return (
      <Routes>
        <Route>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
  );
}