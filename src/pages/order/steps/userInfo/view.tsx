import UserInfoNamespace from "./namespace";
import { UserIcon } from "@heroicons/react/24/outline";
import { ActionButtons } from "../../components/actionButtons";

export const UserInfo = () => {
  return (
    <UserInfoNamespace>
      <div className="flex flex-col gap-y-4 w-80">
        <UserInfoNamespace.FormTextfield
          Icon={UserIcon}
          label="FirstName"
          placeholder="Enter your first name"
          value=""
          onChange={() => {}}
        />

        <UserInfoNamespace.FormTextfield
          Icon={UserIcon}
          label="LastName"
          placeholder="Enter your last name"
          value=""
          onChange={() => {}}
        />

        <UserInfoNamespace.FormTextfield
          Icon={UserIcon}
          label="PhoneNumber"
          placeholder="Enter your phone number"
          value=""
          onChange={() => {}}
        />

        <UserInfoNamespace.FormTextfield
          Icon={UserIcon}
          label="Email"
          placeholder="Enter your email"
          value=""
          onChange={() => {}}
        />
      </div>

      <ActionButtons nextStepCallBack={() => {}} prevStepCallBack={() => {}} />
    </UserInfoNamespace>
  );
};
