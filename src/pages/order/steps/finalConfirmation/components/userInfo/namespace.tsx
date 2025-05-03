import { createContext, useContext } from "react";
import { IUserInfoFormContextType } from "./types";
import { InputWithIcon } from "../../../../components/inputWithIcon";

const UserInfoFormContext = createContext({});

const UserInfoNamespace = ({ children }: IUserInfoFormContextType) => {
  return (
    <UserInfoFormContext.Provider value={{}}>
      {children}
    </UserInfoFormContext.Provider>
  );
};

export const useUserInfoFormContext = () => {
  const context = useContext(UserInfoFormContext);
  if (!context) {
    throw new Error(
      "useUserInfoFormContext must be used within a UserInfoProvider"
    );
  }

  return context;
};

UserInfoNamespace.FormTextfield = InputWithIcon;

export default UserInfoNamespace;
