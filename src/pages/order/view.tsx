import { Stepper } from "./components/stepper";
import { UserInfo } from "./steps/userInfo";
import { Header } from "./components/header";
import { useSelector } from "react-redux";
import { RootState } from "../../helpers/features/store";

export const Order = () => {
  const isUserLoggedIn = useSelector(
    (state: RootState) => state.app.isUserLoggedIn
  );
  return (
    <div
      className="border border-[#424242] flex flex-col justify-center items-center 
    rounded-4xl h-[calc(100vh-96px)] overflow-y-auto px-4"
    >
      <div className="border-b w-full border-b-[#424242] py-10">
        <Stepper
          currentStep={1}
          totalSteps={isUserLoggedIn ? 5 : 6}
          progressPercent={50}
        />
      </div>

      <div className="pt-6 h-full flex flex-col justify-start items-center relative w-full">
        <div className="pb-6">
          <Header title="User Information" />
        </div>

        <UserInfo />
      </div>
    </div>
  );
};
