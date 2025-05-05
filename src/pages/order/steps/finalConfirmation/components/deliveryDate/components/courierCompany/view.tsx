import { ICourierCompanySection } from "./types";

export const CourierCompany = ({ data }: ICourierCompanySection) => {
  return (
    <div className="border border-gray-300 rounded-4xl p-4 w-full text-center">
      {data?.caption}
    </div>
  );
};
