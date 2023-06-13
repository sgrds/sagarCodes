import React from "react";
import { IoMdRefresh } from "react-icons/io";

const DesktopContainer = ({
  window = "browser",
  titleBar = "localhost:3000/",
  children,
}) => {
  return (
    <div className="w-full border-white border rounded-md overflow-hidden">
      <div className="w-full border-white border-b flex">
        <div className="col-span-2 flex gap-1.5 items-center justify-center p-3">
          <div className="rounded-full bg-[#FF605C] w-3 h-3" />
          <div className="rounded-full bg-[#FFBD44] w-3 h-3" />
          <div className="rounded-full bg-[#00CA4e] w-3 h-3" />
        </div>
        {window === "text" && (
          <div className="border-x border-white ml-1 py-1.5 px-4 h-full grid items-center justify-center">
            <h3>{titleBar}</h3>
          </div>
        )}
        {window === "browser" && (
          <div className="w-full grid sm:justify-center sm:mr-16">
            <div className="max-w-xl px-2 py-0.5 w-auto my-2 mx-3 bg-neutral text-center rounded-sm flex items-center justify-between">
              <span></span>
              <h3 className="sm:px-11 text-sm justify-self-stretch">
                localhost:3000/
              </h3>
              <IoMdRefresh className="text-lg justify-self-end" />
            </div>
          </div>
        )}
      </div>
      <div className="min-h-[15rem]">{children}</div>
    </div>
  );
};

export default DesktopContainer;
