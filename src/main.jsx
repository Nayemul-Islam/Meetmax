import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Component/Layout/Root";
import Home from "./Component/Feed//Home";
import Login from "./Component/Auth/Login";
import Register from "./Component/Auth/Register";
import AuthProvider from "./Component/Auth/AuthProvider";
import PrivateRoute from "./Component/Layout/PrivateRoute";
import ForgotPassword from "./Component/Auth/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home/>
          </PrivateRoute>
        ),
      },
      {
        path: "/signin",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/forgetpassword",
        element:<ForgotPassword/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
