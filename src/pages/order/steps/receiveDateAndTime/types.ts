import {
  ICourierCompany,
  ISelectedReceiveDate,
} from "../../../../helpers/features/types";

export interface IReceiveDateAndCourierCompany {
  data: IReceiveDateAndCourierCompanyInitialData;
  nextStepCallback: (data: IReceiveDateAndCourierCompanyInitialData) => void;
  prevStepCallback: () => void;
}

export interface IReceiveDateAndCourierCompanyInitialData {
  selectedDate: ISelectedReceiveDate;
  selectedCompany: ICourierCompany;
}
