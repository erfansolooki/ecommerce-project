import { OrderSteps_Enum } from "../../../../../../helpers/features/types";
import { Header } from "../header";
import { CourierCompany } from "./components/courierCompany";
import { DeliveryDate } from "./components/deliveryDate";
import { IDeliveryDate } from "./types";

export const DeliveryDateAndCourierCompany = ({
  courierCompany,
  deliveryTime,
  editCallback,
}: IDeliveryDate) => {
  return (
    <div className="py-4">
      <Header
        callback={() => {
          editCallback(OrderSteps_Enum.DeliveryTime);
        }}
        caption="Delivery Date & Courier Company"
      />

      <div className="flex justify-between items-center gap-4 py-4">
        <DeliveryDate data={deliveryTime} />

        <CourierCompany data={courierCompany} />
      </div>
    </div>
  );
};
