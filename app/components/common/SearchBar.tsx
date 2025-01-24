"use client";

import { PiFadersFill } from "react-icons/pi";
import { IoChevronDownSharp, IoTrash } from "react-icons/io5";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { archivo, orbitron } from "@/utils/fonts";
import FilterMenu from "./FilterMenu";
import { useRouter, useSearchParams } from "next/navigation";
import SearchInput from "./SearchInput";
import FilterPill from "./FilterPill";

const SearchBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [selectedSorting, setSelectedSorting] = useState("Latest");
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { push } = useRouter();
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const params = new URLSearchParams(useSearchParams().toString());

  useEffect(() => {}, []);

  const renderFilters = () => {
    const paramFilters = [];
    for (const [key, value] of params.entries()) {
      let formattedValue = value;

      if (value === 'asc') {
        formattedValue = 'Oldest'
      }

      if (value === 'desc') {
        formattedValue = 'Latest'
      }

      if (key != "page") {
        paramFilters.push(
          <div className="flex gap-2" key={value}>
            <div
              className={clsx("capitalize text-primary-800", archivo.className)}
            >
              {key}:
            </div>
            <FilterPill label={key} value={formattedValue} />
          </div>
        );
      }
    }
    return paramFilters;
  };

  return (
    <div className="flex-col md:flex-row flex gap-6 py-6">
      <div className="flex flex-col gap-6">
        <div className="flex gap-6 items-center">
          <FilterMenu
            isOpen={isFilterMenuOpen}
            setIsOpen={setIsFilterMenuOpen}
          />
          <div
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => {
              setIsFilterMenuOpen(true);
            }}
          >
            <PiFadersFill className="group-hover:text-primary-500 transition" />
            <span className="group-hover:text-primary-500 transition">
              filter
            </span>
          </div>
          <SearchInput className="grow md:grow-0" />
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            {renderFilters().map((paramFilter) => paramFilter)}
          </div>
          {renderFilters().length > 0 && (
            <div
              className={clsx(
                "text-red-500 flex gap-2 items-center cursor-pointer"
              )}
              onClick={() => {
                params.delete("author");
                params.delete("editorial");
                push(`?${params.toString()}`, {});
              }}
            >
              <IoTrash />
              <span className={clsx(orbitron.className, "text-sm")}>
                Clear All
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="flex ml-auto items-center gap-2">
        <div className={clsx(archivo.className, "text-sm text-primary-700")}>
          Sort by:
        </div>
        <div>
          <button
            onClick={handleClick}
            className={clsx(
              orbitron.className,
              "text-primary-500 flex items-center gap-2"
            )}
          >
            {selectedSorting}
            <IoChevronDownSharp />
          </button>
          <Menu
            elevation={2}
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              className={clsx(orbitron.className, "text-sm")}
              onClick={() => {
                params.set("sort", "desc");
                setSelectedSorting("Latest");
                push(`?${params.toString()}`, {});
              }}
            >
              Latest
            </MenuItem>
            <MenuItem
              className={clsx(orbitron.className, "text-sm")}
              onClick={() => {
                params.set("sort", "asc");
                setSelectedSorting("Oldest");
                push(`?${params.toString()}`, {});
              }}
            >
              Oldest
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
