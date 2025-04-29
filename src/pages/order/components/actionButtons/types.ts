export interface IActionButtons {
  nextStepCallBack: () => void;
  prevStepCallBack: () => void;
  hasNextStep?: boolean;
  secondaryButtonText?: string;
  isDisbledPrimaryBtn?: boolean;
}
