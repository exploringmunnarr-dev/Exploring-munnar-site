import React from "react";
import { Eye, EyeOff, LogIn } from "lucide-react";

const SignupForm = ({ setSignUp }) => {
  return (
    <>
      <section>
        <div>
             <div className="md:hidden">
                <div className="w-fit m-auto p-4 rounded-xl ">
                  <LogIn className="w-8 h-8 text-gray-800"/>
                </div>
              </div>
          <h1 className="text-[#333333] font-semibold text-xl md:text-3xl">
            Start your journey with us
          </h1>
          <div className="input-container-1 h-fit mt-6 space-y-3">
            <input
              type="text"
              placeholder="Username"
              className="border w-[100%] focus:ring-1 ring-green-900 text-lg outline-none border-gray-400 rounded px-4 py-3"
            />
            <input
              type="text"
              placeholder="Email Id"
              className="border w-[100%] focus:ring-1 ring-green-900 text-lg outline-none border-gray-400 rounded px-4 py-3"
            />
            <div className="password-input-container">
              <input
                type="text"
                placeholder="password"
                className="border w-[100%] focus:ring-1 ring-green-900 text-lg outline-none border-gray-400 rounded px-4 py-3"
              />
            </div>
            <button className=" bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)] text-white w-full py-3 cursor-pointer rounded text-lg">
              Sign Up
            </button>

            <div className="signUpContainer">
              <h1 className="text-gray-500">Already have an account?</h1>
              <button
                onClick={() => setSignUp(false)}
                className=" bg-black text-white w-full text-lg py-3 rounded mt-2 cursor-pointer hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)]"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignupForm;
