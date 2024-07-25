/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Fragment, useState } from "react";
import LoginSocial from "./LoginSocial";
import Input from "../Elements/Input";
import Button from "../Elements/Button";
import { login } from "../../service/auth.service";
import mignonsLogo from "/src/assets/logo-login.jpg";
import Navbar from "../Elements/Navbar";

function FormLogin() {
  const [loginFailed, setLoginFailed] = useState("");

  function handleLogin(event) {
    event.preventDefault();

    // ambil data value dari form login
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    // mengirimkan ke service sebagai parameter (data,callback)
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/product";
      } else {
        setLoginFailed(res.response.data);
        window.location.href = "/login";
      }
    });
  }

  return (
    <>
      <div className="flex">
        <Navbar />
      </div>
      <div className="flex items-center justify-center w-full h-screen lg:w-full lg:items-center font-urbanist">
        <div className="w-1/2 h-3/4 rounded-lg  ">
          <div className="flex items-center justify-center gap-2">
            <img src={mignonsLogo} alt="" className="w-full lg:w-[30%] object-cover" />
          </div>
          <div className="flex flex-col gap-2 lg:px-20">
            <form onSubmit={handleLogin} className="flex flex-col gap-3">
              <Input type="text" placeholder="Email" id="email" name="username" />
              <Input type="password" placeholder="Password" id="password" name="password" />
              <Button bg="bg-dark" text="text-white" fill="Login" type="submit" />
              {loginFailed && <p className="my-2 text-red-500">{loginFailed}</p>}
            </form>
          </div>
          <LoginSocial />
          <p className="text-sm text-center text-slate-400 lg:pb-10">
            Don`t have an account ?{" "}
            <a href="/register" className="text-black">
              Register
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default FormLogin;
