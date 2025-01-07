import React, { useEffect } from "react";
import { auth } from "../util/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../util/userSlice";
import { LOGO } from "../util/constant";
const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uId, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uId: uId,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const signOutFun = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed Out");
      })
      .catch((err) => {
        console.log(err);
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img className="w-44" src={LOGO} alt="logo"></img>
      {user && (
        <div className="flex p-2">
          <img
            className="rounded-lg w-12 h-12"
            //src={user.photoURL}
            src={user?.photoURL}
            alt="user icon"
          ></img>
          <button
            className="text-white font-bold"
            onClick={() => {
              signOutFun();
            }}
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
