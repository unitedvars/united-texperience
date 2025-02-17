import { IoClose } from "react-icons/io5";
import { useRouter, useSearchParams } from "next/navigation";
import { archivo, orbitron } from "@/utils/fonts";
import clsx from "clsx";

const FilterPill = ({
  label,
  value,
  onClearClick,
}: {
  label: string;
  value: string;
  onClearClick?: () => void;
}) => {
  const { push } = useRouter();
  const params = new URLSearchParams(useSearchParams().toString());
  return (
    <div className="bg-[#DBDBDB] flex items-center rounded-md p-[8px]">
      <div>
        <label className={clsx(orbitron.className, "text-sm", "text-[#929292]", "mr-2")}>{value}</label>
      </div>
      <div
        className="border-stone-400 cursor-pointer group"
        onClick={() => {
          params.delete(label);
          push(`?${params.toString()}`, {});
        }}
      >
        <IoClose className="group-hover:opacity-100 opacity-70" />
      </div>
    </div>
  );
};

export default FilterPill;
