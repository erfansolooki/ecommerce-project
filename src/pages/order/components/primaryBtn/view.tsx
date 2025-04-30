import { IPrimaryButton } from "./types";

export const PrimaryButton: React.FC<IPrimaryButton> = ({
  children,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-36 py-2.5 text-white font-medium rounded-full transition-all
        cursor-pointer
          ${
            disabled
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-[#4E4BFF] hover:opacity-80 shadow-md"
          }
        `}
    >
      {children}
    </button>
  );
};
