"use client";

import { BsChevronDown } from "react-icons/bs";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const menu = ["Về Việt Guru", "Về ứng dụng", "Gói học", "Hỗ trợ"];

const Header = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = (e) => {
    const scrollTop = window.scrollY;
    scrollTop >= 120 ? setSticky(true) : setSticky(false);
  };

  return (
    <div
      className={`${
        sticky
          ? "fixed top-0 left-0 w-full z-50 py-[15px] shadow-md"
          : "py-[30px]"
      } px-[56px] bg-[#fafafa] transition-all flex items-center justify-between w-full border-b-[#BDBDBD] border-b`}
    >
      <Image
        src="/logo.svg"
        alt="Logo"
        width={sticky ? 50 : 84}
        height={sticky ? 35 : 56}
        priority
      />
      <ul
        className="flex items-center gap-[64px] text-[#424242]"
        style={{ fontFamily: "Baloo" }}
      >
        {menu.map((item, index) => {
          return (
            <li className="cursor-pointer hover:text-[#008AE3]" key={index}>
              {item}
            </li>
          );
        })}
      </ul>
      <p className="flex justify-center items-center gap-2">
        {" "}
        <Image src="/flat.png" alt="Logo" width={36} height={24} priority />
        VIE <BsChevronDown />
      </p>
    </div>
  );
};

export default Header;
