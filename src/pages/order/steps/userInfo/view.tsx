import UserInfoNamespace from "./namespace";
import { UserIcon } from "@heroicons/react/24/outline";
import { PrimaryButton } from "../../components/primaryBtn";
import { SecondaryButton } from "../../components/secondaryBtn";
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
      <SecondaryButton>Previous Step</SecondaryButton>
      <PrimaryButton>Next Step</PrimaryButton>
    </UserInfoNamespace>
  );
};
