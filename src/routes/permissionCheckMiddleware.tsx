import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../helpers/features/store";
import { Outlet, useMatches } from "react-router-dom";

export const PermissionCheckMiddleware = () => {
  const [isChecked, setIsChecked] = useState<boolean | undefined>(undefined);

  const { userPermissions } = useSelector((state: RootState) => state.app);

  const routesData = useMatches();

  // check if user has access to the required permissions for the current route
  const checkModule = () => {
    if (!userPermissions.length) {
      setIsChecked(false);

      return;
    }

    const currentRoute = routesData.find(
      (route) =>
        route.pathname === window.location.pathname && Boolean(route?.handle)
    );

    const isAllowed = currentRoute?.handle?.permissions?.some((module) =>
      userPermissions.some((userModule) => userModule === module)
    );

    setIsChecked(isAllowed || !currentRoute?.handle?.permissions);
  };

  useEffect(() => {
    checkModule();
  }, [userPermissions]);

  if (isChecked === undefined) {
    return <>Loading . . .</>;
  }

  if (!isChecked) {
    return <>you do not have required permission to access this page</>;
  }

  return (
    <>
      <Outlet />
    </>
  );
};
