import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaUser } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";

const Homepage = () => {
  return (
    <div className="absolute top-48 overflow-y-auto bottom-0 left-0 right-0 dark:text-slate-200">
      <header>
        <h1 className="font-h1Font text-6xl text-center pt-20">
          Hello there <span className="italic  text-[#F7B023] ">I'm Adam</span>
        </h1>
        <h2 className="m-10 text-4xl text-center">
          A web developer looking for work
        </h2>
      </header>
      <p className="m-10 text-xl text-center">
        <button>
          <FaGithub className="inline sidebar-icon hover:bg-[#F7B023]" />
        </button>
        <BsArrowLeftShort className="inline" />
        You can find my current projects and work on GitHub
      </p>
      <p className="m-10 text-xl text-center">
        And contact me using the contact page or my linkedIn here
        <BsArrowRightShort className="inline" />
        <button>
          <BsLinkedin className="inline hover:bg-[#F7B023] sidebar-icon" />
          <a href="www.linkedin.com/in/adam-clark-9a393b168"></a>
        </button>
      </p>
    </div>
  );
};
export default Homepage;
