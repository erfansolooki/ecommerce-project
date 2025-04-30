import { createContext, useContext } from "react";
import { InputWithIcon } from "../../components/inputWithIcon";
import { IReceiverInfoFormContextType } from "./types";
import { SearchableDropdown } from "../../components/dropdown/view";
const ReceiverInfoFormContext = createContext({});

const ReceiverInfoNamespace = ({ children }: IReceiverInfoFormContextType) => {
  return (
    <ReceiverInfoFormContext.Provider value={{}}>
      {children}
    </ReceiverInfoFormContext.Provider>
  );
};

export const useRecieverInfoFormContext = () => {
  const context = useContext(ReceiverInfoFormContext);
  if (!context) {
    throw new Error(
      "useRecieverInfoFormContext must be used within a ReceiverInfoProvider"
    );
  }

  return context;
};

ReceiverInfoNamespace.FormTextfield = InputWithIcon;
ReceiverInfoNamespace.FormDropdown = SearchableDropdown;

export default ReceiverInfoNamespace;
