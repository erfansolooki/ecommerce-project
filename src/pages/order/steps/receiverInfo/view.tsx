import { ActionButtons } from "../../components/actionButtons";
import { MapPinIcon } from "@heroicons/react/24/outline";
import ReceiverInfoNamespace from "./namespace";
import {
  FarsCityOptions,
  IsfahanCityOptions,
  KhorasanRazaviCityOptions,
  TehranCityOptions,
} from "./data";
import { provinceOptions } from "./data";
import { useState } from "react";
import { IOption } from "../../components/dropdown/types";
import { IReceiverInfoForm } from "./types";
import { useOperation } from "./hooks/useOperation";

export const ReceiverInfo = ({
  prevPageCallBack,
  nextStepCallBack,
  initialData,
}: IReceiverInfoForm) => {
  const [cityOptions, setCityOptions] = useState<IOption[]>([]);
  const { formData, handleChange, isFormComplete } = useOperation(initialData);

  const handleProvinceChange = (option: IOption) => {
    switch (option.value) {
      case "Fars":
        setCityOptions(FarsCityOptions);
        break;
      case "Tehran":
        setCityOptions(TehranCityOptions);
        break;
      case "Khorasan Razavi":
        setCityOptions(KhorasanRazaviCityOptions);
        break;
      case "Isfahan":
        setCityOptions(IsfahanCityOptions);
        break;
      default:
        setCityOptions([]);
        break;
    }
  };

  return (
    <ReceiverInfoNamespace>
      <div className="flex flex-col gap-y-4 w-80">
        <ReceiverInfoNamespace.FormDropdown
          options={provinceOptions}
          label="Province"
          placeholder="Select your province"
          onSelect={(option) => {
            handleProvinceChange(option);
            handleChange("province", option.value);
          }}
        />

        <ReceiverInfoNamespace.FormDropdown
          options={cityOptions}
          label="City"
          placeholder="Select your city"
          onSelect={(option) => {
            handleChange("city", option.value);
          }}
        />

        <ReceiverInfoNamespace.FormTextfield
          label="Address"
          Icon={MapPinIcon}
          value={formData?.address}
          placeholder="Enter your address"
          onChange={(value) => {
            handleChange("address", value);
          }}
        />

        <ReceiverInfoNamespace.FormTextfield
          label="Postal Code"
          Icon={MapPinIcon}
          value={formData?.postalCode}
          placeholder="Enter your postal code"
          onChange={(value) => {
            handleChange("postalCode", value);
          }}
        />
      </div>

      <ActionButtons
        isDisbledPrimaryBtn={!isFormComplete}
        nextStepCallBack={() => {
          nextStepCallBack(formData);
        }}
        prevStepCallBack={prevPageCallBack}
      />
    </ReceiverInfoNamespace>
  );
};
