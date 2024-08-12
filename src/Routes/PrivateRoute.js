import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  return user ? (
    <Element />
  ) : (
    <Navigate to="/signup" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
