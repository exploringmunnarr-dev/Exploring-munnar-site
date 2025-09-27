import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.svg";
import loginbg from "../assets/login2.avif";
import Image from "next/image";
import { Eye, EyeOff, LogIn } from "lucide-react";
import SignupForm from "./SignupForm";
const LoginModal = ({ setShowLoginForm }) => {
  // states
  const [isPassword, setIsPassword] = useState(false);
  const [showSignup, setSignUp] = useState(false);

  // ref's
  const loginModalRef = useRef(null);

  // stop scrolling handler
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // click outside handler
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (loginModalRef.current && !loginModalRef.current.contains(e.target)) {
        setShowLoginForm(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div
        ref={loginModalRef}
        className="login-container p-6 rounded-xl flex items-center gap-6 w-[90%] md:w-[70%] md:h-[600px] fixed z-[200]  top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
      >
        <Image
          src={loginbg}
          className="w-[60%] h-[100%] object-cover rounded-xl hidden md:block"
        />
        <div className="w-[100%] md:w-[40%]">
          {showSignup ? (
            <SignupForm setSignUp={setSignUp} />
          ) : (
            <div className="">
              <div className="md:hidden">
                <div className="w-fit m-auto p-4 rounded-xl ">
                  <LogIn className="w-8 h-8 text-gray-800"/>
                </div>
              </div>
              <h1 className="text-[#333333] font-semibold text-xl md:text-3xl">
                Sign in to continue your journey
              </h1>
              <div className="input-container-1 h-fit mt-6 space-y-3">
                <input
                  type="text"
                  placeholder="Username"
                  className="border w-[100%] focus:ring-1 ring-green-900 text-lg outline-none border-gray-400 rounded px-4 py-3"
                />
                <div className="password0inout-container relative">
                  <input
                    type={isPassword ? "text" : "password"}
                    placeholder="password"
                    className="border w-[100%] focus:ring-1 ring-green-900 text-lg outline-none border-gray-400 rounded px-4 py-3"
                  />
                  {isPassword ? (
                    <Eye
                      onClick={() => setIsPassword(false)}
                      className="text-gray-400 cursor-pointer absolute top-[50%] translate-y-[-50%] right-3"
                    />
                  ) : (
                    <EyeOff
                      onClick={() => setIsPassword(true)}
                      className="text-gray-400 cursor-pointer absolute top-[50%] translate-y-[-50%] right-3"
                    />
                  )}
                </div>
                <button
                  className="bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] 
  hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)] text-white w-full py-3 cursor-pointer rounded text-lg"
                >
                  Sign In
                </button>

                <div className="signUpContainer">
                  <h1 className="text-gray-500">Don't have an account?</h1>
                  <button
                    onClick={() => setSignUp(true)}
                    className="bg-black text-white w-full text-lg py-3 rounded mt-2 cursor-pointer hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)]"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="login-tint fixed top-0 right-0 left-0 bottom-0 z-100"></div>
    </>
  );
};

export default LoginModal;
