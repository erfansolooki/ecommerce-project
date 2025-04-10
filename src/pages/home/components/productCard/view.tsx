import { TbCurrencyDollar } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";

export const ProductCard = () => {
  return (
    <div className="bg-[#232327] rounded-2xl">
      <div></div>

      <div>
        <div>Snopy Headphone</div>

        <div>Snopy SN- BT96 Pretty Back Bluetooth Headphone</div>

        <div>
          <div>
            <div>
              <TbCurrencyDollar />
            </div>

            <div>6599</div>
          </div>

          <div>
            <CiHeart />
          </div>
        </div>
      </div>
    </div>
  );
};
