import {
  IReceiverInfo,
  OrderSteps_Enum,
} from "../../../../../../helpers/features/types";

export type IUserInfoFormContextType = {
  children: React.ReactNode;
};

export interface IDeliveryInfoSection {
  data: IReceiverInfo;
  editCallback: (step: OrderSteps_Enum) => void;
}
