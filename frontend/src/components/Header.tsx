import React from "react";

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
        <h1 className="text-xl text-black font-bold">MERN App</h1>
      </nav>

      {/* right section */}
      <nav className="flex items-center space-x-12">
        <IconButton text="Login" Icon={MdLogin} onClick={onLoginPressed} />
        <IconButton
          text="Register"
          Icon={MdLogin}
          onClick={onRegisterPressed}
        />
      </nav>
    </header>
  );
};

export default Header;
