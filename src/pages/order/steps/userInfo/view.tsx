import UserInfoNamespace from "./namespace";
import { UserIcon } from "@heroicons/react/24/outline";
import { ActionButtons } from "../../components/actionButtons";

export const UserInfo = () => {
  return (
    <UserInfoNamespace>
      <UserInfoNamespace.FormTextfield
        Icon={UserIcon}
        label="Name"
        placeholder="Enter your name"
        value=""
        onChange={() => {}}
      />

      <ActionButtons nextStepCallBack={() => {}} prevStepCallBack={() => {}} />
    </UserInfoNamespace>
  );
};
