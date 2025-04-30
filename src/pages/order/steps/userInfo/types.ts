import { IUserInfo } from "../../../../helpers/features/types";

export type IUserInfoFormContextType = {
  children: React.ReactNode;
};

export interface IUserInfoForm {
  prevPageCallBack: () => void;
  nextStepCallBack: (data: IUserInfo) => void;
  initialData: IUserInfo;
}
