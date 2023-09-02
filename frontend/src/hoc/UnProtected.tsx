import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

import { RootState } from "../store";

const UnProtected = () => {
    const { userInfo } = useSelector((state: RootState) => state.auth);

    if (userInfo) {
        return <Navigate to={"/profile"} />;
    }
    return <Outlet />;
};

export default UnProtected;