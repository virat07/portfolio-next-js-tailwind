import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import Footer from "../components/footer";
import SkillsComponent from "../components/skills";
import { FiSun } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";
import Button from "../components/button";
import { IconComponent } from "../components/iconComponent";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const icons = ["twitter", "linkedin", "github"];

  useEffect(() => {
    setMounted(true);
  }, []);
  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <Button
          className="bg-gradient-to-r  from-cyan-500 to-teal-500  hover:shadow-[0 0.5em 0.5em -0.4em ] hover:shadow-cyan-500/50 hover:translate-y-[-0.25em]"
          onClick={() => setTheme("light")}
        >
          <FiSun />
        </Button>
      );
    } else {
      return (
        <Button
          className="bg-gradient-to-r  from-cyan-500 to-teal-500  hover:shadow-[0 0.5em 0.5em -0.4em ] hover:shadow-cyan-500/50 hover:translate-y-[-0.25em]"
          onClick={() => setTheme("dark")}
        >
          <IoMdMoon />
        </Button>
      );
    }
  };
  return (
    <>
      <Head>
        <title>Bharat Gupta Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">developed by</h1>
            <ul className="flex items-center">
              <li>
                <a
                  className="hover:ring-2 hover:ring-gray-300  hover:shadow-[0 0.5em 0.5em -0.4em ] hover:shadow-cyan-500/50 hover:translate-y-[-0.25em] bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="../public/bharatguptaresume.pdf"
                  download="Bharat Gupta resume"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
              <li className="pl-5 ">{renderThemeChanger()}</li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Bharat Gupta
            </h2>
            <h3 className="text-2xl py-2 md:text-xl"> Software Developer</h3>
            <p className="text-gray-600">
              {" "}
              I'm a graduate student of CSUSB class of 22 and my passion is
              Computer Science. <br />
              My interset includes developing new software, frontend, backend,
              designing.
            </p>
            <div className="flex justify-center gap-6 p-5">
              {icons.map((iconsName) => {
                return <IconComponent name={iconsName} />;
              })}
            </div>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image src={deved} alt="dev" layout="fill" objectFit="cover" />
          </div>
        </section>
        <div className="px-10 md:px-20 lg:px-40">
          <SkillsComponent />
        </div>
      </main>
      <Footer />
    </>
  );
}
