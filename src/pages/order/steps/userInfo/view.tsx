import UserInfoNamespace from "./namespace";
import { UserIcon } from "@heroicons/react/24/outline";
import { ActionButtons } from "../../components/actionButtons";

export const UserInfo = () => {
  return (
    <UserInfoNamespace>
      <div className="flex flex-col gap-y-4 w-80">
        <UserInfoNamespace.FormTextfield
          Icon={UserIcon}
          label="Name"
          placeholder="Enter your name"
          value=""
          onChange={() => {}}
        />

        <UserInfoNamespace.FormTextfield
          Icon={UserIcon}
          label="Email"
          placeholder="Enter your Email"
          value=""
          onChange={() => {}}
        />

        <UserInfoNamespace.FormTextfield
          Icon={UserIcon}
          label="PhoneNumber"
          placeholder="Enter your phoneNumber"
          value=""
          onChange={() => {}}
        />

        <UserInfoNamespace.FormTextfield
          Icon={UserIcon}
          label="Address"
          placeholder="Enter your address"
          value=""
          onChange={() => {}}
        />
      </div>

      <ActionButtons nextStepCallBack={() => {}} prevStepCallBack={() => {}} />
    </UserInfoNamespace>
  );
};
