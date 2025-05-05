import {
  ICourierCompany,
  IReceiverInfo,
  ISelectedReceiveDate,
  IShoppingCard,
  IUserInfo,
} from "../../../../helpers/features/types";

export interface IFinalConfirmation {
  products: Array<IShoppingCard>;
  userInfo: IUserInfo;
  receiverInfo: IReceiverInfo;
  courierCompany: ICourierCompany;
  receiveDate: ISelectedReceiveDate;
  submitCallback: () => void;
}
