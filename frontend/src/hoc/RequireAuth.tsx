import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

import { RootState } from "../store";

function RequireAuth() {
    const location = useLocation();
    const { userInfo } = useSelector((state: RootState) => state.auth);

    if (!userInfo) {
        return <Navigate to={"/login"} state={{ from: location }} replace />
    }

    return <Outlet />;
}

export default RequireAuth;