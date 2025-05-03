import { OrderSteps_Enum } from "../../../../../../helpers/features/types";
import { Header } from "../header";
import { IUserInfoSection } from "./types";

export const UserInfo = ({ data, editCallback }: IUserInfoSection) => {
  return (
    <div>
      <Header
        callback={() => editCallback(OrderSteps_Enum.UserInfo)}
        caption="User Info"
      />
      UserInfo
    </div>
  );
};
