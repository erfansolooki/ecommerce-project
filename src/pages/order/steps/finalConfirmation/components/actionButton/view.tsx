import { IActionButton } from "./types";
import { TbCurrencyDollar } from "react-icons/tb";

export const ActionButton = ({ submitCallback, totalPrice }: IActionButton) => {
  return (
    <button
      onClick={submitCallback}
      className="bg-indigo-600 w-full rounded-2xl flex justify-center items-center
      gap-3 py-2 my-1 cursor-pointer hover:opacity-85"
    >
      <div>Pay</div>

      <div className="flex items-center">
        <div>{totalPrice ?? 0}</div>

        <div>
          <TbCurrencyDollar />
        </div>
      </div>
    </button>
  );
};
