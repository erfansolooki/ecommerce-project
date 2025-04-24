import { IShoppingCard } from "../../../../helpers/features/types";

export interface IShoppingCardStep {
  productData: IShoppingCard[];
  updateShoppingCart: (data: IShoppingCard[]) => void;
}
