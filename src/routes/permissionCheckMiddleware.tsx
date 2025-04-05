import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../helpers/features/store";
import { useMatches } from "react-router-dom";

export const PermissionCheckMiddleware = () => {
  const [isChecked, setIsChecked] = useState<boolean | undefined>(undefined);

  const userPermissions = useSelector((state: RootState) => state.app);

  const routesData = useMatches();

  return <div> PermissionCheckMiddleware</div>;
};
