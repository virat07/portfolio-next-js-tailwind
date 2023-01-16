import React from "react";
import CardComponent from "./CardComponent";
import { projectExperience } from "./config";

export const ExperienceComponent = () => {
  return (
    <>
      <h2 className="font-medium leading-tight text-4xl mt-0 mb-2  text-teal-500">
        Professional Projects
      </h2>

      <div class="pricing-table-2 bg-white dark:bg-slate-800 py-6 md:py-12">
        <div class="container mx-auto px-4">
          <div className="pricing-plans lg:flex lg:-mx-4 mt-6 md:mt-12 ">
            {projectExperience.map((projects) => {
              return <CardComponent projects={projects} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
