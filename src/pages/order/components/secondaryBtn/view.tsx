import { ISecondaryButton } from "./types";

export const SecondaryButton: React.FC<ISecondaryButton> = ({
  children,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-36 py-2.5 border cursor-pointer border-indigo-600 text-indigo-600 font-medium
         rounded-full transition-all
            ${
              disabled
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-transparent hover:opacity-80 shadow-md"
            }
          `}
    >
      {children}
    </button>
  );
};
