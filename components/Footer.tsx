import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <div className="p-5 border-t-2 border-white text-white text-center mt-5">
      &copy; {new Date().getFullYear()} - Assignment Nerd Pvt. Ltd.
    </div>
  );
};

export default Footer;
