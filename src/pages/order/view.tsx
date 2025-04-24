import { Stepper } from "./components/stepper";
import { UserInfo } from "./steps/userInfo";
import { Header } from "./components/header";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../helpers/features/store";
import { ShoppingCard } from "./steps/shoppingCard";
import { useStepsTitle } from "./hooks/useStepsTitle";
import { appSlice } from "../../helpers/features/appSlice";
import { OrderSteps_Enum } from "../../helpers/features/types";
import { HOME_ROUTE } from "../../routes/routesVar";
import { useNavigate } from "react-router-dom";
export const Order = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isUserLoggedIn = useSelector(
    (state: RootState) => state.app.isUserLoggedIn
  );

  const shoppingCart = useSelector(
    (state: RootState) => state.app.shoppingCart
  );

  const currentStep = useSelector((state: RootState) => state.app.currentStep);

  const stepsTitle = useStepsTitle();

  function nextStepCallBack() {
    switch (currentStep) {
      case OrderSteps_Enum.ShoppingCart:
        dispatch(appSlice.actions.setOrderStep(OrderSteps_Enum.UserInfo));
        break;
    }
  }

  function prevStepCallBack() {
    switch (currentStep) {
      case OrderSteps_Enum.ShoppingCart:
        navigate(HOME_ROUTE);
        break;
      case OrderSteps_Enum.UserInfo:
        dispatch(appSlice.actions.setOrderStep(OrderSteps_Enum.ShoppingCart));
        break;
    }
  }

  const currentStepCallBack = () => {
    switch (currentStep) {
      case OrderSteps_Enum.ShoppingCart:
        return (
          <ShoppingCard
            productData={shoppingCart}
            updateShoppingCart={(data) => {
              dispatch(appSlice.actions.setShoppingCart(data));
            }}
            prevPageCallBack={prevStepCallBack}
            nextStepCallBack={nextStepCallBack}
          />
        );

      case OrderSteps_Enum.UserInfo:
        return <UserInfo />;

      default:
        break;
    }
  };

  return (
    <div
      className="border border-[#424242] flex flex-col justify-center items-center 
    rounded-4xl h-[calc(100vh-96px)] overflow-y-auto px-4"
    >
      <div className="border-b w-full border-b-[#424242] py-10">
        <Stepper
          currentStep={currentStep}
          totalSteps={isUserLoggedIn ? 5 : 6}
          progressPercent={50}
        />
      </div>

      <div className="pt-6 h-full flex flex-col justify-start items-center relative w-full">
        <div className="pb-6">
          <Header title={stepsTitle} />
        </div>

        {currentStepCallBack()}
      </div>
    </div>
  );
};
