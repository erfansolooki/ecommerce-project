import React, { useState } from "react";
import { ISearchableDropdown, IOption } from "./types";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const SearchableDropdown: React.FC<ISearchableDropdown> = ({
  options,
  placeholder,
  onSelect,
  label,
  icon,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (option: IOption) => {
    setSearchTerm(option.label);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="relative w-80 text-white">
      <label className="text-sm pb-1 font-semibold text-white">{label}</label>
      <div
        className="flex items-center border border-gray-500 
        rounded-full px-4 cursor-text"
        onClick={() => setIsOpen(true)}
      >
        {icon}
        <input
          className="bg-transparent outline-none text-gray-600
           w-full placeholder-gray-400 py-3 border-gray-300"
          placeholder={placeholder || "Enter your first name"}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsOpen(true)}
        />
        <ChevronDownIcon className="w-5 h-5 text-gray-400" />
      </div>

      {isOpen && (
        <ul
          className="absolute z-10 mt-1 w-full bg-[#151515]
         border border-gray-600 rounded-3xl max-h-40
        overflow-y-auto shadow-lg"
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <li
                key={option.value}
                onClick={() => handleSelect(option)}
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              >
                {option.label}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">No results</li>
          )}
        </ul>
      )}
    </div>
  );
};

export { SearchableDropdown };
