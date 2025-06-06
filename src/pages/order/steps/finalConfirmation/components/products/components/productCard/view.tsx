import { IProductCard } from "./types";

export const ProductCard = ({ data }: IProductCard) => {
  return (
    <div className="flex items-center justify-between p-4 w-full bg-transparent rounded-lg shadow">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded">
          {data?.productData?.image ? (
            <img
              src={data?.productData?.image}
              alt={data?.productData?.caption}
              className="object-cover w-full h-full rounded"
            />
          ) : (
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4.992 4.992 0 00-3.5 1.45A4.992 4.992 0 005 9.5v5a4.992
                 4.992 0 001.45 3.5 4.992 4.992 0 003.5 1.45h5a4.992 4.992 0 003.5-1.45A4.992 4.992
                  0 0019 14.5v-5a4.992 4.992 0 00-1.45-3.5A4.992 4.992 0 0014 4.354h-2z"
              />
            </svg>
          )}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-700">
            {data?.productData?.caption}
          </p>
          <p className="text-xs text-gray-500">
            ${data?.productData?.price?.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-base text-white px-2">x {data.quantity}</span>
      </div>
    </div>
  );
};
