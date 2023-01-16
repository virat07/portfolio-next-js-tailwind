import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";
import Footer from "../components/footer";
import { FiSun } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";
import Button from "../components/button";
import HeaderComponent from "../components/header";
import Hero from "../components/Hero";
import WorkExperience from "../components/WorkExperience";
import AboutUs from "../components/AboutUs";
import SkillsComponent from "../components/skills";
import Contact from "../components/Contact";
import { Experience, PageInfo, Skill } from "../typings";
import { GetStaticProps } from "next";
import { fetchExperience} from "../utils/fetchExperience";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchSkills } from "../utils/fetchSkills";

type Props = {
  pageInfo: PageInfo;
  experience:Experience[];
  skills: Skill[]
}
 const  Home =({pageInfo,experience,skills}:Props)=> {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

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

      <main className="h-screen snap-y snap-mandator overflow-y-scroll overflow-x-hidden z-0  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <HeaderComponent renderThemeChanger={renderThemeChanger} />
        <section id="hero" className="snap-start">
          <Hero pageInfo ={pageInfo} />
        </section>
        <section id="about" className="snap-center">
          <AboutUs pageInfo ={pageInfo} />
        </section>
        <section id="experience" className="snap-center">
          <WorkExperience experiences={experience} />
        </section>
        <section id="skills" className="snap-start">
          <SkillsComponent  skillset ={skills}/>
        </section>
        <section id="contact" className="snap-center">
          <Contact pageInfo={pageInfo} />
        </section>
        <section className="snap-center">
          <Footer />
        </section>
      </main>
    </>
  );
}
export default Home;
export const getStaticProps: GetStaticProps<Props> = async () =>{
  const pageInfo: PageInfo = await fetchPageInfo();
  const experience:Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  return{
    props:{
      pageInfo,
      experience,
      skills
    },
    revalidate:10,
  };
}