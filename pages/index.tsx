import type { NextPage } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LinkItem from "../components/LinkItem";

import data from "../data";

const Home: NextPage = () => {
  return (
    <div className="min-h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 flex flex-col">
      <Header />
      <div className="flex-grow">
        <div className="text-center font-bold text-white text-xl uppercase tracking-widest">
          <hr className="w-60 text-center m-auto mb-5 border-2 rounded-full" />
          Links on our bio
        </div>
        <div className="flex items-center justify-center h-full flex-grow">
          <div className="">
            {data.map((dataItem) => {
              return (
                <LinkItem
                  key={dataItem.text}
                  text={dataItem.text}
                  link={dataItem.link}
                  icon={dataItem.icon}
                  subtitle={dataItem.subtitle}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
