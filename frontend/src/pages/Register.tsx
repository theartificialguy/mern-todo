import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { ClipLoader } from "react-spinners";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

import { useRegisterMutation } from "../slices/userApiSlice";
import { setCredentials } from "../slices/authSlice";
import Root from "../hoc/Root";

type TField = "email" | "password" | "name";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  let state = location.state as { from: Location };
  let from = state ? state.from.pathname : "/register";

  const [register, { isLoading }] = useRegisterMutation();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await register(userData).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(from, { replace: true });
    } catch (err) { // catches all error http codes i.e. codes >= 400
      toast.error(err?.data?.message || err?.error);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, field: TField) => {
    setUserData((prevData) => ({
      ...prevData,
      [field]: e.target.value,
    }));
  };

  return (
    <Root>
      <div className="flex flex-col w-80 self-center my-auto p-6 bg-slate-300 rounded-md">
        <form
          onSubmit={onSubmit}
          className="flex flex-col space-y-6 items-center"
        >
          <div className="flex w-full items-center space-x-2">
            <FiUser size={18} color="gray" />
            <input
              type="text"
              placeholder="Username"
              value={userData.name}
              className="w-full py-1 px-2 rounded-sm focus:outline-blue-400"
              onChange={(e) => onChange(e, "name")}
            />
          </div>
          <div className="flex w-full items-center space-x-2">
            <FiMail size={18} color="gray" />
            <input
              type="email"
              placeholder="Email"
              value={userData.email}
              className="w-full py-1 px-2 rounded-sm focus:outline-blue-400"
              onChange={(e) => onChange(e, "email")}
            />
          </div>
          <div className="flex w-full items-center space-x-2">
            <FiLock size={18} color="gray" />
            <input
              type="password"
              placeholder="Password"
              value={userData.password}
              className="w-full py-1 px-2 rounded-sm focus:outline-blue-400"
              onChange={(e) => onChange(e, "password")}
            />
          </div>
          <button
            type="submit"
            className="p-2 w-1/2 bg-slate-700 text-slate-100 rounded-md hover:scale-95 transition-all"
          >
            {isLoading ? <ClipLoader size={20} color="white" /> : "Register"}
          </button>
        </form>
      </div>
    </Root>
  );
};

export default Register;
