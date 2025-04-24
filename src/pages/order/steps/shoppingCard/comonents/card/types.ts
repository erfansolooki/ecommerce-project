import { IShoppingCard } from "../../../../../../helpers/features/types";
import { Dispatch, SetStateAction } from "react";

export interface ICard {
  data: IShoppingCard;
  setTempProductData: Dispatch<SetStateAction<IShoppingCard>>;
}
