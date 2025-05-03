import { useDispatch } from "react-redux";
import { Products } from "./components/products";
import { IFinalConfirmation } from "./types";
import { appSlice } from "../../../../helpers/features/appSlice";
import { OrderSteps_Enum } from "../../../../helpers/features/types";
import { UserInfo } from "./components/userInfo";

export const FinalConfirmation = ({
  courierCompany,
  products,
  receiveDate,
  receiverInfo,
  userInfo,
}: IFinalConfirmation) => {
  const dispatch = useDispatch();

  const editCallback = (step: OrderSteps_Enum) => {};

  return (
    <div className="w-full">
      <Products data={products} editCallback={editCallback} />
      <UserInfo data={userInfo} editCallback={editCallback} />
    </div>
  );
};
