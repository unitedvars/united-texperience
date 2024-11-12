import { IoClose } from "react-icons/io5";
import { useRouter, useSearchParams } from "next/navigation";

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
    <div className="bg-stone-200 flex items-center rounded-sm">
      <div className="px-2">
        <label htmlFor="">{value}</label>
      </div>
      <div
        className="px-1 border-l border-stone-400 cursor-pointer group"
        onClick={() => {
          params.delete(label);
          console.log(params);
          push(`?${params.toString()}`, {});
        }}
      >
        <IoClose className="group-hover:opacity-100 opacity-70" />
      </div>
    </div>
  );
};

export default FilterPill;
