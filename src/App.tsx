import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Authentication from "./pages/auth/auth";
import { useEffect } from "react";
import AdminPanel from "./pages/admin/admin-panel";
import PrivateRoute from "./private/private-route";
import { AuthProvider } from "./context/auth-context";
import StudentPanel from "./pages/student/student-panel";
import Registration from "./pages/registration/register";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/register" element={<Registration />} />

          <Route
            path="/admin-panel"
            element={
              <PrivateRoute>
                <AdminPanel />
              </PrivateRoute>
            }
          />
          <Route
            path="/student"
            element={
              <PrivateRoute>
                <StudentPanel />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
