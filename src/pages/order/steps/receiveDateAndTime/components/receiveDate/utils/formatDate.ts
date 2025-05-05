import { ISelectedReceiveDate } from "../../../../../../../helpers/features/types";

const getNext7Days = (): ISelectedReceiveDate[] => {
  const result: ISelectedReceiveDate[] = [];
  const today = new Date();
  today.setDate(today.getDate() + 1); // Start from tomorrow

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const weekday = date.toLocaleString("en-US", { weekday: "long" });

    result.push({ day, month, weekday });
  }

  return result;
};

export default getNext7Days;
