import { Outlet } from "react-router-dom";
import { Header } from "./components/header";

export const Layout = () => {
  return (
    <div className="max-w-[700px] mx-auto pt-20">
      <Header />

      <Outlet />
    </div>
  );
};
