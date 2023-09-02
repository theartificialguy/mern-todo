import React from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../store";
import { Home, Login, Register, Profile, NotFound } from "../pages";
import { RequireAuth, UnProtected } from "../hoc";

const Navigation = () => {
  return (
    <Provider store={store}>
      <Routes>
        {/* Public Routes */}
        <Route element={<UnProtected />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        {/* Private Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        {/* Not Found Routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Provider>
  );
};

export default Navigation;
