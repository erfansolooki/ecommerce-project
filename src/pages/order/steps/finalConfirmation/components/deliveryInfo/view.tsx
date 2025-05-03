import { OrderSteps_Enum } from "../../../../../../helpers/features/types";
import { Header } from "../header";
import { IDeliveryInfoSection } from "./types";
import ReceiverInfoNamespace from "./namespace";
import { MapPinIcon } from "@heroicons/react/24/outline";

export const DeliveryInfo = ({ data, editCallback }: IDeliveryInfoSection) => {
  return (
    <div className="border-b border-[#424242] py-4">
      <Header
        callback={() => editCallback(OrderSteps_Enum.ReceiverInfo)}
        caption="Delivery Info"
      />

      <ReceiverInfoNamespace>
        <div className="grid flex-col sm:grid-cols-2 gap-4 py-4">
          <ReceiverInfoNamespace.FormTextfield
            label="Province"
            placeholder="Select your province"
            Icon={MapPinIcon}
            value={data?.address}
            disabled
            onChange={() => {}}
          />

          <ReceiverInfoNamespace.FormTextfield
            label="City"
            placeholder="Select your city"
            Icon={MapPinIcon}
            value={data?.address}
            disabled
            onChange={() => {}}
          />

          <ReceiverInfoNamespace.FormTextfield
            label="Address"
            Icon={MapPinIcon}
            value={data?.address}
            placeholder="Enter your address"
            disabled
            onChange={() => {}}
          />

          <ReceiverInfoNamespace.FormTextfield
            label="Postal Code"
            Icon={MapPinIcon}
            disabled
            value={data?.postalCode}
            placeholder="Enter your postal code"
            onChange={() => {}}
          />
        </div>
      </ReceiverInfoNamespace>
    </div>
  );
};
