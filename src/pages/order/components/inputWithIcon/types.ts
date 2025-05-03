export interface InputWithIconProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  Icon: React.ElementType; // Dynamic icon component
  disabled?: boolean;
}
