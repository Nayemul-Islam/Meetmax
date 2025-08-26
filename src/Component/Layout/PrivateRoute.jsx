import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading)
    return <span className="loading loading-spinner loading-xl"></span>;
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/signin"></Navigate>;
};

export default PrivateRoute;
