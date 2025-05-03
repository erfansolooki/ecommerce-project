import { Stepper } from "./components/stepper";
import { UserInfo } from "./steps/userInfo";
import { Header } from "./components/header";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../helpers/features/store";
import { ShoppingCard } from "./steps/shoppingCard";
import { useStepsTitle } from "./hooks/useStepsTitle";
import { appSlice } from "../../helpers/features/appSlice";
import {
  IReceiverInfo,
  IUserInfo,
  OrderSteps_Enum,
} from "../../helpers/features/types";
import { HOME_ROUTE } from "../../routes/routesVar";
import { useNavigate } from "react-router-dom";
import { ReceiverInfo } from "./steps/receiverInfo";
import { ReceiveDateAndTime } from "./steps/receiveDateAndTime";
import { IReceiveDateAndCourierCompanyInitialData } from "./steps/receiveDateAndTime/types";
import { FinalConfirmation } from "./steps/finalConfirmation";
import { SuccessPayment } from "./steps/successPayment";

export const Order = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    currentStep,
    isUserLoggedIn,
    shoppingCart,
    userInfo,
    receiverInfo,
    courierCompany,
    receiveDate,
  } = useSelector((state: RootState) => state.app);

  const stepsTitle = useStepsTitle();

  const handleSubmitUserInfo = (data: IUserInfo) => {
    dispatch(appSlice.actions.setUserInfo(data));
    nextStepCallBack();
  };

  const handleSubmitReceiverInfo = (data: IReceiverInfo) => {
    dispatch(appSlice.actions.setReceiverInfo(data));
    nextStepCallBack();
  };

  const handleSubmitReceiveData = (
    data: IReceiveDateAndCourierCompanyInitialData
  ) => {
    dispatch(appSlice.actions.setCourierCompany(data.selectedCompany));
    dispatch(appSlice.actions.setReceiveDate(data.selectedDate));
    nextStepCallBack();
  };

  function nextStepCallBack() {
    switch (currentStep) {
      case OrderSteps_Enum.ShoppingCart:
        dispatch(appSlice.actions.setOrderStep(OrderSteps_Enum.UserInfo));
        break;

      case OrderSteps_Enum.UserInfo:
        dispatch(appSlice.actions.setOrderStep(OrderSteps_Enum.ReceiverInfo));
        break;

      case OrderSteps_Enum.ReceiverInfo:
        dispatch(appSlice.actions.setOrderStep(OrderSteps_Enum.DeliveryTime));
        break;

      case OrderSteps_Enum.DeliveryTime:
        dispatch(
          appSlice.actions.setOrderStep(OrderSteps_Enum.FinalConfirmation)
        );
        break;

      case OrderSteps_Enum.FinalConfirmation:
        dispatch(appSlice.actions.setOrderStep(OrderSteps_Enum.SuccessPayment));
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

      case OrderSteps_Enum.ReceiverInfo:
        dispatch(appSlice.actions.setOrderStep(OrderSteps_Enum.UserInfo));
        break;

      case OrderSteps_Enum.DeliveryTime:
        dispatch(appSlice.actions.setOrderStep(OrderSteps_Enum.ReceiverInfo));
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
        return (
          <UserInfo
            initialData={userInfo ?? null!}
            prevPageCallBack={prevStepCallBack}
            nextStepCallBack={handleSubmitUserInfo}
          />
        );

      case OrderSteps_Enum.ReceiverInfo:
        return (
          <ReceiverInfo
            initialData={receiverInfo ?? null!}
            prevPageCallBack={prevStepCallBack}
            nextStepCallBack={handleSubmitReceiverInfo}
          />
        );

      case OrderSteps_Enum.DeliveryTime:
        return (
          <ReceiveDateAndTime
            nextStepCallback={handleSubmitReceiveData}
            prevStepCallback={prevStepCallBack}
            data={{
              selectedCompany: courierCompany!,
              selectedDate: receiveDate!,
            }}
          />
        );

      case OrderSteps_Enum.FinalConfirmation:
        return (
          <FinalConfirmation
            submitCallback={nextStepCallBack}
            courierCompany={courierCompany ?? null!}
            products={shoppingCart ?? []}
            receiveDate={receiveDate ?? null!}
            receiverInfo={receiverInfo ?? null!}
            userInfo={userInfo ?? null!}
          />
        );

      case OrderSteps_Enum.SuccessPayment:
        return (
          <SuccessPayment
            submitCallback={() => {
              navigate(HOME_ROUTE);
            }}
          />
        );

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
          totalSteps={isUserLoggedIn ? 4 : 5}
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
