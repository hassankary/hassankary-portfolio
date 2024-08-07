"use client";
import { Header } from "@/components/Header";
import Lottie from "lottie-react";
import Image from "next/image";
import machine from ".././machine.json";
import intro from ".././iconIntro.json";
import Link from "next/link";
import { motion } from "framer-motion";
import { ButtonIcon } from "@/components/icon/icon";
import { Cards } from "@/components/cards/cards";
import { Carousel } from "flowbite-react";
import { Footer } from "@/components/Footer";

export default function Home() {
  const page = "";
  const latestWorkData = [
    {
      href: "https://next-js-todolist-dnd.vercel.app/",
      src: "/todolist.png",
      alt: "todo list pict",
      title: "Todo List App",
      desc: "Todo List with Drag and Drop features uses react-beautiful-dnd saved in localstorage.",
      link: "",
    },
    {
      href: "https://next-js-tailwind-address-book.vercel.app/",
      src: "/addressbook.png",
      alt: "address book pict",
      title: "Address Book App",
      desc: "Address Book Website uses Next.js & Tailwind with search engine, infinite scroll, and night mode feature.",
      link: "",
    },
    {
      href: "https://next-js-tailwind-five.vercel.app/",
      src: "/travel.png",
      alt: "travel website pict",
      title: "Travel Website",
      desc: "Responsive Travel Website uses Next.js & Tailwind, slicing from",
      link: "https://www.figma.com/community/file/1242383980771579992",
    },
    {
      href: "https://next-js-tailwind-fashion-ecommerce.vercel.app/",
      src: "/ecommerce.png",
      alt: "e-commerce website pict",
      title: "E-commerce Website",
      desc: `Responsive Fashion E-commerce Website uses Next.js & Tailwind, slicing from`,
      link: "https://www.figma.com/community/file/1285268566121594200",
    },
  ];

  return (
    <>
      <title>Hassan Askary - Portfolio</title>
      <Header params={page} />
      <div
        id="home"
        className=" z-30 flex pt-[109px] sm:px-[100px] px-16 text-white bg-gradient-to-b from-[#29002A] to-[#540052] justify-center lg:justify-between w-full"
      >
        <div className="flex flex-col items-center lg:flex-row lg:justify-around py-[50px] w-full">
          <div className="flex flex-col justify-center lg:w-1/2 xl:w-fit space-y-3">
            <motion.p
              variants={{
                hidden: {
                  x: -30,
                  opacity: 0,
                },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.1,
                  },
                },
              }}
              animate="visible"
              initial="hidden"
              className="font-sans font-extrabold text-[45px] xl:text-[52px] 2xl:text-[60px] leading-[63px]"
            >
              Hi, I am
            </motion.p>
            <motion.p
              variants={{
                hidden: {
                  x: -30,
                  opacity: 0,
                },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.1,
                    delay: 0.1,
                  },
                },
              }}
              animate="visible"
              initial="hidden"
              className=" font-sans font-extrabold text-[55px] xl:text-[60px] 2xl:text-[72px] bg-clip-text text-transparent bg-gradient-to-r from-[#FE573B] to-[#FF4265]"
            >
              Hassan Askary
            </motion.p>

            <motion.p
              variants={{
                hidden: {
                  x: -30,
                  opacity: 0,
                },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.1,
                    delay: 0.2,
                  },
                },
              }}
              animate="visible"
              initial="hidden"
              className="font-sans font-extrabold text-[28px] xl:text-[33px]"
            >
              Frontend Developer
            </motion.p>
            <motion.div
              variants={{
                hidden: {
                  x: -30,
                  opacity: 0,
                },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.1,
                    delay: 0.3,
                  },
                },
              }}
              animate="visible"
              initial="hidden"
              className="flex pt-10"
            >
              <Link
                href={
                  "https://drive.google.com/file/d/1uGoQqQ6rM5gKKyAXk8HNyd6NgwXQ-oXb/view"
                }
                target="_blank"
              >
                <div className="flex px-6 py-[19px] items-center space-x-2 rounded-full bg-gradient-to-r from-[#FE573B] to-[#FF4268] transition ease-out hover:scale-105 shadow-[#FFC93E] shadow-[0_-5px_200px_-5px]">
                  <span className=" animate-pulse text-center items-center font-semibold">
                    Download CV
                  </span>
                  <div className="animate-pulse rounded-full">
                    <ButtonIcon width={18} height={18} color2={"white"} />
                  </div>
                </div>
              </Link>
              <div className="flex px-6 py-[19px] items-center">
                <Link href={"https://github.com/hassankary"} target="_blank">
                  <span className="font-bold transition-all hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#FE573B] hover:to-[#FF4265] ">
                    Github
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
          <motion.div
            variants={{
              hidden: {
                x: -30,
                opacity: 0,
              },
              visible: {
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.1,
                  delay: 0.2,
                },
              },
            }}
            animate="visible"
            initial="hidden"
            className="flex justify-center lg:w-1/2 xl:w-fit items-center pt-[50px] lg:pt-0"
          >
            <div className=" w-full px-0 pb-0">
              <div className="flex flex-col group">
                <div className=" flex justify-center bg-gradient-to-t from-[#190108] to-[#5B0E4E] rounded-t-full transition shadow-[#FFC93E] shadow-[0_-25px_200px_-90px] lg:shadow-none group-hover:shadow-[#FFC93E] group-hover:shadow-[0_-25px_200px_-100px]">
                  <div className="absolute flex px-10 lg:px-0 lg:pl-10 min-h-[50px] space-x-20 xl:space-x-28">
                    <motion.div
                      animate={{ y: [0, 80, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <Image
                        className="transition ease-in-out hover:scale-110"
                        src={"/pic1.svg"}
                        height={52}
                        width={52}
                        alt="pic1"
                      />
                    </motion.div>
                    <motion.div
                      animate={{ y: [30, -30, 30] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <Image
                        className="transition ease-in-out hover:scale-110"
                        src={"/pic2.svg"}
                        height={86}
                        width={86}
                        alt="pic2"
                      />
                    </motion.div>
                    <motion.div
                      animate={{ y: [0, 200, 0] }}
                      transition={{ repeat: Infinity, duration: 2.2 }}
                    >
                      <Image
                        className="transition ease-in-out hover:scale-110"
                        src={"/pic3.svg"}
                        height={63}
                        width={63}
                        alt="pic3"
                      />
                    </motion.div>
                  </div>
                  <div className="flex">
                    <div className="hidden lg:flex flex-col absolute pt-[100px] lg:space-y-[180px] xl:space-y-[220px]">
                      <motion.div
                        animate={{ y: [0, 80, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <Image
                          className="transition ease-in-out hover:scale-110"
                          src={"/pic4.svg"}
                          height={67}
                          width={67}
                          alt="pic4"
                        />
                      </motion.div>
                      <motion.div
                        animate={{ y: [-30, 50, -30] }}
                        transition={{ repeat: Infinity, duration: 1.9 }}
                      >
                        <Image
                          className="transition ease-in-out hover:scale-110"
                          src={"/pic5.svg"}
                          height={57}
                          width={57}
                          alt="pic5"
                        />
                      </motion.div>
                    </div>
                  </div>
                  <Image
                    className=" pt-20"
                    src={"/dog_pict.svg"}
                    width={513}
                    height={513}
                    alt="dog_pict"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="sm:mt-[-10px] bg-[#FF4265] ">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#540052"
            fillOpacity="1"
            d="M0,224L11.4,240C22.9,256,46,288,69,288C91.4,288,114,256,137,240C160,224,183,224,206,213.3C228.6,203,251,181,274,186.7C297.1,192,320,224,343,197.3C365.7,171,389,85,411,80C434.3,75,457,149,480,176C502.9,203,526,181,549,160C571.4,139,594,117,617,101.3C640,85,663,75,686,69.3C708.6,64,731,64,754,74.7C777.1,85,800,107,823,96C845.7,85,869,43,891,69.3C914.3,96,937,192,960,197.3C982.9,203,1006,117,1029,101.3C1051.4,85,1074,139,1097,160C1120,181,1143,171,1166,165.3C1188.6,160,1211,160,1234,138.7C1257.1,117,1280,75,1303,96C1325.7,117,1349,203,1371,218.7C1394.3,235,1417,181,1429,154.7L1440,128L1440,0L1428.6,0C1417.1,0,1394,0,1371,0C1348.6,0,1326,0,1303,0C1280,0,1257,0,1234,0C1211.4,0,1189,0,1166,0C1142.9,0,1120,0,1097,0C1074.3,0,1051,0,1029,0C1005.7,0,983,0,960,0C937.1,0,914,0,891,0C868.6,0,846,0,823,0C800,0,777,0,754,0C731.4,0,709,0,686,0C662.9,0,640,0,617,0C594.3,0,571,0,549,0C525.7,0,503,0,480,0C457.1,0,434,0,411,0C388.6,0,366,0,343,0C320,0,297,0,274,0C251.4,0,229,0,206,0C182.9,0,160,0,137,0C114.3,0,91,0,69,0C45.7,0,23,0,11,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="z-0 flex flex-col sm:mt-[-100px] lg:flex-row px-0 lg:px-[100px] py-12 lg:py-0 justify-center items-center bg-gradient-to-b from-[#FF4265] to-[#FE573B]">
        <div className="flex px-28 pb-10 sm:px-[100px] lg:p-12 lg:w-1/3 lg:h-[500px] justify-center items-center">
          <Lottie animationData={intro} height={25} width={25}></Lottie>
        </div>
        <div className="grid grid-cols-1 w-full lg:w-2/3 ">
          <div className=" rounded-2xl h-[350px] lg:h-[500px]">
            <Carousel>
              <div className="px-4 sm:px-[100px] lg:p-12">
                <div className=" rounded-xl shadow-xl">
                  <div className="flex py-2 text-center text-white justify-center text-[25px] font-extrabold rounded-t-xl bg-gradient-to-t from-[#30102b] to-[#5B0E4E]">
                    Professional Summary
                  </div>
                  <p className=" text-black pt-6 pb-8 px-12 md:px-24 lg:px-12 text-[18px] font-extrabold rounded-b-xl bg-white leading-[30px]">
                    Able to ensure that all tasks are performed effectively, appropriately, and
                    delivered within agreed timescales. Able to work well under
                    pressure. Consistenly reliable, diligent, and eager to
                    learn.
                  </p>
                </div>
              </div>
              <div className="px-4 sm:px-[100px] lg:p-12">
                <div className=" rounded-xl shadow-xl">
                  <div className="flex py-2 text-center text-white justify-center text-[25px] font-extrabold rounded-t-xl bg-gradient-to-t from-[#30102b] to-[#5B0E4E] ">
                    Skills
                  </div>
                  <div className="flex-col text-center text-white pt-6 pb-8 px-12 md:px-24 lg:px-12 text-[10px] sm:text-[13px] md:text-[18px] lg:text-[15px] xl:text-[18px] font-extrabold rounded-b-xl bg-white leading-[30px]">
                    <div className="flex items-center justify-center max-h-9 space-x-[1%]">
                      <div className="flex justify-center items-center bg-[#E0572B] rounded-lg px-2 py-1">
                        HTML
                      </div>
                      <div className="flex justify-center items-center bg-[#214CE5] rounded-lg px-2 py-1">
                        CSS
                      </div>
                      <div className="flex justify-center items-center bg-[#38BDF8] rounded-lg px-2 py-1">
                        Tailwind
                      </div>
                      <div className="flex justify-center items-center bg-[#F7E025] rounded-lg px-2 py-1">
                        Javascript
                      </div>
                      <div className="flex justify-center items-center bg-[#61DBFB] rounded-lg px-2 py-1">
                        React.js
                      </div>
                      <div className="flex justify-center items-center bg-black rounded-lg px-2 py-1">
                        Next.js
                      </div>
                    </div>
                    <div className="flex justify-center space-x-2 mt-4">
                      <Image
                        src={"/./logo_html5.svg"}
                        width={30}
                        height={30}
                        alt="logo html"
                      />
                      <Image
                        src={"/./logo_css.svg"}
                        width={30}
                        height={30}
                        alt="logo css"
                      />
                      <Image
                        src={"/./logo_tailwind.svg"}
                        width={30}
                        height={30}
                        alt="logo tailwind"
                      />
                      <Image
                        src={"/./logo_js.svg"}
                        width={30}
                        height={30}
                        alt="logo javascript"
                      />
                      <Image
                        src={"/./logo_react.svg"}
                        width={30}
                        height={30}
                        alt="logo react js"
                      />
                      <Image
                        src={"/./logo_nextjs.svg"}
                        width={30}
                        height={30}
                        alt="logo next js"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <div className="sm:mt-[-50px] bg-[#540052] ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FE573B"
            fillOpacity="1"
            d="M0,224L9.6,213.3C19.2,203,38,181,58,181.3C76.8,181,96,203,115,181.3C134.4,160,154,96,173,112C192,128,211,224,230,240C249.6,256,269,192,288,160C307.2,128,326,128,346,122.7C364.8,117,384,107,403,106.7C422.4,107,442,117,461,138.7C480,160,499,192,518,197.3C537.6,203,557,181,576,160C595.2,139,614,117,634,122.7C652.8,128,672,160,691,154.7C710.4,149,730,107,749,106.7C768,107,787,149,806,149.3C825.6,149,845,107,864,112C883.2,117,902,171,922,170.7C940.8,171,960,117,979,80C998.4,43,1018,21,1037,37.3C1056,53,1075,107,1094,144C1113.6,181,1133,203,1152,218.7C1171.2,235,1190,245,1210,218.7C1228.8,192,1248,128,1267,112C1286.4,96,1306,128,1325,170.7C1344,213,1363,267,1382,293.3C1401.6,320,1421,320,1430,320L1440,320L1440,0L1430.4,0C1420.8,0,1402,0,1382,0C1363.2,0,1344,0,1325,0C1305.6,0,1286,0,1267,0C1248,0,1229,0,1210,0C1190.4,0,1171,0,1152,0C1132.8,0,1114,0,1094,0C1075.2,0,1056,0,1037,0C1017.6,0,998,0,979,0C960,0,941,0,922,0C902.4,0,883,0,864,0C844.8,0,826,0,806,0C787.2,0,768,0,749,0C729.6,0,710,0,691,0C672,0,653,0,634,0C614.4,0,595,0,576,0C556.8,0,538,0,518,0C499.2,0,480,0,461,0C441.6,0,422,0,403,0C384,0,365,0,346,0C326.4,0,307,0,288,0C268.8,0,250,0,230,0C211.2,0,192,0,173,0C153.6,0,134,0,115,0C96,0,77,0,58,0C38.4,0,19,0,10,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className=" sm:mt-[-100px] flex flex-col bg-gradient-to-t from-[#29002A] to-[#540052] min-h-[500px] items-center justify-center">
        <div
          id="latestWork"
          className="flex pt-0 sm:pt-20 py-20 justify-center items-center font-extrabold text-[35px] sm:text-[38px] xl:text-[38px]"
        >
          <div className="flex border-white border-b-4 text-center items-center text-white ">
            <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]">
              <Lottie animationData={machine}></Lottie>
            </div>
            <span>Latest Work</span>
            <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]">
              <Lottie animationData={machine}></Lottie>
            </div>
          </div>
        </div>
        <div className="px-4 sm:px-16 md:px-[100px] lg:px-[150px] pb-10 xl:px-[100px] grid grid-cols-1 gap-10 sm:gap-16 auto-rows-auto lg:grid-cols-2 xl:grid-cols-4 lg:gap-8 xl:gap-4 2xl:gap-8 justify-center items-center ">
          {latestWorkData.map((data, idx) => {
            return (
              <div key={idx} className="h-full w-full">
                <Cards
                  href={data.href}
                  src={data.src}
                  alt={data.alt}
                  title={data.title}
                  desc={data.desc}
                  link={data.link}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
