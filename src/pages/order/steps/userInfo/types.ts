export type IUserInfoFormContextType = {
  children: React.ReactNode;
};

export interface IUserInfoForm {
  prevPageCallBack: () => void;
  nextStepCallBack: () => void;
}
