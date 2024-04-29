import React, { createContext, useState } from "react";
import { UserRole } from "../lib/enum";
import useCustomNavigation from "../global/function/navigation";
import { jwtDecode } from "jwt-decode";

export type userType = {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
};

type AuthContextType = {
  loginUnser: (values: {
    email: string;
    password: string;
  }) => Promise<string | null>;
  logoutUser: () => void;
  user: userType | null;
  authToken: string | null;
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;

type AuthProviderProp = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProp> = ({ children }) => {
  const { logout, navigateAdminPanel, navigateStudentPanel } =
    useCustomNavigation();

  const TOKEN = "token";

  const [authToken, setAuthToken] = useState<string | null>(
    () => localStorage.getItem(TOKEN) as string | null
  );
  const [user, setUser] = useState<userType | null>(() =>
    localStorage.getItem(TOKEN)
      ? jwtDecode(localStorage.getItem(TOKEN) as string)
      : null
  );
  const [loading, setLoading] = useState<boolean>(false);

  // const API_URL = process.env.REACT_APP_API_URL;

  const loginUnser = (values: {
    email: string;
    password: string;
  }): Promise<string | null> => {
    setLoading(true);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: values.email,
      password: values.password,
    });

    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    return fetch(`http://localhost:8080/career-fair/users/auth`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid credentials");
        }
        return response.json();
      })
      .then((result) => {
        // Handle successful
        setAuthToken(result.token);
        localStorage.setItem(TOKEN, JSON.stringify(result.token));
        const decodedUser: userType = jwtDecode(result.token);
        setUser(decodedUser);

        if (decodedUser.role === UserRole.ADMIN) {
          navigateAdminPanel();
        } else if (decodedUser.role === UserRole.STUDENT) {
          navigateStudentPanel();
        } else {
          logout();
        }
        return null; // No error, return null
      })
      .catch((error) => {
        console.error("Error:", error);
        if (error.message === "Invalid credentials") {
          return "Invalid credentials"; // Return error message
        } else {
          console.error("Unknown error occurred");
          return null; // No error, return null
        }
      });
  };

  const logoutUser = () => {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem(TOKEN);
    logout();
  };

  const contextData = {
    user: user,
    authToken: authToken,
    loginUnser: loginUnser,
    logoutUser: logoutUser,
    loading: loading,
    setLoading: setLoading,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
