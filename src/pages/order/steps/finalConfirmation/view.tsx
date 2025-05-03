import { Products } from "./components/products";
import { IFinalConfirmation } from "./types";

export const FinalConfirmation = ({
  courierCompany,
  products,
  receiveDate,
  receiverInfo,
  userInfo,
}: IFinalConfirmation) => {
  return (
    <div>
      <Products />
    </div>
  );
};
