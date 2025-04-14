import { IProductData } from "../../../../helpers/features/types";

export interface IProductCard {
  data: IProductData;
  onClick: (data: IProductData) => void;
}
