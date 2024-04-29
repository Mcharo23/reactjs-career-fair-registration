import { useNavigate } from "react-router-dom";

const useCustomNavigation = () => {
  const navigate = useNavigate();

  const navigateAdminPanel = () => {
    navigate("/admin-panel", { replace: false });
  };

  const navigateStudentPanel = () => {
    navigate("/student", { replace: false });
  };

  const navigateToRegister = () => {
    navigate("/register", { replace: true });
  };

  const logout = () => {
    navigate("/", { replace: true });
  };

  return {
    navigateAdminPanel,
    logout,
    navigateStudentPanel,
    navigateToRegister,
  };
};

export default useCustomNavigation;
