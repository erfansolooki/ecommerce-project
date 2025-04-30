import React from "react";
import { InputWithIconProps } from "./types";

export const InputWithIcon: React.FC<InputWithIconProps> = ({
  label,
  placeholder,
  value,
  onChange,
  Icon,
}) => {
  return (
    <div className="flex flex-col space-y-1 w-full max-w-xs">
      <label className="text-sm pb-1 font-semibold text-white">{label}</label>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-4 pr-10 py-3 rounded-full border border-gray-300
           text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <Icon className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
    </div>
  );
};
