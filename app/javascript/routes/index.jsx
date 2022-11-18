import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../components/Home";

export default (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);