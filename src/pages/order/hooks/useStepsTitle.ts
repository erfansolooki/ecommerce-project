import { useSelector } from "react-redux";
import { RootState } from "../../../helpers/features/store";
import { OrderSteps_Enum } from "../../../helpers/features/types";
export const useStepsTitle = () => {
  const currentStep = useSelector((state: RootState) => state.app.currentStep);

  switch (currentStep) {
    case OrderSteps_Enum.ShoppingCart:
      return "Shopping Cart";
    case OrderSteps_Enum.UserInfo:
      return "User Information";
    case OrderSteps_Enum.ReceiverInfo:
      return "Receiver Information";
    case OrderSteps_Enum.DeliveryTime:
      return "Delivery Time";
    case OrderSteps_Enum.FinalConfirmation:
      return "Final Confirmation";
    case OrderSteps_Enum.SuccessPayment:
      return "Success Payment";
    default:
      return "Unknown Step";
  }
};
