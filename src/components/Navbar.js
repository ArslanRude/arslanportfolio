"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({className}) {
  const [active, setActive] = useState(null);
  return (
    (<div
      className={cn("fixed top-10 inset-x-0 max-w-md mx-auto z-50", className)} >
      <Menu setActive={setActive}>
        <div className="flex justify-center items-center gap-5 "> 
        <Link href="../">
        <MenuItem setActive={setActive} active={active} item="Home" >
        </MenuItem>
        </Link>
        <Link href="#about">
        <MenuItem setActive={setActive} active={active} item="About" >
        </MenuItem>
        </Link>
        <Link href="#project">
        <MenuItem setActive={setActive} active={active} item="Projects" >
        </MenuItem>
        </Link>
        <Link href="#services">
        <MenuItem setActive={setActive} active={active} item="Services" >
        </MenuItem>
        </Link>
        <Link href="#">
        <MenuItem setActive={setActive} active={active} item="Contact" >
        <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contact">Contect Me</HoveredLink>
            <HoveredLink href="/project">Project With Me</HoveredLink>
          </div>
        </MenuItem>
        </Link>
        </div>
      </Menu>
    </div>)
  );
}

export default Navbar;
