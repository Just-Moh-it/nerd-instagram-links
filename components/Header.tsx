import Image from "next/image";
import Logo from "../public/logo.png";
import Link from "next/link";

import Facebook from "../public/facebook.svg";
import Instagram from "../public/instagram.svg";
import Trustpilot from "../public/star.svg";
import Globe from "../public/globe_white.svg";
import Blog from "../public/blogger.svg";

const Header = () => {
  return (
    <>
      <div className="max-w-sm mx-auto cursor-pointer">
        <Link
          href={`https://assignmentnerd.tech/?utm_sorce=instagram&utm_medium=from_header`}
          passHref
        >
          <Image src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="flex justify-between gap-4 max-w-xs m-auto mt-5 mb-5">
        <div className=" bg-slate-200 bg-transparent  rounded-full w-12 h-12 cursor-pointer flex items-center justify-center p-3 hover:backdrop-brightness-75">
          <Link href="https://assignmentnerd.tech" passHref>
            <Image src={Globe} alt="Website" />
          </Link>
        </div>
        <div className=" bg-slate-200 bg-transparent rounded-full w-12 h-12 cursor-pointer flex items-center justify-center p-3 hover:backdrop-brightness-75">
          <Link href="https://facebook.com/assignment.nerd" passHref>
            <Image src={Facebook} alt="Facebook" />
          </Link>
        </div>
        <div className=" bg-slate-200 bg-transparent  rounded-full w-12 h-12 cursor-pointer flex items-center justify-center p-3 hover:backdrop-brightness-75">
          <Link href="https://instagram.com/assignment.nerd" passHref>
            <Image src={Instagram} alt="Instagram" />
          </Link>
        </div>
        <div className=" bg-slate-200 bg-transparent  rounded-full w-12 h-12 cursor-pointer flex items-center justify-center p-3 hover:backdrop-brightness-75">
          <Link href="https://facebook.com/" passHref>
            <Image src={Trustpilot} alt="Trustpilot" />
          </Link>
        </div>
        <div className=" bg-slate-200 bg-transparent  rounded-full w-12 h-12 cursor-pointer flex items-center justify-center p-3 hover:backdrop-brightness-75">
          <Link href="https://blog.assignmentnerd.tech/" passHref>
            <Image src={Blog} alt="Blog" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
