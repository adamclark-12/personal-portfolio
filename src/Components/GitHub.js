import { FaGithub, FaUser } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import React from "react";
import axios from "axios";

const GitHub = () => {
  const [repos, setRepos] = React.useState([]);
  React.useEffect(() => {
    const getRepos = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/adamclark-12/repos?page=1&per_page=6&sort=updated`
        );
        setRepos(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRepos();
  }, []);

  return (
    <div className="absolute top-48 overflow-y-auto bottom-0 left-0 right-0 dark:text-slate-200">
      <h1 className="font-h1Font text-8xl  text-center ">GitHub page</h1>
      <h2 className="text-center pt-7 text-xl">
        Here is a link to my GitHub{" "}
        <button>
          <FaGithub className="inline sidebar-icon hover:bg-[#F7B023]" />
          <a href="https://github.com/adamclark-12"></a>
        </button>
      </h2>
      <br></br>
      <p className="text-lg  text-center">
        Below are some screenshots and information on some of the current
        projects that I'm working on.
      </p>
      <section className="flex">
        <div className="w-1/2 h-40 p-10px outline-dashed border-red-300  m-5">
          {" "}
          {repos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url}>
                <h4>{repo.name}</h4>
                <p>{repo.description}</p>
              </a>
            </li>
          ))}
        </div>
        <div className="w-2/5 h-40 p-10px outline-dashed border-red-300  m-5">
          {" "}
          Info
        </div>
      </section>
    </div>
  );
};
const SideBarIcon_2 = ({ icon, text = "tooltip" }) => (
  <div className="sidebar-icon group">
    {icon}

    <span className="sidebar-tooltip group-hover:scale-100">{"GitHub"}</span>
  </div>
);
export default GitHub;
