import { IHeader } from "./types";

export const Header = ({ title, description }: IHeader) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold">{title}</h1>
      {description && <p className="text-sm text-gray-500">{description}</p>}
    </div>
  );
};
