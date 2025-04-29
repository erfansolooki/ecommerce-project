import { useEffect, useState } from "react";
import { IUserInfo } from "../../../../../helpers/features/types";

export const useOperation = (initialData: IUserInfo) => {
  const [formData, setFormData] = useState<IUserInfo>({
    email: null!,
    firstName: null!,
    lastName: null!,
    phoneNumber: null!,
  });
  const [isFormCompleteState, setIsFormCompleteState] = useState(false);

  function handleChange<K extends keyof IUserInfo>(
    key: K,
    value: IUserInfo[K]
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
