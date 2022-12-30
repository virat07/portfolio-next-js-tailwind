import React from "react";
import {
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiTailwindcss,
  SiPython,
  SiNextdotjs,
  SiFirebase
} from "react-icons/si";
import {
  FaNodeJs,
  FaReact
} from 'react-icons/fa';
function SkillsComponent() {
  return (
    <>
      <div>
        <div className="text-2xl w-full justify-between">
          Skillset
          <ul>
            <div className="flex w-full gap-12 pb-5">
              <div className="flex gap-4 pb-5">
                With the skills in over more than 2 fields, I am a perfect
                person to hire. Whatever your needs are I can pretty much take
                on any challenge.
              </div>
              <div className="gap-4 pb-5"/> 
              <div className=" gap-4 pb-5 justify-center ">
                <li className="pb-6 text-center">
                  <SiPython className="w-full" /> <p>Python</p>
                </li>
                  <li className="pb-6 text-center">
                  <SiHtml5 className="w-full" /> <p> Html5</p>
                </li>
                  <li className="pb-6 text-center">
                  <SiJavascript className="w-full" /> <p> Javascript </p>
                </li>
              </div>
              <div className=" gap-4 pb-5 justify-center ">
                  <li className="pb-6 text-center">
                  <SiNextdotjs className="w-full" /> <p> Next Js</p>
                </li>
                  <li className="pb-6 text-center">
                  <SiTailwindcss className="w-full" /> <p> Tailwind</p>
                </li>
                  <li className="pb-6 text-center">
                  <SiCss3 className="w-full" /> <p> CSS3</p>
                </li>
              </div>
              <div className=" gap-4 pb-5 justify-center ">
                  <li className="pb-6 text-center">
                  <FaNodeJs className="w-full" /> <p> NodeJs</p>
                </li>
                  <li className="pb-6 text-center">
                  <FaReact className="w-full" /> <p> ReactJs</p>
                </li>
                  <li className="pb-6 text-center">
                  <SiFirebase className="w-full" /> <p> Firebase</p>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SkillsComponent;
