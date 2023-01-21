import { motion } from "framer-motion";

const HeaderComponent = ({renderThemeChanger})=>{
    return(
    <header className="py-10 mb-12 flex justify-between sticky  max-w-7xl mx-auto z-20 xl:items-center p-5">
    <motion.div
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
      }}
    >
      <h1 className="text-xl font-burtons">developed by</h1>
    </motion.div>
    <motion.div
      initial={{
        x: 500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
      }}
    >
      <ul className="flex items-center">
        <li>
          <a
            className="hover:ring-2 hover:ring-gray-300  hover:shadow-[0 0.5em 0.5em -0.4em ] hover:shadow-cyan-500/50 hover:translate-y-[-0.25em] bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
            href="/BharatGuptaResume.pdf"
            download="Bharat Gupta resume"
            target="_blank"
          >
            Resume
          </a>
        </li>
        <li className="pl-5 ">{renderThemeChanger()}</li>
      </ul>
    </motion.div>
  </header>
    )
}
export default HeaderComponent;