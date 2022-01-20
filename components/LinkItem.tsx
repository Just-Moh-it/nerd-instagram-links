import Link from "next/link";
import Image from "next/image";
import Globe from "../public/link-icons/globe.svg";
import { motion } from "framer-motion";
import type { Link as LinkProps } from "../data";

const LinkItem = ({ text, link, icon, subtitle }: LinkProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      className="max-w-sm mx-auto cursor-pointer px-4 py-3 bg-white rounded-lg my-4 shadow-lg"
      animate={{ scale: 1 }}
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Link href={link || "https://assignmentnerd.tech"} passHref>
        <div className="flex items-center justify-start gap-2">
          <div className="flex items-center justify-center min-w-max">
            <Image src={icon || Globe} alt={icon} width="24" />
          </div>
          <div className="">
            <div className="flex-grow uppercase tracking-widest text-sm text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
              {subtitle}
            </div>
            <div className="flex-grow">{text}</div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default LinkItem;
