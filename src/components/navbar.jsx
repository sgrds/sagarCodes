"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { name: "Blog", to: "/blog" },
  { name: "Service", to: "/service" },
  { name: "Contact", to: "/contact" },
  { name: "Clients", to: "/clients" },
  { name: "About", to: "/about" },
];

const mobileLink = [{ name: "Home", to: "/" }, ...links];

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const genericHamburgerLine = `h-0.5 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

  useEffect(() => {
    if (open) {
      // don't use overflow-hidden, as that toggles the scrollbar and causes layout shift
      document.body.classList.add("fixed");
      document.body.classList.add("overflow-y-scroll");
      // alternatively, get bounding box of the menu, and set body height to that.
      document.body.style.height = "100vh";
    } else {
      document.body.classList.remove("fixed");
      document.body.classList.remove("overflow-y-scroll");
      document.body.style.removeProperty("height");
    }
  }, [open]);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className={`${
          open && "fixed z-30 top-0 left-0 right-0 min-h-screen bg-base-100"
        } md:hidden mx-auto max-w-screen-2xl py-10 min-h-[120px]`}
      >
        <div className="grid items-center grid-cols-2 w-full px-6">
          <Link
            href="/"
            className="text-2xl md:text-3xl text-white font-medium"
          >
            SagarCodes
          </Link>
          <div className="md:hidden justify-self-end">
            <button
              onClick={handleClick}
              className="flex flex-col h-12 w-12 border-2 border-gray-500 focus:border-white rounded-full justify-center items-center group"
            >
              <div
                className={`${genericHamburgerLine} ${
                  open && "rotate-45 translate-y-2.5"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${open && "opacity-0"}`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  open && "-rotate-45 -translate-y-2.5"
                }`}
              />
            </button>
          </div>
        </div>

        {open && (
          <div className={`h-[85vh] mt-8 overflow-y-scroll`}>
            <ul className="grid border-y border-gray-800 font-medium">
              {mobileLink.map((link) => (
                <Link
                  className="p-8 border-y border-gray-800 hover:bg-gray-800"
                  key={link.to}
                  onClick={handleClick}
                  href={link.to}
                >
                  <li>{link.name}</li>
                </Link>
              ))}
            </ul>
            <div className="w-full justify-center grid">
              <button className="block my-16 btn btn-active btn-primary btn-base px-10 rounded-full">
                Book a Call
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
const Navbar = () => {
  return (
    <>
      <MobileNavbar />
      <div className="hidden mx-auto max-w-screen-2xl md:flex justify-between items-center py-10 min-h-[120px] px-6">
        <div className="flex-1">
          <Link
            href="/"
            className="text-2xl md:text-3xl text-white font-medium"
          >
            SagarCodes
          </Link>
        </div>
        <div className="flex-none hidden md:block">
          <ul className="menu-horizontal px-1 font-medium">
            {links.map((link) => (
              <li key={link.to} className="px-5 py-2">
                <Link href={link.to}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
