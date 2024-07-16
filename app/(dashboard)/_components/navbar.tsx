"use client";
import React from "react";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="flex items-center gap-x-4 p-5 bg-green-500">
      <div className="hidden lg:flex lg:flex-1 bg-yellow-500">
        {/* TODO: Add serch */} Search
      </div>
      <UserButton />
    </div>
  );
};

export default Navbar;
