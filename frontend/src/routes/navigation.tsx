import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" index={true} element={<Home />} />
    </Routes>
  );
};

export default Navigation;
