import { useEffect, useState } from "react";
import { IReceiverInfo } from "../../../../../helpers/features/types";

export const useOperation = (initialData: IReceiverInfo) => {
  const [formData, setFormData] = useState<IReceiverInfo>({
    address: "",
    city: "",
    province: "",
    postalCode: "",
  });
  const [isFormCompleteState, setIsFormCompleteState] = useState(false);

  function handleChange<K extends keyof IReceiverInfo>(
    key: K,
    value: IReceiverInfo[K]
  ) {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function isFormComplete<T extends Record<string, any>>(data: T): boolean {
    return Object.values(data).every(
      (value) => value !== null && value !== undefined && value !== ""
    );
  }

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }

    if (formData) {
      setIsFormCompleteState(isFormComplete(formData));
    }
  }, [initialData, formData]);

  return { formData, handleChange, isFormComplete: isFormCompleteState };
};
