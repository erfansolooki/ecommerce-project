import {
  IShoppingCard,
  OrderSteps_Enum,
} from "../../../../../../helpers/features/types";

export interface IProdcuts {
  data: IShoppingCard[];
  editCallback: (step: OrderSteps_Enum) => void;
}
