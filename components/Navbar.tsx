import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="border-4 border-red-500 flex items-center justify-between px-6 lg:px-20 3xl:px-0 relative z-30 py-5">
      <Link href="/">
        <img src="" alt="" />
      </Link>
    </nav>
  );
}

export default Navbar;
