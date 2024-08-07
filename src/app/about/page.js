"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  CircleFilledIcon,
  CircleIcon,
  IconEducation,
  IconExperience,
  LanguageIcon,
  LocationIcon,
  MailIcon,
  WhatsappIcon,
} from "@/components/icon/iconAbout";
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailUnread, MdOutgoingMail } from "react-icons/md";
import { IoMdMailOpen } from "react-icons/io";
import { motion as m } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const page = "about";
  const [show, setShow] = useState({
    education: false,
    experience: false,
    language: false,
  });

  const dataExperience = [
    {
      place: "AWANIO / PT Awan Komputasi Teknologi",
      status: "Frontend Developer Internship",
      year: "Dec 2023 - Present",
      jobdesc: [
        "Developed a responsive Awanio website (landing page, product, solution, and partner) using Astro.js and Tailwind.",
        "Created a responsive Awanio Docs website using Next.js and Tailwind.",
        "Conducted unit testing for the Awanio Repo V3 using Playwright.",
      ],
    },
    {
      place: "AKSESMU / PT Sumber Trijaya Lestari",
      status: "General Affair Internship",
      year: "Nov 2022 - May 2023",
      jobdesc: [
        "Reimbursed employees for fuel expenses (BBM).",
        "Created PB (Request) letters.",
        "Drafted and delivered PAR (Approval) letters.",
        "Issued PO (Purchase Order) letters.",
        "Prepared LPB (Receipt) letters.",
        "Generated NTTB (Bill) letters",
      ],
    },
    {
      place: "STARBUCKS / PT Sari Coffee Indonesia",
      status: "Part Time Barista",
      year: "Apr - Oct 2021",
      jobdesc: [
        "Prepared and served beverages and food items according to Starbucks standards.",
        "Provided exceptional customer service, including taking orders and addressing customer concerns.",
        "Managed cash transactions and operated the register accurately.",
        "Maintained cleanliness and organization of work areas and customer spaces.",
        "Conducted stock opname and monitored inventory levels; replenished supplies as needed.",
        "Responsible for achieving sales targets and contributing to overall sales results.",
        "Participated in training new baristas and actively contributed to team development.",
      ],
    },
    {
      place: "PPIKSN BATAN / Badan Tenaga Nuklir Nasional",
      status: "Human Resources Internship",
      year: "Oct 2020 - Dec 2020",
      jobdesc: [
        "Registered attendance for employee development activities.",
        "Updated employee data on the SILat BATAN website.",
        "Created employee development certificates",
        "Updated employee scheduling and assignments.",
      ],
    },
    {
      place: "MOTOMOTO MUSEUM / PT Utopia Satu Raja",
      status: "Museum Assistant",
      year: "Feb - Oct 2019",
      jobdesc: [
        "Managed visitor flow to ensure smooth and organized access to installations.",
        "Explained the description and significance of each art installation to enhance visitor experience.",
        "Provided information and answered questions about artworks, artists, and museum facilities.",
        "Assisted with crowd control and maintained a welcoming environment for all visitors.",
      ],
    },
  ];

  const dataEducation = [
    {
      place: "Universitas Negeri Jakarta",
      year: "2017-2023",
      faculty: "Faculty of Economics",
      major: "Management Major",
      gpa: "GPA of 3.46",
    },
    {
      place: "Universitas Padjadjaran",
      year: "2016-2017",
      faculty: "Faculty of Fisheries and Marine Science",
      major: "Fisheries Major",
      gpa: "GPA of 3.00",
    },
    {
      place: "SMAN 7 Tangerang Selatan",
      year: "2013-2016",
      faculty: "Natural Sciences Major",
      major: "",
      gpa: "",
    },
  ];

  return (
    <>
      <title>Hassan Askary - Portfolio</title>
      <Header params={page} />
      <div className="z-30 flex-col w-full pt-[109px] pb-[100px] px-4 sm:px-[100px] md:px-[135px] lg:px-[150px] xl:px-[200px] bg-gradient-to-t from-[#29002A] via-[#540052] to-[#29002A] text-white justify-center lg:justify-between">
        <m.div
          animate={{ y: [-20, 0], opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ type: "tween", duration: 0.2 }}
          className="flex flex-col px-10 lg:px-14 py-10 space-y-7 lg:space-y-0 bg-black bg-opacity-40 text-white shadow-[#FFC93E] shadow-[0_25px_200px_-80px] lg:flex-row lg:justify-center w-full rounded-3xl"
        >
          <div className="flex justify-center rounded-full ">
            <div className="w-[200px] rounded-full  ">
              <Image
                className="rounded-full  "
                src={"/HassanImage2.jpg"}
                width={200}
                height={200}
                alt="hassan image"
                quality={100}
                unoptimized
              />
            </div>
          </div>
          <div className="flex flex-col px-0 lg:py-0 lg:pl-14 w-full justify-center text-center lg:text-left l font-sans font-semibold text-[16px] sm:text-[18px] rounded-xl">
            <div className="text-[25px] font-bold pb-3">
              Hassan Askary Hizburrahman
            </div>
            <div className="pb-3">
              <span>@hassankary</span>
            </div>
            <div className="flex justify-center font-normal lg:justify-start items-center ">
              <span className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] mr-[2px]">
                <FaLocationDot />
              </span>
              <span>South Tangerang (BSD)</span>
            </div>
            <div className="flex justify-center font-normal lg:justify-start items-center ">
              <span className="w-[16px] h-[16px] sm:w-[19px] sm:h-[19px] mr-[6px]">
                <IoMdMailOpen />
              </span>
              <span>hassanaskary29@gmail.com</span>
            </div>
          </div>
        </m.div>
        <m.button
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
          whileTap={{ scale: 0.98 }}
          onClick={() => setShow({ ...show, education: !show.education })}
          className="flex text-left justify-between items-center text-[18px] text-white md:text-[20px] font-bold mt-5 px-10 sm:px-14 py-7 bg-gradient-to-t from-[#30102b] to-[#5B0E4E] hover:bg-gradient-to-t hover:from-[#30102b76] hover:to-[#5b0e4e90] shadow-[#FFC93E] shadow-[0_25px_200px_-20px] transition w-full rounded-3xl"
        >
          <span>Formal Education</span>
          <span>
            <IconEducation />
          </span>
        </m.button>
        {show.education && (
          <div className="overflow-hidden">
            <m.div
              initial={{ y: "-50%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="px-5"
            >
              <div className="px-7 pt-5 pb-6 space-y-5 text-white bg-black bg-opacity-30 backdrop-blur-lg  rounded-b-xl">
                {dataEducation.map((data, idx) => {
                  return (
                    <div key={idx} className=" border-b-2">
                      <h1 className="text-lg font-bold">{data.place}</h1>
                      <h1 className="w-fit px-2 text-lg text-[#FF4268] font-semibold border border-1 border-[#FF4268] rounded-md">
                        {data.year}
                      </h1>
                      <p>{data.faculty}</p>
                      <p>{data.major}</p>
                      <p className="mb-5">{data.gpa}</p>
                    </div>
                  );
                })}
              </div>
            </m.div>
          </div>
        )}
        <m.button
          variants={{
            hidden: {
              x: -30,
              opacity: 0,
            },
            visible: {
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.2,
                delay: 0.3,
              },
            },
          }}
          animate="visible"
          initial="hidden"
          whileTap={{ scale: 0.98 }}
          onClick={() => setShow({ ...show, experience: !show.experience })}
          className="flex text-left justify-between items-center text-[18px] text-white md:text-[20px] font-bold mt-5 px-10 sm:px-14 py-7 bg-gradient-to-t from-[#30102b] to-[#5B0E4E] hover:bg-gradient-to-t hover:from-[#30102b76] hover:to-[#5b0e4e90] shadow-[#FFC93E] shadow-[0_25px_200px_-31px] transition w-full rounded-3xl"
        >
          <span>Working Experience</span>
          <span>
            <IconExperience />
          </span>
        </m.button>
        {show.experience && (
          <div className="overflow-hidden">
            <m.div
              initial={{ y: "-50%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="px-5"
            >
              <div className="px-7 pt-5 pb-6 space-y-5 text-white bg-black bg-opacity-30 backdrop-blur-lg rounded-b-xl">
                {dataExperience.map((data, idx) => {
                  return (
                    <div key={idx} className=" border-b-2">
                      <div className="flex flex-col justify-center pb-[5px]">
                        <h1 className="font-bold text-lg">{data.place}</h1>
                        <h1 className="flex w-fit sm:px-2 my-1 text-lg text-[#FF4268] sm:text-white font-semibold bg-none sm:bg-gradient-to-r from-[#FE573B] to-[#FF4268] rounded-md">
                          {data.status}

                        </h1>
                        <h1 className="w-fit px-2 text-lg text-[#FF4268] font-semibold border border-1 border-[#FF4268] rounded-md">
                          {data.year}
                        </h1>
                      </div>
                      <div>
                        <ul>
                          {data.jobdesc.map((d, i) => {
                            return(

                              <li key={i} className={ i === data.jobdesc.length - 1  ? "list-disc list-inside mb-5" : `list-disc list-inside`}>{d}</li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </m.div>
          </div>
        )}
        <m.button
          variants={{
            hidden: {
              x: -10,
              opacity: 0,
            },
            visible: {
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.2,
                delay: 0.4,
              },
            },
          }}
          animate="visible"
          initial="hidden"
          whileTap={{ scale: 0.98 }}
          onClick={() => setShow({ ...show, language: !show.language })}
          className="flex text-left justify-between items-center text-[18px] text-white md:text-[20px] font-bold mt-5 px-10 sm:px-14 py-7 bg-gradient-to-t from-[#30102b] to-[#5B0E4E] hover:bg-gradient-to-t hover:from-[#30102b76] hover:to-[#5b0e4e90]  transition w-full rounded-3xl"
        >
          <span>Language Skills</span>
          <span>
            <LanguageIcon />
          </span>
        </m.button>
        {show?.language && (
          <div className="overflow-hidden">
            <m.div
              initial={{ y: "-50%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="px-5"
            >
              <div className="px-7 pt-5 pb-6 space-y-5 bg-black text-white bg-opacity-30 backdrop-blur-lg  rounded-b-xl">
                <div className="flex border-b-2 items-center pb-5">
                  <span className="text-base sm:text-lg font-semibold mr-3 sm:mr-5">
                    English
                  </span>
                  {[1, 2, 3, 4, 5, 6, 7].map((box, idx) => {
                    return (
                      <span
                        key={idx}
                        className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]"
                      >
                        <CircleFilledIcon />
                      </span>
                    );
                  })}
                  {[1, 2, 3].map((box, idx) => {
                    return (
                      <span
                        key={idx}
                        className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]"
                      >
                        <CircleIcon />
                      </span>
                    );
                  })}
                </div>
                <div className="flex border-b-2 items-center pb-5">
                  <span className="text-base sm:text-lg font-semibold mr-3 sm:mr-5">
                    Bahasa
                  </span>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((box, idx) => {
                    return (
                      <span
                        key={idx}
                        className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]"
                      >
                        <CircleFilledIcon />
                      </span>
                    );
                  })}
                  <span className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]">
                    <CircleIcon />
                  </span>
                </div>
              </div>
            </m.div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
