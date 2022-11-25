import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
const PrivateRoute = () => {
  const isAuth = localStorage.getItem("token");
  const user=useSelector(state=>state.user?.user)
  return (isAuth && user?.isAdmin) ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;