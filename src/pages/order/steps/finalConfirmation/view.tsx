import { useDispatch } from "react-redux";
import { Products } from "./components/products";
import { IFinalConfirmation } from "./types";
import { appSlice } from "../../../../helpers/features/appSlice";
import { OrderSteps_Enum } from "../../../../helpers/features/types";
import { UserInfo } from "./components/userInfo";
import { DeliveryInfo } from "./components/deliveryInfo";
import { DeliveryDateAndCourierCompany } from "./components/deliveryDate";
import { Price } from "./components/price";
import { ActionButton } from "./components/actionButton";

export const FinalConfirmation = ({
  courierCompany,
  products,
  receiveDate,
  receiverInfo,
  userInfo,
  submitCallback,
}: IFinalConfirmation) => {
  const dispatch = useDispatch();

  const editCallback = (step: OrderSteps_Enum) => {
    switch (step) {
      case OrderSteps_Enum.ShoppingCart:
        dispatch(appSlice.actions.setOrderStep(step));
        break;

      case OrderSteps_Enum.UserInfo:
        dispatch(appSlice.actions.setOrderStep(step));
        break;

      case OrderSteps_Enum.ReceiverInfo:
        dispatch(appSlice.actions.setOrderStep(step));
        break;

      case OrderSteps_Enum.DeliveryTime:
        dispatch(appSlice.actions.setOrderStep(step));
        break;

      default:
        break;
    }
  };

  const productsPrice = products.reduce(
    (acc, item) => acc + item.productData.price * item.quantity,
    0
  );

  return (
    <div className="w-full">
      <div className="overflow-y-auto px-2 h-[278px]">
        <Products data={products} editCallback={editCallback} />

        <UserInfo data={userInfo} editCallback={editCallback} />

        <DeliveryInfo data={receiverInfo} editCallback={editCallback} />

        <DeliveryDateAndCourierCompany
          courierCompany={courierCompany}
          deliveryTime={receiveDate}
          editCallback={editCallback}
        />
      </div>

      <div className="p-2">
        <Price
          delveryPrice={courierCompany?.price}
          productsPrice={productsPrice}
        />

        <ActionButton
          submitCallback={submitCallback}
          totalPrice={productsPrice + courierCompany?.price}
        />
      </div>
    </div>
  );
};
