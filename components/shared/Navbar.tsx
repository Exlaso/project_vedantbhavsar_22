import React from "react";
import { ThemeSwitch } from "../layout/theme-switch";
import { NavUser } from "../layout/nav-user";
import { menuItems } from "../layout/data/Menu";

const Navbar = () => {
  return (
    <div className="flex items-center w-full justify-between max-sm:justify-end gap-3">
      {/* <SearchBox /> */}
      <div className="flex gap-2 items-center justify-between w-full">
        <ThemeSwitch />
        <NavUser />
      </div>
    </div>
  );
};

export default Navbar;
