import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Homepage = () => {
  return (
    <div className="overflow-y-auto bottom-0 left-0 right-0 dark:text-slate-200">
      <header>
        <h1 className="font-h1Font text-6xl text-center">
          Hello there.
          <span className="italic  text-[#F7B023] "> I'm Adam.</span>
        </h1>
        <h2 className="font-h2Font mt-10 mb-20 text-4xl text-center">
          A <span className="italic  text-[#F7B023] ">web developer </span>
          looking for work
        </h2>
      </header>
      <div className=" w-1/2 float-left">
        <p className="font-pFont m-10 text-xl text-center">
          <a href="https://github.com/adamclark-12">
            <FaGithub className="inline sidebar-icon hover:bg-[#F7B023]" />
          </a>
          <BsArrowLeftShort className="inline" />
          You can find my current projects and work on {""}
          <span className="italic underline hover:bg-[#F7B023] hover:text-black">
            <a href="https://github.com/adamclark-12"> GitHub</a>
          </span>
        </p>
        <p className="font-pFont m-10 text-xl text-center">
          And contact me using the contact page or my{" "}
          <span className="italic underline hover:bg-[#F7B023] hover:text-black">
            <a href="https://www.linkedin.com/in/adam-clark-9a393b168/">
              linkedIn{" "}
            </a>
          </span>
          here
          <BsArrowRightShort className="inline" />
          <a href="https://www.linkedin.com/in/adam-clark-9a393b168/">
            <BsLinkedin className="inline hover:bg-[#F7B023] sidebar-icon" />
          </a>
        </p>
      </div>
      <h2 className="text-center font-h2Font m-10 text-2xl">
        I'm currently using and learning more about these...
      </h2>
      <div className="flex justify-center w-1/2">
        <div className=" grid grid-cols-2 gap-5 justify-center">
          <img
            className="flex justify-center items-center scale-110"
            src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
            alt="JS Icon"
          ></img>
          <img
            className="flex justify-center items-center scale-110"
            src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
            alt="HTML Icon"
          ></img>
          <img
            className="flex justify-center items-center scale-110"
            src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
            alt="CSS Icon"
          ></img>
          <img
            className="flex justify-center items-center scale-110"
            src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
            alt="React Icon"
          ></img>
          <img
            className="flex justify-center items-center scale-110"
            src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
            alt="Tailwind Icon"
          ></img>

          <img
            className="flex justify-center items-center scale-110"
            src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
            alt="MongoDB Icon"
          ></img>
          <img
            className="flex justify-center items-center scale-110"
            src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"
            alt="Node Icon"
          ></img>
          <img
            className="flex justify-center items-center scale-110"
            src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"
            alt="Figma Icon"
          ></img>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
