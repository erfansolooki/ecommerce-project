export interface IOption {
  label: string;
  value: string;
}

export interface ISearchableDropdown {
  options: IOption[];
  placeholder?: string;
  onSelect: (value: IOption) => void;
  label?: string;
  icon?: React.ReactNode;
}
