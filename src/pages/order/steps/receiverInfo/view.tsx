import { ActionButtons } from "../../components/actionButtons";
import { SearchableDropdown } from "../../components/dropdown/view";
import { useState } from "react";

export const ReceiverInfo = () => {
  const nameOptions = [
    { value: "john", label: "John" },
    { value: "jane", label: "Jane" },
    { value: "doe", label: "Doe" },
  ];
  return (
    <div>
      <SearchableDropdown
        options={nameOptions}
        onSelect={(option) => console.log("Selected:", option)}
      />

      <ActionButtons nextStepCallBack={() => {}} prevStepCallBack={() => {}} />
    </div>
  );
};
