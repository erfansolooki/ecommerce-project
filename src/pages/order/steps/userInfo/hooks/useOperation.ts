import { useEffect, useState } from "react";
import { IUserInfo } from "../../../../../helpers/features/types";

export const useOperation = (initialData: IUserInfo) => {
  const [formData, setFormData] = useState<IUserInfo>(null!);

  function handleChange<K extends keyof IUserInfo>(
    key: K,
    value: IUserInfo[K]
  ) {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  return { formData, handleChange };
};
