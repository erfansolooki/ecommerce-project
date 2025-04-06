import { Navigate } from "react-router-dom";
import { BASE_ROUTE } from "./routesVar";

export const RedirectTo = () => {
  return <Navigate to={BASE_ROUTE} replace />;
};
