/* eslint-disable react/prop-types */
// PrivateRoute.jsx
import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  return !!localStorage.getItem("authToken");
};

function PrivateRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
