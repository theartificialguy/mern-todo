import React from "react";

import { ToastContainer } from "react-toastify";

import { Header } from "../components";
import "react-toastify/dist/ReactToastify.css";

interface IRoot {
  children: React.ReactNode;
}

const Root = ({ children }: IRoot) => {
  return (
    <>
      <ToastContainer />
      <div className="flex flex-col w-full min-h-screen bg-slate-200">
        <Header />
        {children}
      </div>
    </>
  );
};

export default Root;
