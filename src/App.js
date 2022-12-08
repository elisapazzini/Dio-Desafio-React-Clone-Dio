import * as React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Feed } from "./pages/feed";

export default function App() {
  return (
      <Routes>
        <Route>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
        </Route>
      </Routes>
  );
}