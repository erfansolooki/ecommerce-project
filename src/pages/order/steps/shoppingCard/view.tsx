import { ActionButtons } from "../../components/actionButtons";
import { Card } from "./comonents/card";
import { IShoppingCardStep } from "./types";
import { TotalPrice } from "./comonents/totalPrice";
export const ShoppingCard = ({ productData }: IShoppingCardStep) => {
  if (productData.length === 0) {
    return (
      <div
        className="flex flex-col justify-center items-center gap-y-4 w-full 
      text-base text-gray-500 h-full"
      >
        No products in the shopping cart !
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-y-4 w-full">
      <div className="h-[calc(100vh-440px)] overflow-y-auto">
        {productData?.map((item) => (
          <Card key={item.productData.id} data={item} />
        ))}
      </div>

      <TotalPrice />

      <ActionButtons nextStepCallBack={() => {}} prevStepCallBack={() => {}} />
    </div>
  );
};
