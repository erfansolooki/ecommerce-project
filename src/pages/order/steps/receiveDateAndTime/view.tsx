import { ReceiveDate } from "./components/receiveDate";
import { PostCompanies } from "./components/postCompanies";
import { ActionButtons } from "../../components/actionButtons";
import { useEffect, useState } from "react";
import {
  IReceiveDateAndCourierCompany,
  IReceiveDateAndCourierCompanyInitialData,
} from "./types";

export const ReceiveDateAndTime = ({
  data,
  nextStepCallback,
  prevStepCallback,
}: IReceiveDateAndCourierCompany) => {
  const [
    receiveDateAndCourierCompanyData,
    setrReceiveDateAndCourierCompanyData,
  ] = useState<IReceiveDateAndCourierCompanyInitialData>(null!);

  useEffect(() => {
    data && setrReceiveDateAndCourierCompanyData(data);
  }, [data]);

  return (
    <div className="releative h-full w-full">
      <ReceiveDate
        initialData={receiveDateAndCourierCompanyData?.selectedDate}
        selectedDateCallback={(selectedNewDate) => {
          setrReceiveDateAndCourierCompanyData((prev) => ({
            ...prev,
            selectedDate: selectedNewDate,
          }));
        }}
      />

      <PostCompanies
        initialData={receiveDateAndCourierCompanyData}
        selectedCourierCompanyCallBack={(selectedNewCourier) => {
          setrReceiveDateAndCourierCompanyData((prev) => ({
            ...prev,
            selectedCompany: selectedNewCourier,
          }));
        }}
      />

      <ActionButtons
        isDisbledPrimaryBtn={
          !receiveDateAndCourierCompanyData?.selectedCompany ||
          !receiveDateAndCourierCompanyData?.selectedDate
        }
        nextStepCallBack={() => {
          nextStepCallback(receiveDateAndCourierCompanyData);
        }}
        prevStepCallBack={prevStepCallback}
      />
    </div>
  );
};
