import { ReceiveDate } from "./components/receiveDate";
import { PostCompanies } from "./components/postCompanies";
import { ActionButtons } from "../../components/actionButtons";

export const ReceiveDateAndTime = () => {
  return (
    <div className="releative h-full w-full">
      <ReceiveDate initialData={null!} selectedDateCallback={() => {}} />
      <PostCompanies />
      <ActionButtons nextStepCallBack={() => {}} prevStepCallBack={() => {}} />
    </div>
  );
};
