import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";

interface SearchInputProps {
  className?: string;
  type?: "all" | "default";
}

const SearchInput = ({ className, type = "default" }: SearchInputProps) => {
  const [searchString, setSearchString] = useState("");
  const { push } = useRouter();
  const params = new URLSearchParams(useSearchParams().toString());

  return (
    <div
      className={clsx(
        className,
        "flex items-center gap-2 cursor-pointer group bg-stone-100 px-2 h-12 rounded-md"
      )}
    >
      <IoIosSearch className="group-hover:text-primary-500 transition" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (searchString.length > 0) {
            params.set("searchParam", searchString);
          } else {
            params.delete("searchParam");
          }

          if (type == "all") {
            push(`/en/all?page=1&${params.toString()}`, {});
          } else {
            push(`?${params.toString()}`, {});
          }
        }}
      >
        <input
          placeholder={"search"}
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
          value={searchString}
          className="bg-transparent placeholder:text-primary-900 focus:outline-none "
        />
      </form>
    </div>
  );
};

export default SearchInput;
