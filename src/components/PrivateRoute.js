import { useAuth } from "../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
export default function PrivateRoute() {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}
