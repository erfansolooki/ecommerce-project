import { PrimaryButton } from "../primaryBtn";
import { SecondaryButton } from "../secondaryBtn";
import { IActionButtons } from "./types";

export const ActionButtons = ({
  nextStepCallBack,
  prevStepCallBack,
  hasNextStep = true,
  secondaryButtonText = "Previous Step",
  isDisbledPrimaryBtn,
}: IActionButtons) => (
  <div className="flex w-full bottom-4 max-w-[700px] justify-between items-center absolute">
    <SecondaryButton onClick={prevStepCallBack}>
      {secondaryButtonText}
    </SecondaryButton>

    {hasNextStep ? (
      <PrimaryButton onClick={nextStepCallBack} disabled={isDisbledPrimaryBtn}>
        Next Step
      </PrimaryButton>
    ) : (
      <></>
    )}
  </div>
);
