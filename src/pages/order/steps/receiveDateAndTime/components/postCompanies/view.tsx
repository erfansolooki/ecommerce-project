import { ICourierCompanyCard, IPostCompanies } from "./types";
import { TbCurrencyDollar } from "react-icons/tb";
import { courierCompanies } from "./data.json";
import Slider from "react-slick";
import { useState } from "react";
import { ICourierCompany } from "../../../../../../helpers/features/types";

const CourierCompanyCard = ({
  data,
  onClick,
  isSelected,
}: ICourierCompanyCard) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-center flex-col
        border rounded-xl h-18 w-32 cursor-pointer hover:border-white 
      ${isSelected ? "border-indigo-500" : "border-[#424242]"}`}
    >
      <div>{data?.caption}</div>

      <div className="flex items-center">
        <TbCurrencyDollar size={18} />
        <div>{data?.price}</div>
      </div>
    </div>
  );
};

export const PostCompanies = ({
  initialData,
  selectedCourierCompanyCallBack,
}: IPostCompanies) => {
  const [selectedCard, setSelectedCard] = useState<ICourierCompany>(null!);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.85,
    slidesToScroll: 1.5,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.75,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!initialData?.selectedDate) {
    return (
      <div className="py-4">
        Courier Companies
        <p className="text-center py-8 text-[#797979]">
          Select Your Receive Date To See Courier Companies!
        </p>
      </div>
    );
  }

  return (
    <div className="py-4">
      Courier Companies
      <Slider {...settings} className="py-4">
        {courierCompanies.map((item) => (
          <CourierCompanyCard
            data={item}
            onClick={() => {
              setSelectedCard(item);
              selectedCourierCompanyCallBack(item);
            }}
            isSelected={selectedCard?.id === item.id}
          />
        ))}
      </Slider>
    </div>
  );
};
