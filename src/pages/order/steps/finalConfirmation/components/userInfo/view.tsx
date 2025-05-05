import { OrderSteps_Enum } from "../../../../../../helpers/features/types";
import { Header } from "../header";
import { IUserInfoSection } from "./types";
import UserInfoNamespace from "./namespace";
import { UserIcon } from "@heroicons/react/24/outline";

export const UserInfo = ({ data, editCallback }: IUserInfoSection) => {
  return (
    <div className="border-b border-[#424242] py-4">
      <Header
        callback={() => editCallback(OrderSteps_Enum.UserInfo)}
        caption="User Info"
      />

      <UserInfoNamespace>
        <div className="grid flex-col sm:grid-cols-2 gap-4 py-4">
          <UserInfoNamespace.FormTextfield
            Icon={UserIcon}
            disabled
            label="FirstName"
            placeholder="Enter your first name"
            value={data?.firstName}
            onChange={() => {}}
          />

          <UserInfoNamespace.FormTextfield
            disabled
            Icon={UserIcon}
            label="LastName"
            placeholder="Enter your last name"
            value={data?.lastName}
            onChange={() => {}}
          />

          <UserInfoNamespace.FormTextfield
            disabled
            Icon={UserIcon}
            label="PhoneNumber"
            placeholder="Enter your phone number"
            value={data?.phoneNumber}
            onChange={() => {}}
          />

          <UserInfoNamespace.FormTextfield
            disabled
            Icon={UserIcon}
            label="Email"
            placeholder="Enter your email"
            value={data?.email}
            onChange={() => {}}
          />
        </div>
      </UserInfoNamespace>
    </div>
  );
};
