"use client";

import { PiFadersFill } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import clsx from "clsx";
import { archivo, orbitron } from "@/utils/fonts";

const SearchBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex gap-6 py-6">
      <div className="flex items-center gap-2">
        <PiFadersFill />
        <span>filter</span>
      </div>
      <div className="flex items-center gap-2">
        <IoIosSearch />
        <input
          placeholder={"search"}
          className="bg-transparent placeholder:text-primary-900 focus:outline-none"
        />
      </div>
      <div className="flex ml-auto items-center gap-2">
        <div className={clsx(archivo.className, "text-sm text-primary-700")}>
          Sort by:
        </div>
        <div>
          <button
            onClick={handleClick}
            className={clsx(orbitron.className, "text-primary-500")}
          >
            Latest
          </button>
          <Menu
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
              onClick={handleClose}
            >
              Latest
            </MenuItem>
            <MenuItem
              className={clsx(orbitron.className, "text-sm")}
              onClick={handleClose}
            >
              Newest
            </MenuItem>
            <MenuItem
              className={clsx(orbitron.className, "text-sm")}
              onClick={handleClose}
            >
              By Category
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
