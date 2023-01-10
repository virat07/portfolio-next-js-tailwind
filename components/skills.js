import React from "react";
import {
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiTailwindcss,
  SiPython,
  SiNextdotjs,
  SiFirebase,
  SiCplusplus,
  SiGithub,
} from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";
function SkillsComponent() {
  // map the skill section
  const skills = [
    {
      name: "Python",
      icon: <SiPython />,
    },
    {
      name: "Html",
      icon: <SiHtml5 />,
    },
    {
      name: "Javascript",
      icon: <SiJavascript />,
    },
    {
      name: "CSS 3",
      icon: <SiCss3 />,
    },
    {
      name: "C++",
      icon: <SiCplusplus />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
    },
    {
      name: "React Js",
      icon: <FaReact />,
    },
    {
      name: "Next JS",
      icon: <SiNextdotjs />,
    },
    {
      name: "Node Js",
      icon: <FaNodeJs />,
    },
    {
      name: "Github",
      icon: <SiGithub />,
    },
  ];

  return (
    <>
      <div className="py-10 mb-12 min-h-screen">
        <div className="text-2xl w-full justify-between">
          Skillset
          <div className=" flex w-full gap-12 pb-5">
            <div className=" sm:block md: flex gap-4 pb-5">
              With the skills in over more than 2 fields, I am a perfect person
              to hire. Whatever your needs are I can pretty much take on any
              challenge.
            </div>
          </div>
          <div>
            <div class="mx-auto max-w-7xl  lg:px-8">
              <div class="mt-10 max-w-lg sm:mx-auto md:max-w-none">
                <div class="grid grid-cols-2 gap-y-16 md:grid-cols-3 md:gap-x-6 md:gap-y-16 ">
                  {skills.map((item) => {
                    return (
                      <div
                        class="relative flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row"
                        key={item.name}
                      >
                        <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r  from-cyan-500 to-teal-500 text-white sm:shrink-0">
                          {item.icon}
                        </div>
                        <div class="sm:min-w-0 sm:flex-1">
                          <p class="text-lg font-semibold leading-8 ">
                            {item.name}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsComponent;
