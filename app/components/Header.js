import { BsChevronDown } from "react-icons/bs";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const menu = [
  { name: "Về Việt Guru", section: "#section1" },
  { name: "Về ứng dụng", section: "#section2" },
  { name: "Gói học", section: "#section3" },
  { name: "Hỗ trợ", section: "#section4" },
];

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const handleScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
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
    <>
      {sticky && <div className="h-[117px] w-full"></div>}
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
              <Link key={index} href={item.section} onClick={handleScroll}>
                <li className="cursor-pointer hover:text-[#008AE3]">
                  {item.name}
                </li>
              </Link>
            );
          })}
        </ul>
        <p className="flex justify-center items-center gap-2">
          {" "}
          <Image src="/flat.png" alt="Logo" width={36} height={24} priority />
          VIE <BsChevronDown />
        </p>
      </div>
    </>
  );
};

export default Header;
