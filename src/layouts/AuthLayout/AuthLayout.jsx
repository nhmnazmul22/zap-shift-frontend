import React from "react";
import AuthImg from "../../assets/authImage.png";
import Logo from "../../components/Logo/Logo";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <main className="bg-white">
      <div className="grid lg:grid-cols-2 border min-h-screen">
        <div className="py-10 px-5 sm:px-10 md:px-20">
          <Logo></Logo>
          <div className="max-w-lg w-full mx-auto flex justify-center items-center mt-20">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="bg-[#FAFDF0] h-full hidden lg:flex justify-center items-center">
          <figure className="">
            <img src={AuthImg} alt="Auth Banner" />
          </figure>
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
