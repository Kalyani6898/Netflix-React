import React, { useState } from "react";
import Header from "../components/Header";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleToSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="">
        <img
          className="absolute"
          alt="logo"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg"
        ></img>
        <form className="p-12 bg-black absolute w-2/6 my-36 mx-auto right-0 left-0 rounded-lg text-white bg-opacity-70">
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              className="p-4 my-4 border-white bg-gray-700 w-full"
              type="text"
              placeholder="Full Name"
            ></input>
          )}
          <input
            className="p-4 my-4 border-white bg-gray-700 w-full"
            type="text"
            placeholder="Email or Mobile number"
          ></input>
          <input
            className="p-4 my-4 border-white bg-gray-700 w-full"
            type="password"
            placeholder="Password"
          ></input>
          <button className="bg-red-600 rounded-lg p-4 my-6 w-full">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="flex cursor-pointer" onClick={toggleToSignInForm}>
            {isSignInForm
              ? " New to Netflix? Sign Up Now"
              : "Already Registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;
