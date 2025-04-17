import { TbCurrencyDollar } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { IProductCard } from "./types";

export const ProductCard = ({ data, onClick }: IProductCard) => {
  return (
    <div
      onClick={() => onClick(data)}
      className="bg-[#232327] rounded-3xl cursor-pointer flex w-[430px]"
    >
      <div>
        <img src={data.image} alt="" />
      </div>

      <div className="flex justify-center items-start flex-col px-2">
        <div className="text-[13px] font-medium">{data.caption}</div>

        <div className="text-[12px] py-4 text-[#C4C4C4]">
          {data.description}
        </div>

        <div className="flex items-center justify-between w-full">
          <div className="flex justify-center items-center">
            <div>
              <TbCurrencyDollar size={20} />
            </div>

            <div className="text-base">{data.price}</div>
          </div>

          <div>
            <CiHeart size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};
