import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { MdLogin } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { ClipLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";

import { clearCredentials } from "../slices/authSlice";
import { useLogoutMutation } from "../slices/userApiSlice";
import { RootState } from "../store";
import { IconButton } from ".";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state: RootState) => state.auth);

  const [logout, { isLoading }] = useLogoutMutation();

  const onLogoutPressed = async () => {
    try {
      await logout({}).unwrap(); // clears the http-only-cookie
      dispatch(clearCredentials()) // clears local userinfo state (local logout)
      navigate("/login");
    } catch (err) {
      toast.error(err?.data?.message || err?.error);
    }
  };

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
        {userInfo ? (
          <>
            <span className="text-black/75 font-semibold text-lg">
              {userInfo?.name}
            </span>
            {isLoading ? (
              <ClipLoader size={20} color="blue" />
            ) : (
              <IconButton
                text="Logout"
                Icon={FiLogOut}
                onClick={onLogoutPressed}
              />
            )}
          </>
        ) : (
          <>
            <Link to={"/login"}>
              <IconButton text="Login" Icon={MdLogin} onClick={() => {}} />
            </Link>
            <Link to={"/register"}>
              <IconButton text="Register" Icon={MdLogin} onClick={() => {}} />
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
