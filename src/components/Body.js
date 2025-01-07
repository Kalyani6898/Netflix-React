import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Error";
import Login from "../components/Login";
import Browse from "../components/Browse";
import Demo from "./Demo";
const Body = () => {
  const appRoute = createBrowserRouter([
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/error",
      element: <Error />,
    },
    {
      path: "/demo",
      element: <Demo />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  );
};

export default Body;
