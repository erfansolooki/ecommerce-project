import { useState } from "react";
import { Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const [isChecking, _] = useState(false);
  // const [isSignIn, setIsSignIn] = useState(false);

  if (isChecking) {
    return <>Loading ...</>;
  }

  return (
    <>
      <Outlet />
    </>
  );
};
