import React, { useContext } from "react";
import AuthContext from "../context/auth-context";
import { Navigate } from "react-router-dom";
import { UserRole } from "../lib/enum";

type PrivateRouteProps = {
  children: React.ReactNode;
  role: UserRole;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, role }) => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext is not defined");
  }

  const { user } = authContext;

  if (!user) {
    return <Navigate to={"/"} />;
  }

  if (user.role !== role) {
    return user.role === UserRole.ADMIN ? (
      <Navigate to={"/admin-panel"} />
    ) : (
      <Navigate to={"/student"} />
    );
  }

  return <>{children}</>;
};

export default PrivateRoute;
