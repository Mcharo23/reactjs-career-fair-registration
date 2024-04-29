import React, { useContext } from "react";
import AuthContext from "../context/auth-context";
import { Navigate } from "react-router-dom";
import { UserRole } from "../lib/enum";

type PrivateRouteProps = {
  children: React.ReactNode;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext is not defined");
  }

  const { user, logoutUser } = authContext;

  if (!user) {
    logoutUser();
    return <Navigate to={"/"} />;
  }

  const isStudentRoute = window.location.pathname.startsWith("/student");
  const isAdminRoute = window.location.pathname.startsWith("/admin-panel");

  if (
    (isStudentRoute && user.role === UserRole.ADMIN) ||
    (isAdminRoute && user.role === UserRole.STUDENT)
  ) {
    logoutUser();
    return <Navigate to={"/"} />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
