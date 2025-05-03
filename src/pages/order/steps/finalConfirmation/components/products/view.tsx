import { OrderSteps_Enum } from "../../../../../../helpers/features/types";
import { Header } from "../header";
import { IProdcuts } from "./types";

export const Products = ({ data, editCallback }: IProdcuts) => {
  return (
    <div>
      <Header
        callback={() => editCallback(OrderSteps_Enum.ShoppingCart)}
        caption="Purchased Products"
      />
      productData
    </div>
  );
};
