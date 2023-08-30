import React from "react";
import { Link } from "react-router-dom";

import { MdLogin } from "react-icons/md";

import { IconButton } from ".";

const Header = () => {
  const onLoginPressed = () => {};

  const onRegisterPressed = () => {};

  return (
    <header className="flex w-full p-6 items-center justify-between bg-slate-50">
      {/* left section */}
      <nav className="flex items-center space-x-12">
        {/* <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Products</a> */}
        <Link to={"/"}>
          <h1 className="text-xl text-black font-bold">MERN App</h1>
        </Link>
      </nav>

      {/* right section */}
      <nav className="flex items-center space-x-12">
        <Link to={"/login"}>
          <IconButton text="Login" Icon={MdLogin} onClick={onLoginPressed} />
        </Link>
        <Link to={"/register"}>
          <IconButton
            text="Register"
            Icon={MdLogin}
            onClick={onRegisterPressed}
          />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
