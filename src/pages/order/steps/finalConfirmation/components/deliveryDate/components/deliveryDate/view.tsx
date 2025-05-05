import { IDeliveryDateSection } from "./types";

export const DeliveryDate = ({ data }: IDeliveryDateSection) => {
  return (
    <div className="border border-gray-300 rounded-4xl p-4 w-full flex justify-center gap-1.5">
      <span>{data?.month}</span>
      <span>{data?.day}</span>
      <span>{data?.weekday}</span>
    </div>
  );
};
