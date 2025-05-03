import { OrderSteps_Enum } from "../../../../../../helpers/features/types";
import { Header } from "../header";
import { ProductCard } from "./components/productCard";
import { IProdcuts } from "./types";

export const Products = ({ data, editCallback }: IProdcuts) => {
  return (
    <div className="border-b border-[#424242]">
      <Header
        callback={() => editCallback(OrderSteps_Enum.ShoppingCart)}
        caption="Purchased Products"
      />

      {data.map((product) => (
        <ProductCard data={product} />
      ))}
    </div>
  );
};
