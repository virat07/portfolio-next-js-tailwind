import React from "react";
import { motion } from "framer-motion";
import CardComponent from "./CardComponent";
import { Experience } from "../typings";
type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto"
    >
      <h3 className="absolute uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex overflow-x-scroll space-x-5 p-10 snap-x snap-mandatory  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin">
        {experiences?.map((exp) => (
          <CardComponent experience={exp} key={exp._id} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
