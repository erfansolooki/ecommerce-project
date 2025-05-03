import { TbCurrencyDollar } from "react-icons/tb";
import { IPrice } from "./types";

export const Price = ({ delveryPrice, productsPrice }: IPrice) => {
  const Prices = [
    {
      caption: "Products",
      price: productsPrice,
    },
    {
      caption: "Delivery",
      price: delveryPrice,
    },
    {
      caption: "Discount",
      price: 0,
    },
  ];

  return (
    <div className="bg-[#232327] shadow-md flex flex-col rounded-2xl w-full p-4">
      {Prices?.map((price) => (
        <div className="flex justify-between items-center">
          <div>{price?.caption}</div>
          <div className="flex items-center text-white">
            <span>
              <TbCurrencyDollar />
            </span>
            <span>{price?.price ?? 0}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
