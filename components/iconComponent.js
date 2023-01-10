import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

export const IconComponent = ({ name:any }) => {
  switch (name) {
    case "twitter":
      return (
        <a
          className="cursor-pointer"
          href="https://twitter.com/bharatgupta07"
          target="_blank"
        >
          <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600  hover:shadow-[0 0.5em 0.5em -0.4em ] hover:shadow-cyan-500/50 hover:translate-y-[-0.25em]" />
        </a>
      );
    case "email":
      return (
        <a
          className="cursor-pointer"
          href="mailto:bharat.gupta1407@gmail.com"
          target="_blank"
        >
          <SiMinutemailer className="text-2xl cursor-pointer hover:shadow-[0 0.5em 0.5em -0.4em ] hover:shadow-cyan-500/50 hover:translate-y-[-0.25em] hover:text-red-600" />
        </a>
      );
    case "linkedin":
      return (
        <a
          className="cursor-pointer"
          href="https://www.linkedin.com/in/bharat-gupta-07/"
          target="_blank"
        >
          <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600  hover:shadow-[0 0.5em 0.5em -0.4em ] hover:shadow-cyan-500/50 hover:translate-y-[-0.25em]" />
        </a>
      );
    case "github":
      return (
        <a
          className="cursor-pointer"
          href="https://github.com/virat07"
          target="_blank"
        >
          <FaGithub className="text-2xl cursor-pointer hover:text-gray-600  hover:shadow-[0 0.5em 0.5em -0.4em ] hover:shadow-cyan-500/50 hover:translate-y-[-0.25em]" />
        </a>
      );
			break;

    default:
			return <></>
      break;
  }
};
