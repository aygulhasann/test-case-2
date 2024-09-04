import React from "react";
import NavbarItem from "./NavbarItem";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-center p-4 bg-amber-100 dark:bg-gray-800 lg:text-lg gap-4 margin">
      <Link href={"/trendler"}>
        <NavbarItem title="trendler" />
      </Link>
    </div>
  );
}
