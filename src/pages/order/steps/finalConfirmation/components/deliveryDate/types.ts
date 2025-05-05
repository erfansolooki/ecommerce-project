import {
  ICourierCompany,
  ISelectedReceiveDate,
  OrderSteps_Enum,
} from "../../../../../../helpers/features/types";

export interface IDeliveryDate {
  deliveryTime: ISelectedReceiveDate;
  courierCompany: ICourierCompany;
  editCallback: (step: OrderSteps_Enum) => void;
}
