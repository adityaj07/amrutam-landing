"use client";

import Link from "next/link";
import { FC, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { menuLinks } from "@/data";
import Button from "../ui/Button";
import { useLockBody } from "@/hooks/use-lock-body";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  useLockBody();
  const [isNavOpen, setIsNavOpen] = useState<Boolean>(false);

  const handleNavToggle = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav className="flex justify-between items-center border-b border-zinc-600/40 h-[6rem] bg-[#FFF7E2] z-10">
        <div className="w-[90%] mx-auto flex justify-between items-center gap-8">
          <div
            onClick={handleNavToggle}
            className="block md:hidden cursor-pointer"
          >
            {isNavOpen ? (
              <X className="block lg:hidden animate-fade-in-out text-[#3A643B] w-7 h-7" />
            ) : (
              <Menu className="block lg:hidden animate-fade-in-out text-[#3A643B] w-7 h-7" />
            )}
          </div>

          <div className="mx-auto md:mx-0 flex justify-center items-center ">
            <Link
              href="#hero"
              className="flex gap-2 justify-center items-center"
            >
              <Image
                src="/amrutam-logo.svg"
                alt="logo"
                className="w-[130px] h-[28px] md:w-[220px] md:h-[40px] lg:w-[260px] lg:h-[50px]"
                width={260}
                height={50}
              />
            </Link>

            <div className="ml-8 lg:ml-24">
              <ul className="items-center justify-center hidden md:flex gap-4">
                {menuLinks.map((link) => (
                  <Link href={link.link} key={link.text}>
                    <li
                      key={link.text}
                      className="relative p-2 px-4 cursor-pointer transition-colors duration-200 rounded-lg text-[#3A643B] text-[1rem]"
                    >
                      {link.text}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/login">
              <Button
                text="Login"
                className="border border-[#3A643B] text-[#3A643B] transition-colors duration-150 rounded-[11px]"
              />
            </Link>
            <Link href="/signup">
              <Button
                text="Sign-up"
                className="bg-[#3A643B] text-white hover:bg-[#2a4b2a] transition-colors duration-150 rounded-[11px]"
              />
            </Link>
          </div>
        </div>
      </nav>

      {/* MOBILE NAV  */}

      <nav
        className={`mobile-nav -z-9 fixed top-0 left-0 right-0 bottom-0 backdrop-blur-[3px] bg-opacity-50 lg:hidden transition-opacity pt-4 ${
          isNavOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={handleNavToggle}
        onScroll={handleNavToggle}
      >
        <div className="bg-[#fff] mt-20 md:mt-0 rounded-xl w-[60%] mr-auto ml-[5%] text-white p-4 text-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <ul className="flex flex-col items-center w-full justify-center gap-2 pb-4 transition-transform duration-300 ">
            {menuLinks.map((link) => (
              <Link
                href={link.link}
                className="p-2 px-4 cursor-pointer  transition-colors duration-200 hover:bg-white w-full rounded-lg text-[#3A643B] text-[1rem] hover:font-semibold"
                key={link.text}
              >
                <li key={link.text}>{link.text}</li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
