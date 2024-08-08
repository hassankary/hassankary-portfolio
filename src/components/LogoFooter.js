import Image from "next/image";
import Link from "next/link";

export const LogoFooter = ({ href, src, alt, title }) => {
  return (
    <Link href={href} target="_blank">
      <div className="flex px-2 py-2 items-center space-x-2 rounded-xl font-semibold bg-[#29002A] hover:bg-[#401241] text-white transition-all">
        <Image src={src} height={40} width={40} alt={alt} />
        <p className=" hidden sm:flex">{title}</p>
      </div>
    </Link>
  );
};
