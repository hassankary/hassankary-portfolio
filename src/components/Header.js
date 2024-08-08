"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Dropdown } from "flowbite-react";
import {
  HiDesktopComputer,
  HiPhoneIncoming,
  HiUser,
  HiViewGrid,
} from "react-icons/hi";
import { IconBar } from "./icon/iconBar";
import { ContactIcon } from "./icon/icon";

export const Header = ({ params }) => {
  const [show, setShow] = useState(false);
  const [bold, setBold] = useState(null);
  const [isLogo, setIsLogo] = useState({
    home: true,
    about: false,
    work: false,
  });

  const NavLogo = ({ color, width, height }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 29 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.4154 11.4691C17.4351 9.802 15.8446 8.57235 13.9474 8.01483C12.0502 7.45731 9.97924 7.61098 8.1298 8.44649C7.12243 8.90158 6.20507 9.42543 5.44706 10.1629C4.12468 11.4494 4.09671 13.6704 5.48032 14.8908C6.2045 15.5295 6.91022 15.9375 7.2267 16.9768C7.50358 17.8861 7.26674 18.706 7.04334 19.5749C6.55049 21.4919 7.92074 23.3066 9.88368 23.5606C10.8067 23.6801 11.7583 23.6434 12.6969 23.4445C14.6732 23.0257 16.4533 21.9167 17.6973 20.3292C18.9413 18.7418 19.5622 16.7871 19.4413 14.8383L19.2881 13.6277C19.189 12.8447 18.8883 12.1009 18.4154 11.4691Z"
          fill={color}
        />
        <ellipse
          cx="13.7711"
          cy="3.52298"
          rx="2.7541"
          ry="2.55738"
          transform="rotate(4.67804 13.7711 3.52298)"
          fill={color}
        />
        <ellipse
          cx="21.3891"
          cy="6.90958"
          rx="2.7541"
          ry="2.55738"
          transform="rotate(4.67804 21.3891 6.90958)"
          fill={color}
        />
        <ellipse
          cx="24.437"
          cy="13.0805"
          rx="2.7541"
          ry="2.55738"
          transform="rotate(4.67804 24.437 13.0805)"
          fill={color}
        />
        <path
          d="M26.1046 21.1121C26.3452 21.1318 26.5603 20.9514 26.5357 20.7113C26.4866 20.231 26.2922 19.7685 25.9705 19.3794C25.5521 18.8733 24.9481 18.5276 24.276 18.4093C23.6038 18.291 22.9113 18.4085 22.3329 18.7391C21.7545 19.0696 21.3315 19.5897 21.146 20.1982C20.9605 20.8067 21.0257 21.4603 21.329 22.0322C21.6323 22.604 22.152 23.0533 22.7873 23.2927C23.4226 23.5321 24.128 23.5447 24.7668 23.3279C25.2553 23.1622 25.6781 22.8713 25.9895 22.4928C26.1456 22.303 26.0584 22.0291 25.8376 21.9212C25.4118 21.7131 25.5885 21.0699 26.0609 21.1085L26.1046 21.1121Z"
          fill={color}
        />
      </svg>
    );
  };

  useEffect(() => {
    if (params === "" || params === undefined) {
      setBold({
        ...bold,
        home: "font-bold",
        about: "",
        work: "",
      });
      setIsLogo({
        ...isLogo,
        home: true,
        about: false,
        work: false,
      });
    }

    if (params === "work") {
      setBold({
        ...bold,
        home: "",
        about: "",
        work: "font-bold",
      });
      setIsLogo({
        ...isLogo,
        home: false,
        about: false,
        work: true,
      });
    }

    if (params === "about") {
      setBold({
        ...bold,
        home: "",
        about: "font-bold",
        work: "",
      });
      setIsLogo({
        ...isLogo,
        home: false,
        about: true,
        work: false,
      });
    }
  }, []);

  const homePage = () => {
    setBold({
      ...bold,
      home: "font-bold",
      about: "",
      work: "",
    });
    setIsLogo({
      ...isLogo,
      home: true,
      about: false,
      work: false,
    });
  };

  const aboutPage = () => {
    setBold({
      ...bold,
      home: "",
      about: "font-bold",
      work: "",
    });
    setIsLogo({
      ...isLogo,
      home: false,
      about: true,
      work: false,
    });
    if (params === "about") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const workPage = () => {
    setBold({
      ...bold,
      home: "",
      about: "",
      work: "font-bold",
    });
    setIsLogo({
      ...isLogo,
      home: false,
      about: false,
      work: true,
    });
  };

  const navScroll = () => {
    if (window.scrollY >= 80) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", navScroll);
  }

  return (
    <>
      <div
        className={`${
          show ? "bg-black bg-opacity-20 md:bg-opacity-10" : "bg-transparent"
        } flex fixed z-50 px-[27px] sm:px-[60px] md:px-[100px] w-full py-[11px] md:py-[15px] text-white backdrop-blur-md justify-between`}
      >
        <Link href={"/"}>
          <div className="flex h-[53px] space-x-2 items-center text-[22px] font-bold">
            <Image
              src="/petty_logo.svg"
              alt="petty_logo"
              height={25}
              width={25}
            />{" "}
            <span>Hassan</span>
          </div>
        </Link>
        <div className="hidden sm:flex justify-between sm:space-x-[40px] md:space-x-[55px] lg:space-x-[60px] text-base items-center">
          <Link href={"./#home"}>
            <div
              onClick={homePage}
              className={`${bold?.home} flex h-[53px] w-[55px] hover:text-[#FF4265] transition items-center`}
            >
              {/* <div className={bold?.home !== "" ? "flex" : "hidden"}><NavLogo height={16} width={16} color={"#FD653D"} /></div> */}
              Home
            </div>
          </Link>
          <Link href={"./work"}>
            <div
              onClick={workPage}
              className={`${bold?.work} flex h-[53px] w-[55px] hover:text-[#FF4265] transition items-center`}
            >
              {/* {isLogo?.about && (<NavLogo height={16} width={16} color={"#FD653D"} />)} */}
              Work
            </div>
          </Link>
          <Link href={"/about"}>
            <div
              onClick={aboutPage}
              className={`${bold?.about} flex h-[53px] w-[55px] hover:text-[#FF4265] transition items-center`}
            >
              {/* {isLogo?.services && (<NavLogo height={16} width={16} color={"#FD653D"} />)} */}
              About
            </div>
          </Link>
        </div>
        <div className="hidden sm:flex h-[53px] hover:text-[#FF4265] transition-colors space-x-2 items-center font-bold">
          <Link
            className="flex space-x-2"
            href={"mailto:hassanaskary29@gmail.com"}
          >
            <span>Contact</span>
            <ContactIcon />
          </Link>
        </div>
        <div className="flex justify-start text-slate-50 items-center sm:hidden">
          <Dropdown
            dismissOnClick={false}
            renderTrigger={() => (
              <span>
                <IconBar />
              </span>
            )}
          >
            <Dropdown.Item icon={HiViewGrid} as="a" href={"/"}>
              Home
            </Dropdown.Item>
            <Dropdown.Item
              icon={HiDesktopComputer}
              as="a"
              href={"./#latestWork"}
            >
              Latest Work
            </Dropdown.Item>
            <Dropdown.Item icon={HiUser} as="a" href={"/about"}>
              About
            </Dropdown.Item>
            <Dropdown.Item
              icon={HiPhoneIncoming}
              as="a"
              href={"mailto:hassanaskary29@gmail.com"}
            >
              Contact
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </>
  );
};
