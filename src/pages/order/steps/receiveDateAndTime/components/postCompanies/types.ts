import { ICourierCompany } from "../../../../../../helpers/features/types";
import { IReceiveDateAndCourierCompanyInitialData } from "../../types";

export interface IPostCompanies {
  initialData: IReceiveDateAndCourierCompanyInitialData;
  selectedCourierCompanyCallBack: (data: ICourierCompany) => void;
}

export interface ICourierCompanyCard {
  data: ICourierCompany;
  onClick: () => void;
  isSelected: boolean;
}
