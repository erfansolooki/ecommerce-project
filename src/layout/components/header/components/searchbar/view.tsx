import { CiSearch } from "react-icons/ci";
import { LiaMicrophoneSolid } from "react-icons/lia";

export const Searchbar = () => {
  return (
    <div className="w-[96vw] relative -top-54 flex items-center">
      <LiaMicrophoneSolid
        className="absolute right-2.5 cursor-pointer"
        size={18}
      />
      <input
        placeholder="search"
        type="text"
        name=""
        id=""
        className="bg-[#232327] border-none outline-none  rounded-3xl w-full py-2.5 px-8"
      />
      <CiSearch className="absolute left-2.5 cursor-pointer" size={18} />
    </div>
  );
};
