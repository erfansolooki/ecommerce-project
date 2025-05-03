import {
  IUserInfo,
  OrderSteps_Enum,
} from "../../../../../../helpers/features/types";

export interface IUserInfoSection {
  data: IUserInfo;
  editCallback: (step: OrderSteps_Enum) => void;
}
