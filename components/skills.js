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
  SiGithub
} from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";
function SkillsComponent() {
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
                  <div class="relative flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
                    <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r  from-cyan-500 to-teal-500 text-white sm:shrink-0">
                      <SiPython />
                    </div>
                    <div class="sm:min-w-0 sm:flex-1">
                      <p class="text-lg font-semibold leading-8 ">Python</p>
                    </div>
                  </div>

                  <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                    <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r  from-cyan-500 to-teal-500 text-white sm:shrink-0">
                      <SiHtml5 />
                    </div>
                    <div class="sm:min-w-0 sm:flex-1">
                      <p class="text-lg font-semibold leading-8 ">HTML 5</p>
                    </div>
                  </div>

                  <div class="relative flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
                    <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r  from-cyan-500 to-teal-500 text-white sm:shrink-0">
                      <SiJavascript />
                    </div>
                    <div class="sm:min-w-0 sm:flex-1">
                      <p class="text-lg font-semibold leading-8 ">Javascript</p>
                    </div>
                  </div>
                  <div class="relative flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
                    <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r  from-cyan-500 to-teal-500 text-white sm:shrink-0">
                      <SiCplusplus/>
                    </div>
                    <div class="sm:min-w-0 sm:flex-1">
                      <p class="text-lg font-semibold leading-8 ">C++</p>
                    </div>
                  </div>
                 
                  <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                    <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r  from-cyan-500 to-teal-500 text-white sm:shrink-0">
                      <SiCss3 />
                    </div>
                    <div class="sm:min-w-0 sm:flex-1">
                      <p class="text-lg font-semibold leading-8 ">CSS 3</p>
                    </div>
                  </div>
                  <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                    <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r  from-cyan-500 to-teal-500 text-white sm:shrink-0">
                      <SiFirebase />
                    </div>
                    <div class="sm:min-w-0 sm:flex-1">
                      <p class="text-lg font-semibold leading-8 ">FireBase</p>
                    </div>
                  </div>
                  <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                    <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r  from-cyan-500 to-teal-500 text-white sm:shrink-0">
                      <SiNextdotjs />
                    </div>
                    <div class="sm:min-w-0 sm:flex-1">
                      <p class="text-lg font-semibold leading-8 ">NextJs</p>
                    </div>
                  </div>
                  <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                    <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r  from-cyan-500 to-teal-500 text-white sm:shrink-0">
                      <SiTailwindcss />
                    </div>
                    <div class="sm:min-w-0 sm:flex-1">
                      <p class="text-lg font-semibold leading-8 ">
                        Tailwind CSS
                      </p>
                    </div>
                  </div>
                  <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                    <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r  from-cyan-500 to-teal-500 text-white sm:shrink-0">
                      <FaNodeJs />
                    </div>
                    <div class="sm:min-w-0 sm:flex-1">
                      <p class="text-lg font-semibold leading-8 ">Node JS</p>
                    </div>
                  </div>
                  <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                    <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r  from-cyan-500 to-teal-500 text-white sm:shrink-0">
                      <FaReact />
                    </div>
                    <div class="sm:min-w-0 sm:flex-1">
                      <p class="text-lg font-semibold leading-8 ">React JS</p>
                    </div>
                  </div>
                  <div class="relative flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
                    <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r  from-cyan-500 to-teal-500 text-white sm:shrink-0">
                      <SiGithub/>
                    </div>
                    <div class="sm:min-w-0 sm:flex-1">
                      <p class="text-lg font-semibold leading-8 ">Github </p>
                    </div>
                  </div>
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
