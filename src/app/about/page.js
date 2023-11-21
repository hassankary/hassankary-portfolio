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
import { motion } from "framer-motion";
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
      place: "AKSESMU / PT Sumber Trijaya Lestari",
      status: "General Affair Internship",
      year: "(Nov 2022 - May 2023)",
      jobdesc1: "Reimburse employees BBM",
      jobdesc2: "Create a PB (Request) letter",
      jobdesc3: "Create a PAR (Approval) letter",
      jobdesc4: "Create a LPB (Receipt) letter",
      jobdesc5: "Create a NTTB (Bill) letter",
    },
    {
      place: "STARBUCKS / PT Sari Coffee Indonesia",
      status: "Part Time Barista",
      year: "(Apr - Oct 2021)",
      jobdesc1: "Responsible for customer orders",
      jobdesc2: "Responsible for cleaning the area",
      jobdesc3: "Responsible for availability of beverage ingredients",
      jobdesc4: "Responsible for sales result",
      jobdesc5: "Stock opname",
    },
    {
      place: "PPIKSN BATAN / Badan Tenaga Nuklir Nasional",
      status: "Human Resources Internship",
      year: "(Oct 2020 - Dec 2020)",
      jobdesc1: "Registering the attendance of employee development activities",
      jobdesc2: "Updating employee data on SILat BATAN website",
      jobdesc3: "Create an employee development certificate",
      jobdesc4: "Updating employee bezetting",
      jobdesc5: "",
    },
    {
      place: "MOTOMOTO MUSEUM / PT Utopia Satu Raja",
      status: "Museum Assistant",
      year: "(Feb - Oct 2019)",
      jobdesc1: "Visitors Guide",
      jobdesc2: "Control the visitors flow",
      jobdesc3: "Explains the description of each art installation",
      jobdesc4: "",
      jobdesc5: "",
    },
  ];

  const dataEducation = [
    {
      place: "Universitas Negeri Jakarta",
      year: "(2017-2023)",
      faculty: "Faculty of Economics",
      major: "Management Major",
      gpa: "GPA of 3.46",
    },
    {
      place: "Universitas Padjadjaran",
      year: "(2016-2017)",
      faculty: "Faculty of Fisheries and Marine Science",
      major: "Fisheries Major",
      gpa: "GPA of 3.00",
    },
    {
      place: "SMAN 7 Tangerang Selatan",
      year: "(2013-2016)",
      faculty: "Natural Sciences Major",
      major: "",
      gpa: "",
    },
  ];

  return (
    <>
      <Header params={page} />
      <div className="z-30 flex-col w-full pt-[109px] pb-[100px] px-8 sm:px-[100px] md:px-[135px] lg:px-[150px] xl:px-[200px] bg-gradient-to-t from-[#29002A] via-[#540052] to-[#29002A] justify-center lg:justify-between">
        <motion.div
          animate={{ y: [-20, 0], opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ type: "tween", duration: 0.2 }}
          className="flex flex-col px-10 lg:px-14 py-10 space-y-7 lg:space-y-0 bg-black bg-opacity-40 text-slate-50 shadow-[#FFC93E] shadow-[0_25px_200px_-80px] lg:flex-row lg:justify-center w-full rounded-xl"
        >
          <div className="flex justify-center rounded-full ">
            <div className="w-[200px] rounded-full  ">
              <Image
                className="rounded-full  "
                src={"/HassanImage.jpeg"}
                width={200}
                height={200}
                alt="hassan image"
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
            <div className="flex justify-center lg:justify-start items-center ">
              <span className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] mr-[2px]"><LocationIcon/></span>
              <span>South Tangerang (BSD)</span>
            </div>
            <div className="flex justify-center lg:justify-start items-center ">
              <span className="w-[16px] h-[16px] sm:w-[19px] sm:h-[19px] mr-[6px]"><MailIcon/></span>
              <span>hassanaskary29@gmail.com</span>
            </div>
          </div>
        </motion.div>
        <motion.button
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
          className="flex text-left justify-between items-center text-[18px] md:text-[20px] font-bold mt-5 px-10 sm:px-14 py-7 bg-gradient-to-t from-[#30102b] to-[#5B0E4E] hover:bg-gradient-to-t hover:from-[#30102b76] hover:to-[#5b0e4e90] shadow-[#FFC93E] shadow-[0_25px_200px_-20px] transition w-full rounded-2xl"
        >
          <span>Formal Education</span>
          <span>
            <IconEducation />
          </span>
        </motion.button>
        {show.education && (
          <motion.div
            animate={{ y: [-2, 0], opacity: 1 }}
            initial={{ opacity: 0.5 }}
            transition={{ type: "tween", duration: 0.6 }}
            className="px-5"
          >
            <div className="px-7 pt-5 pb-6 space-y-5 bg-black bg-opacity-30 backdrop-blur-lg  rounded-b-xl">
              {dataEducation.map((data, idx) => {
                return (
                  <div key={idx} className=" border-b-2">
                    <h1 className=" text-lg font-semibold">{data.place}</h1>
                    <h1 className=" text-lg text-[#FF4268] font-semibold">
                      {data.year}
                    </h1>
                    <p>{data.faculty}</p>
                    <p>{data.major}</p>
                    <p className="mb-5">{data.gpa}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
        <motion.button
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
          className="flex text-left justify-between items-center text-[18px] md:text-[20px] font-bold mt-5 px-10 sm:px-14 py-7 bg-gradient-to-t from-[#30102b] to-[#5B0E4E] hover:bg-gradient-to-t hover:from-[#30102b76] hover:to-[#5b0e4e90] shadow-[#FFC93E] shadow-[0_25px_200px_-31px] transition w-full rounded-2xl"
        >
          <span>Working Experience</span>
          <span>
            <IconExperience />
          </span>
        </motion.button>
        {show.experience && (
          <motion.div
            animate={{ y: [-2, 0], opacity: 1 }}
            initial={{ opacity: 0.5 }}
            transition={{ type: "tween", duration: 0.6 }}
            className="px-5"
          >
            <div className="px-7 pt-5 pb-6 space-y-5 bg-black bg-opacity-30 backdrop-blur-lg rounded-b-xl">
              {dataExperience.map((data, idx) => {
                return (
                  <div key={idx} className=" border-b-2">
                    <div className="pb-[5px]">
                      <h1 className=" text-lg font-semibold">{data.place}</h1>
                      <h1 className=" text-lg font-semibold">{data.status}</h1>
                      <h1 className=" text-lg text-[#FF4268] font-semibold">
                        {data.year}
                      </h1>
                    </div>
                    <div>
                      <ul>
                        <li
                          className={
                            data.jobdesc1 !== "" ? `list-disc list-inside` : ""
                          }
                        >
                          {data.jobdesc1}
                        </li>
                        <li
                          className={
                            data.jobdesc2 !== "" ? `list-disc list-inside` : ""
                          }
                        >
                          {data.jobdesc2}
                        </li>
                        <li
                          className={
                            data.jobdesc3 !== "" ? `list-disc list-inside` : ""
                          }
                        >
                          {data.jobdesc3}
                        </li>
                        <li
                          className={
                            data.jobdesc4 !== "" ? `list-disc list-inside` : ""
                          }
                        >
                          {data.jobdesc4}
                        </li>
                        <li
                          className={
                            data.jobdesc5 !== ""
                              ? `list-disc list-inside mb-5`
                              : "mb-5"
                          }
                        >
                          {data.jobdesc5}
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
        <motion.button
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
          className="flex text-left justify-between items-center text-[18px] md:text-[20px] font-bold mt-5 px-10 sm:px-14 py-7 bg-gradient-to-t from-[#30102b] to-[#5B0E4E] hover:bg-gradient-to-t hover:from-[#30102b76] hover:to-[#5b0e4e90]  transition w-full rounded-2xl"
        >
          <span>Language Skills</span>
          <span>
            <LanguageIcon />
          </span>
        </motion.button>
        {show?.language && (
          <motion.div
            animate={{ y: [-2, 0], opacity: 1 }}
            initial={{ opacity: 0.5 }}
            transition={{ type: "tween", duration: 0.6 }}
            className="px-5"
          >
            <div className="px-7 pt-5 pb-6 space-y-5 bg-black bg-opacity-30 backdrop-blur-lg  rounded-b-xl">
              <div className="flex border-b-2 items-center pb-5">
                <span className="text-base sm:text-lg font-semibold mr-3 sm:mr-5">English</span>
                {[1, 2, 3, 4, 5, 6, 7].map((box, idx) => {
                  return (
                    <span key={idx} className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]">
                      <CircleFilledIcon />
                    </span>
                  );
                })}
                {[1, 2, 3].map((box, idx) => {
                  return (
                    <span key={idx} className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]">
                      <CircleIcon />
                    </span>
                  );
                })}
              </div>
              <div className="flex border-b-2 items-center pb-5">
                <span className="text-base sm:text-lg font-semibold mr-3 sm:mr-5">Bahasa</span>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((box, idx) => {
                  return (
                    <span key={idx} className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]">
                      <CircleFilledIcon />
                    </span>
                  );
                })}
                <span className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]">
                  <CircleIcon />
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      <Footer />
    </>
  );
}
