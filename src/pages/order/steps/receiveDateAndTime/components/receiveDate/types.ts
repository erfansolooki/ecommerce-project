export interface IReceiveDateCard {
  date: DayInfo;
  isSelected: boolean;
  onClick: () => void;
}

export interface IReceiveDate {
  initialData: DayInfo;
  selectedDateCallback: (date: DayInfo) => void;
}

export interface DayInfo {
  day: number;
  month: string;
  weekday: string;
}
