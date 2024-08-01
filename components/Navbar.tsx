import Link from "next/link";
import React from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

function Navbar() {
  return (
    <nav className=" flex items-center justify-between px-6 lg:px-20 3xl:px-0 relative z-30 py-5">
      <Link href="/">
        <Image
          className="pl-5"
          src="./hilink-logo.svg"
          alt="logo"
          width={90}
          height={40}
        ></Image>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            className="regular-16 text-gray-50 flex items-center justify-center  pb-1.5 transition-all hover:font-bold"
            href={link.href}
            key={link.key}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <Button
          type="button"
          title="Login"
          icon="./user.svg"
          variant="btn_dark_green"
        />
      </div>
      <Image
        src="./menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="lg:hidden cursor-pointer inline-block"
      />
    </nav>
  );
}

export default Navbar;
