import { ISelectedReceiveDate } from "../../../../../../helpers/features/types";

export interface IReceiveDateCard {
  date: ISelectedReceiveDate;
  isSelected: boolean;
  onClick: () => void;
}

export interface IReceiveDate {
  initialData: ISelectedReceiveDate;
  selectedDateCallback: (date: ISelectedReceiveDate) => void;
}
