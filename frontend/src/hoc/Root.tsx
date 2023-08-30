import React from "react";

import { Header } from "../components";

interface IRoot {
  children: React.ReactNode;
}

const Root = ({ children }: IRoot) => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-200">
      <Header />
      {children}
    </div>
  );
};

export default Root;
