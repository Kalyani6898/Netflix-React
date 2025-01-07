import React, { useRef, useState } from "react";
import Header from "../components/Header";
import { checkValidationData } from "../util/validate";

import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../util/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../util/userSlice";
import { USER_AVATAR } from "../util/constant";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleToSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    document.getElementById("create-course-form").reset();
  };

  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidationData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message === null) {
      //Sign in/Sign up
      if (message) return;
      if (!isSignInForm) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            navigate("/browse");
            updateProfile(auth.currentUser, {
              displayName: name.current.value,
              photoURL: USER_AVATAR,
            })
              .then(() => {
                const { uId, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uId: uId,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
                // navigate("/browse");
              })
              .catch((error) => {
                setErrorMessage(error.message);
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            //dispatch(addUser({ email: email.current.value }));
            console.log(user);
            // navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      }
    }
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
        <form
          id="create-course-form"
          onSubmit={(e) => e.preventDefault()}
          className="p-12 bg-black absolute w-2/6 my-36 mx-auto right-0 left-0 rounded-lg text-white bg-opacity-70"
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              className="p-4 my-4 border-white bg-gray-700 w-full "
              type="text"
              placeholder="Full Name"
            ></input>
          )}
          <input
            ref={email}
            className="p-4 my-4 border-white bg-gray-700 w-full"
            type="text"
            placeholder="Email or Mobile number"
          ></input>
          <input
            ref={password}
            className="p-4 my-4 border-white bg-gray-700 w-full"
            type="password"
            placeholder="Password"
          ></input>
          <p className="text-red-600 font-bold text-lg">{errorMessage}</p>
          <button
            className="bg-red-600 rounded-lg p-4 my-6 w-full"
            onClick={() => {
              handleButtonClick();
            }}
          >
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
