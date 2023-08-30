import React from "react";
import { useNavigate } from "react-router-dom";

import { MdLogin } from "react-icons/md";

import Root from "../hoc/Root";
import { IconButton } from "../components";

const Home = () => {
  const navigate = useNavigate();

  const onLoginPressed = () => {
    navigate("/login");
  };

  const onRegisterPressed = () => {
    navigate("/register");
  };

  return (
    <Root>
      <div className="flex flex-1 flex-col items-center justify-center space-y-6">
        <h1 className="text-black/75 font-semibold text-4xl italic">
          Welcome to MERN Auth app
        </h1>

        <div className="flex items-center justify-between space-x-6">
          <IconButton
            text="Login"
            Icon={MdLogin}
            onClick={onLoginPressed}
            iconColor="white"
            textStyle="text-slate-100"
            btnContainerStyle="p-2 bg-slate-700 rounded-md hover:scale-95 transition-all"
          />
          <IconButton
            text="Register"
            Icon={MdLogin}
            onClick={onRegisterPressed}
            iconColor="white"
            textStyle="text-slate-100"
            btnContainerStyle="p-2 bg-slate-700 rounded-md hover:scale-95 transition-all"
          />
        </div>
      </div>
    </Root>
  );
};

export default Home;
