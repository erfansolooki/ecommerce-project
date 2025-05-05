import { IHeader } from "./types";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

export const Header = ({ callback, caption }: IHeader) => {
  return (
    <div className="flex justify-start items-center gap-1.5">
      <div>{caption}</div>

      <div
        onClick={callback}
        className="w-5 h-5 cursor-pointer hover:opacity-85"
      >
        <PencilSquareIcon />
      </div>
    </div>
  );
};
