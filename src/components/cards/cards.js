"use client";
import Image from "next/image";
import Link from "next/link";

export const Cards = ({ href, src, alt, title, desc, link, subtitle }) => {
  return (
    <div className="h-fit bg-transparent rounded-3xl shadow-xl">
      <div className="flex max-h-[400px] overflow-hidden justify-center items-center rounded-t-3xl bg-gradient-to-t from-[#30102b] to-[#5B0E4E] ">
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
          <div className="flex-col px-9 lg:h-[132px] xl:h-[163px] overflow-auto">
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
              <Link className="underline font-bold" href={link} target="_blank">
                {link !== "" && "figma"}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full transition rounded-b-xl">
          <button className="flex w-full justify-center font-bold px-3 py-2 bg-gradient-to-r from-[#FF4265] to-[#ff423c] hover:bg-gradient-to-tr hover:from-[#ff395d] hover:to-[#ff4265b6] text-white rounded-b-3xl transition-all">
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
