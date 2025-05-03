import { IHeader } from "./types";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

export const Header = ({ callback, caption }: IHeader) => {
  return (
    <div>
      <div>{caption}</div>
      <div onClick={callback}>
        <PencilSquareIcon />
      </div>
    </div>
  );
};
