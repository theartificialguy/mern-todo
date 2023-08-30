import React, { useState } from "react";

import Root from "../hoc/Root";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ userData });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setUserData((prevData) => ({
        ...prevData,
        [field]: e.target.value,
    }));
  };

  return (
    <Root>
      <div className="flex flex-col w-80 self-center my-auto p-6 bg-slate-400 rounded-md">
        <form
          onSubmit={onSubmit}
          className="flex flex-col space-y-6 items-center"
        >
          <input
            type="email"
            placeholder="Email"
            className="w-full"
            value={userData.email}
            onChange={(e) => onChange(e, "email")}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full"
            value={userData.password}
            onChange={(e) => onChange(e, "password")}
          />
          <button
            type="submit"
            className="p-2 w-1/2 bg-slate-700 text-slate-100 rounded-md hover:scale-95 transition-all"
          >
            Login
          </button>
        </form>
      </div>
    </Root>
  );
};

export default Login;
