import { useEffect, useState } from "react";
import { IReceiveDate, IReceiveDateCard } from "./types";
import getNext7Days from "./utils/formatDate";
import Slider from "react-slick";
import { ISelectedReceiveDate } from "../../../../../../helpers/features/types";

const ReceiveDateCard = ({ date, isSelected, onClick }: IReceiveDateCard) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-center flex-col 
    gap-y-2 border rounded-xl w-28 h-18 cursor-pointer hover:border-white transition-all
    ${isSelected ? "border-indigo-500" : "border-[#424242]"}`}
    >
      <div className="flex gap-1">
        <p>{date.month}</p>-<p>{date.day}</p>
      </div>

      <p>{date.weekday}</p>
    </div>
  );
};

export const ReceiveDate = ({
  initialData,
  selectedDateCallback,
}: IReceiveDate) => {
  const [selectedCard, setSelectedCard] = useState<ISelectedReceiveDate>(null!);
  const days: ISelectedReceiveDate[] = getNext7Days();

  useEffect(() => {
    initialData && setSelectedCard(initialData);
  }, [initialData]);

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

  return (
    <div className="border-b border-[#424242] p-3">
      <div className="mb-4">Receive Date</div>
      <div>
        <Slider {...settings}>
          {days.map((day, idx) => (
            <ReceiveDateCard
              key={idx}
              date={day}
              isSelected={selectedCard?.day === day.day}
              onClick={() => {
                setSelectedCard(day);
                selectedDateCallback(day);
              }}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};
