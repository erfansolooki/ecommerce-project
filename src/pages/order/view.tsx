import { Stepper } from "./components/stepper";
import { UserInfo } from "./steps/userInfo";
import { Header } from "./components/header";

export const Order = () => {
  return (
    <div
      className="border border-[#424242] flex flex-col justify-center items-center 
    rounded-4xl h-[calc(100vh-80px)] overflow-y-auto"
    >
      <Stepper currentStep={1} totalSteps={6} progressPercent={50} />
      <Header title="User Information" />
      <UserInfo />
    </div>
  );
};
