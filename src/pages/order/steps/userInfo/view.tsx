import UserInfoNamespace from "./namespace";
import { UserIcon } from "@heroicons/react/24/outline";
import { ActionButtons } from "../../components/actionButtons";
import { IUserInfoForm } from "./types";
import { useOperation } from "./hooks/useOperation";

export const UserInfo = ({
  nextStepCallBack,
  prevPageCallBack,
  initialData,
}: IUserInfoForm) => {
  const { formData, handleChange } = useOperation(initialData);

  return (
    <UserInfoNamespace>
      <div className="flex flex-col gap-y-4 w-80">
        <UserInfoNamespace.FormTextfield
          Icon={UserIcon}
          label="FirstName"
          placeholder="Enter your first name"
          value={formData?.firstName}
          onChange={(value) => {
            handleChange("firstName", value);
          }}
        />

        <UserInfoNamespace.FormTextfield
          Icon={UserIcon}
          label="LastName"
          placeholder="Enter your last name"
          value={formData?.lastName}
          onChange={(value) => {
            handleChange("lastName", value);
          }}
        />

        <UserInfoNamespace.FormTextfield
          Icon={UserIcon}
          label="PhoneNumber"
          placeholder="Enter your phone number"
          value={formData?.phoneNumber}
          onChange={(value) => {
            handleChange("phoneNumber", value);
          }}
        />

        <UserInfoNamespace.FormTextfield
          Icon={UserIcon}
          label="Email"
          placeholder="Enter your email"
          value={formData?.email}
          onChange={(value) => {
            handleChange("email", value);
          }}
        />
      </div>

      <ActionButtons
        nextStepCallBack={() => nextStepCallBack(formData)}
        prevStepCallBack={prevPageCallBack}
      />
    </UserInfoNamespace>
  );
};
