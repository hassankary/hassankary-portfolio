"use client";
import { Header } from "@/components/Header";
import { ButtonIcon } from "@/components/icon/icon";

export default function Services() {
    const page = "services"
  return (
    <>
      <Header params={page} />
      <div className="flex pt-[109px] bg-gradient-to-r from-[#29002A] to-[#540052] min-h-screen justify-center px-[100px]">
        <div className="flex py-[50px] justify-center">
          <div className="w-[50%] space-y-7">
            <p className="bg-clip-text text-[52px] uppercase text-transparent bg-gradient-to-r from-[#FE573B] to-[#FF4265] font-extrabold">
              my portfolio
            </p>
            <p className="text-[52px] leading-[63px]">
              Warmth and comfort for{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FE573B] to-[#FF4265] font-extrabold">
              Work
              </span>
            </p>
            <p>
              Discover the perfect pet heating solutions to keep your beloved
              companions cozy and content all year round.
            </p>
            <div className="flex">
              <button className="flex px-6 py-[19px] items-center space-x-2 rounded-full bg-gradient-to-r from-[#FE573B] to-[#FF4268]">
                <span className=" animate-pulse items-center">
                  Our services
                </span>
                <div className="rounded-full shadow-md">
                  <ButtonIcon
                    width={18}
                    height={18}
                    color1={"#FF593C"}
                    color2={"white"}
                  />
                </div>
              </button>
              <button className="flex px-6 py-[19px] items-center underline">
                Schedule a call
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
