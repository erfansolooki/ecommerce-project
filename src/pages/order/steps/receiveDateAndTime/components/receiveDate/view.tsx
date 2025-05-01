import { DayInfo, IReceiveDateCard } from "./types";
import getNext7Days from "./utils/formatDate";

const ReceiveDateCard = ({ date, isSelected, onClick }: IReceiveDateCard) => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex flex-col gap-y-2">
        <p>{date.day}</p>
        <p>{date.month}</p>
        <p>{date.weekday}</p>
      </div>
    </div>
  );
};

export const ReceiveDate = () => {
  const days: DayInfo[] = getNext7Days();

  console.log(days);

  return (
    <div>
      <ul>
        {days.map((day, idx) => (
          <ReceiveDateCard
            key={idx}
            date={day}
            isSelected={false}
            onClick={() => {}}
          />
        ))}
      </ul>
    </div>
  );
};
