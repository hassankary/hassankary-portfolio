import { LogoFooter } from "./LogoFooter";

const dataLogoFooter = [
  {
    title: "LinkedIn",
    href: "linkedin.com/in/hassan-askary-hizburrahman-77ba29166",
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
    href: "https://gitlab.com/hassankary",
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

export const Footer = () => {
  return (
    <>
      <div className="bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#29002A"
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
};
