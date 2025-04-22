import { Card } from "./comonents/card";
import { IShoppingCardStep } from "./types";

export const ShoppingCard = ({ productData }: IShoppingCardStep) => {
  return (
    <div className="flex flex-col gap-y-4 w-full">
      {productData?.map((item) => (
        <Card key={item.productData.id} data={item} />
      ))}
    </div>
  );
};
