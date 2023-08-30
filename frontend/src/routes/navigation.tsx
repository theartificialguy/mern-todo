import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home, Login, Register } from "../pages";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" index={true} element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Navigation;
