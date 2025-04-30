import { useEffect, useState } from "react";
import { ActionButtons } from "../../components/actionButtons";
import { Card } from "./comonents/card";
import { IShoppingCardStep } from "./types";
import { TotalPrice } from "./comonents/totalPrice";
import { IShoppingCard } from "../../../../helpers/features/types";

export const ShoppingCard = ({
  productData,
  updateShoppingCart,
  prevPageCallBack,
  nextStepCallBack,
}: IShoppingCardStep) => {
  const [tempProductData, setTempProductData] = useState<IShoppingCard>(null!);
  const [tempProductDataList, setTempProductDataList] = useState<
    IShoppingCard[]
  >([]);

  useEffect(() => {
    if (tempProductData?.quantity) {
      setTempProductDataList((prev) =>
        prev.map((item) =>
          item.productData.id === tempProductData?.productData.id
            ? { ...item, quantity: tempProductData?.quantity }
            : item
        )
      );
    } else {
      setTempProductDataList((prev) =>
        prev.filter(
          (item) => item.productData.id !== tempProductData?.productData.id
        )
      );
    }
  }, [tempProductData]);

  useEffect(() => {
    if (tempProductDataList.length > 0) {
      updateShoppingCart(tempProductDataList);
    }
  }, [tempProductDataList]);

  useEffect(() => {
    setTempProductDataList(productData);
  }, [productData]);

  const totalPrice = productData.reduce(
    (acc, item) => acc + item.productData.price * item.quantity,
    0
  );

  if (tempProductDataList.length === 0) {
    return (
      <div
        className="flex flex-col justify-center items-center gap-y-4 w-full 
      text-base text-gray-500 h-full"
      >
        No products in the shopping cart !
        <ActionButtons
          nextStepCallBack={() => {}}
          prevStepCallBack={prevPageCallBack}
          hasNextStep={false}
          secondaryButtonText="Go to Home"
        />
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-y-4 w-full">
      <div className="h-[calc(100vh-440px)] overflow-y-auto">
        {tempProductDataList?.map((item) => (
          <Card
            key={item.productData.id}
            data={item}
            setTempProductData={setTempProductData}
          />
        ))}
      </div>

      <TotalPrice totalPrice={totalPrice} />

      <ActionButtons
        nextStepCallBack={nextStepCallBack}
        prevStepCallBack={prevPageCallBack}
        secondaryButtonText="Go to Home"
      />
    </div>
  );
};
