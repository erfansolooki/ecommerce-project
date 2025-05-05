import { ReactComponent as SuccessIcon } from "./icons/success.svg";
import { ISuccessPayment } from "./types";

export const SuccessPayment = ({ submitCallback }: ISuccessPayment) => {
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <div>
        <SuccessIcon />
      </div>

      <div className="my-8 font-semibold text-xl">
        Thanks for your purchase !
      </div>

      <button
        onClick={submitCallback}
        className="bg-indigo-600 rounded-full w-40 py-3
      cursor-pointer hover:opacity-85"
      >
        Back Home
      </button>
    </div>
  );
};
