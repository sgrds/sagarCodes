import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="mx-auto max-w-screen-2xl flex justify-between items-center p-2 min-h-[15vh] bg-base-200">
      <div className="flex-1">
        <Link href="/" className="text-2xl md:text-3xl text-white font-medium">
          SagarCodes
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu-horizontal px-1 font-medium">
          <li className="px-5 py-2">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="px-5 py-2">
            <Link href="/service">Service</Link>
          </li>
          <li className="px-5 py-2">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="px-5 py-2">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
      {/* <div>
        <h1>this is sagar</h1>
      </div> */}
    </div>
  );
};

export default Navbar;
