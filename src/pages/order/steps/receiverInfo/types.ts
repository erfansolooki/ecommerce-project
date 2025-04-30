import { IReceiverInfo } from "../../../../helpers/features/types";

export type IReceiverInfoForm = {
  prevPageCallBack: () => void;
  nextStepCallBack: (data: IReceiverInfo) => void;
  initialData: IReceiverInfo;
};

export type IReceiverInfoFormContextType = {
  children: React.ReactNode;
};
