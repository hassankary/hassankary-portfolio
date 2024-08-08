"use client";
import { Cards } from "@/components/cards/cards";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ButtonIcon } from "@/components/icon/icon";
import { LogoFooter } from "@/components/LogoFooter";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const page = "services";
  const latestWorkData = [
    {
      href: "https://orderyourcoffee.vercel.app/",
      src: "/ordercoffee.png",
      alt: "Coffee Ordering Mobile Web",
      title: "Coffee Ordering Mobile Web",
      subtitle: "Next.js, Tailwind CSS, Javascript, RESTful API",
      desc: "Mobile web app for coffee ordering using Next.js and Tailwind CSS, integrated with a database via JSON Server. This app allows users to effortlessly browse the menu, place orders for their favorite coffee, and customize their orders. It also includes a voucher discount feature for added savings. Key features include a modern design, real-time data integration, and a seamless ordering process from selection to checkout.",
      link: "",
    },
    {
      href: "https://next-js-todolist-dnd.vercel.app/",
      src: "/todolst.png",
      alt: "todo list pict",
      title: "Todo List App",
      subtitle: "Next.js, Tailwind CSS, Javascript",
      desc: "Todo List with Drag and Drop features uses react-beautiful-dnd saved in localstorage.",
      link: "",
    },
    {
      href: "https://next-js-tailwind-address-book.vercel.app/",
      src: "/addrsbook.png",
      alt: "address book pict",
      title: "Address Book App",
      subtitle: "Next.js, Tailwind CSS, Javascript",
      desc: "Address Book Website uses Next.js & Tailwind with search engine, infinite scroll, and night mode feature.",
      link: "",
    },
    {
      href: "https://next-js-tailwind-five.vercel.app/",
      src: "/travlog.png",
      alt: "travel website pict",
      title: "Travel Website",
      subtitle: "Next.js, Tailwind CSS, Javascript",
      desc: "Responsive Travel Website uses Next.js & Tailwind, slicing from",
      link: "https://www.figma.com/community/file/1242383980771579992",
    },
    {
      href: "https://next-js-tailwind-fashion-ecommerce.vercel.app/",
      src: "/mdml.png",
      alt: "e-commerce website pict",
      title: "E-commerce Website",
      subtitle: "Next.js, Tailwind CSS, Javascript",
      desc: `Responsive Fashion E-commerce Website uses Next.js & Tailwind, slicing from`,
      link: "https://www.figma.com/community/file/1285268566121594200",
    },
  ];

  const dataLogoFooter = [
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/hassan-askary-hizburrahman-77ba29166/",
      src: "/LinkedIn.svg",
      alt: "logo Linkedin",
    },
    {
      title: "Github",
      href: "https://github.com/hassankary",
      src: "/Github.svg",
      alt: "logo Github",
    },
    {
      title: "Gitlab",
      href: "https://gitlab.com/hassanaskary29",
      src: "/Gitlab.svg",
      alt: "logo Gitlab",
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/hassankary/",
      src: "/Instagram.svg",
      alt: "logo Instagram",
    },
  ];
  

  const ThisCard = ({ href, src, alt, title, desc, link, subtitle }) => {
    return (
      <div className="h-fit bg-transparent rounded-3xl shadow-xl hover:scale-[98%] transition-all">
        <div className="flex overflow-hidden justify-center items-center rounded-t-2xl bg-gradient-to-t from-[#30102b] to-[#5B0E4E] ">
          <Image
            src={src}
            className=" w-full"
            quality={100}
            height={250}
            width={250}
            alt={alt}
            unoptimized
          ></Image>
        </div>
        <div className="flex flex-col h-full">
          <div className="py-4 bg-white">
            <div className="flex-col px-9 md:h-[163px] overflow-auto">
              <div className="pb-4">
                <h1 className="truncate overflow-hidden text-black text-[20px] font-extrabold ">
                  {title}
                </h1>
                <h1 className="truncate overflow-hidden text-[#FF4265] text-[14px] font-extrabold">
                  {subtitle}
                </h1>
              </div>
              <div className="text-ellipsis overflow-hidden text-black text-[15px] font-semibold leading-[30px] ">
                {desc}{" "}
                <Link
                  className="underline font-bold"
                  href={link}
                  target="_blank"
                >
                  {link !== "" && "figma"}
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full transition rounded-b-xl">
            <button className="flex w-full justify-center font-bold px-3 py-2 bg-gradient-to-r from-[#FF4265] to-[#ff423c] hover:bg-gradient-to-tr hover:from-[#ff395d] hover:to-[#ff4265b6] text-white rounded-b-2xl transition-all">
              <Link
                className="flex w-full justify-center items-center gap-2 active:scale-95 transition-all"
                href={href}
                target="_blank"
              >
                GO
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const MOckArr = ({ latestWorkData }) => {
    return (
      <div className="grid grid-cols-2 gap-10 px-5 lg:px-20">
        {latestWorkData.map((data, idx) => {
          return (
            <div key={idx} className="">
              <ThisCard
                href={data.href}
                src={data.src}
                alt={data.alt}
                title={data.title}
                subtitle={data.subtitle}
                desc={data.desc}
                link={data.link}
              />
            </div>
          );
        })}
      </div>
    );
  };

  const myArr = [
    { a: 0, b: 2 },
    { a: 2, b: 4 },
    { a: 4, b: 5 },
  ];

  return (
    <>
      <Header params={page} />
      <div className="flex flex-col py-[109px] bg-gradient-to-t from-[black] to-[#3a3737] min-h-screen justify-center sm:px-[5%] md:px-[80px] lg:px-[10%] ">
        <div className="flex py-[50px] justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-[0]">
            {latestWorkData.map((data, idx) => {
              return (
                <div key={idx} className="h-full w-full">
                  <ThisCard
                    href={data.href}
                    src={data.src}
                    alt={data.alt}
                    title={data.title}
                    subtitle={data.subtitle}
                    desc={data.desc}
                    link={data.link}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="hidden md:flex md:flex-col">
          <div className="h-[700px]">
            <Carousel>
              {myArr.map((data, i) => {
                return (
                  <div key={i} className="flex justify-center">
                    <MOckArr
                      latestWorkData={latestWorkData.slice(data.a, data.b)}
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="black"
            fillOpacity="1"
            d="M0,32L11.4,64C22.9,96,46,160,69,202.7C91.4,245,114,267,137,250.7C160,235,183,181,206,144C228.6,107,251,85,274,80C297.1,75,320,85,343,101.3C365.7,117,389,139,411,149.3C434.3,160,457,160,480,149.3C502.9,139,526,117,549,112C571.4,107,594,117,617,149.3C640,181,663,235,686,234.7C708.6,235,731,181,754,138.7C777.1,96,800,64,823,85.3C845.7,107,869,181,891,218.7C914.3,256,937,256,960,240C982.9,224,1006,192,1029,202.7C1051.4,213,1074,267,1097,261.3C1120,256,1143,192,1166,165.3C1188.6,139,1211,149,1234,138.7C1257.1,128,1280,96,1303,106.7C1325.7,117,1349,171,1371,176C1394.3,181,1417,139,1429,117.3L1440,96L1440,0L1428.6,0C1417.1,0,1394,0,1371,0C1348.6,0,1326,0,1303,0C1280,0,1257,0,1234,0C1211.4,0,1189,0,1166,0C1142.9,0,1120,0,1097,0C1074.3,0,1051,0,1029,0C1005.7,0,983,0,960,0C937.1,0,914,0,891,0C868.6,0,846,0,823,0C800,0,777,0,754,0C731.4,0,709,0,686,0C662.9,0,640,0,617,0C594.3,0,571,0,549,0C525.7,0,503,0,480,0C457.1,0,434,0,411,0C388.6,0,366,0,343,0C320,0,297,0,274,0C251.4,0,229,0,206,0C182.9,0,160,0,137,0C114.3,0,91,0,69,0C45.7,0,23,0,11,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="flex flex-col bg-white pt-[40px] sm:pt-[120px] sm:mt-[-100px] md:mt-[-80px] lg:mt-[-100px] justify-center items-center">
        <div className="flex flex-row space-x-2 md:space-x-4">
          {dataLogoFooter.map((data, idx) => {
            return (
              <LogoFooter
                title={data.title}
                src={data.src}
                href={data.href}
                alt={data.alt}
                key={idx}
              />
            );
          })}
        </div>
        <div className="w-full text-center font-bold text-base sm:text-lg py-[40px] sm:py-[60px] text-black">Copyright &copy; 2023 Hassan Askary.</div>
      </div>

    </>
  );
}
