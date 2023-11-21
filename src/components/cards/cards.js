"use client";
import Image from "next/image";
import Link from "next/link";

export const Cards = ({ href, src, alt, title, desc, link }) => {
  return (
    <div className="bg-white h-full rounded-[32px] shadow-xl ">
      <div className="flex overflow-hidden justify-center items-center rounded-t-[32px] bg-gradient-to-t from-[#30102b] to-[#5B0E4E] ">
        <Image
          src={src}
          className=" w-full"
          quality={100}
          height={250}
          width={250}
          alt={alt}
        ></Image>
      </div>
      <div className="flex flex-col ">
        <div className="flex-col py-6 pb-4 px-9 ">
          <h1 className="mb-3 truncate overflow-hidden text-black text-[20px] font-extrabold leading-[30px] ">
            {title}
          </h1>
          <div className="text-ellipsis overflow-hidden text-black text-[15px] font-semibold leading-[30px] ">
            {desc} <Link className=" hover:underline" href={link} target="_blank">{link}</Link>
          </div>
        </div>
        <div className="flex items-end w-full pb-6 px-9 transition rounded-b-xl">
          <button className=" font-bold px-3 py-2 transition  hover:bg-gradient-to-tr hover:from-[#401241] hover:to-[#710e70] bg-gradient-to-tr from-[#29002A] to-[#540052] rounded-lg">
            <Link className="flex justify-center items-center gap-2" href={href} target="_blank">
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
