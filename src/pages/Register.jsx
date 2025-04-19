import React from "react";
import bg from "../assets/images/bg-register.jpg";
import { RegisterForm } from "../components/form/RegisterForm";

export const Register = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-no-repeat bg-center bg-fixed"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      {/* Centered RegisterForm */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <RegisterForm />
      </div>
    </div>
  );
};
