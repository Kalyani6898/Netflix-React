import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "../components/Login";
import Browse from "../components/Browse";
const Body = () => {
  const appRoute = createBrowserRouter([
    {
      path: "browse",
      element: <Browse />,
    },
    {
      path: "/",
      element: <Login />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  );
};

export default Body;
