import { FaGithub } from "react-icons/fa";
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
      <br />
      <p className="text-lg  text-center">
        Below are some screenshots and information on some of the current
        projects that I'm working on
        <br />
        Click a project to be taken to the repository
      </p>
      <section className="">
        <div className="m-5 flex flex-row p-0 space-x-9 pl-10">
          {repos.map((repo) => (
            <li
              className="list-none w-1/3 mt-10px mr-20px flex justify-center rounded-2xl  gradient-color-text hover:bg-[#74A5A7] hover:rounded-lg"
              key={repo.id}
            >
              <a href={repo.html_url}>
                <h4 className="underline flex justify-center text-bold">
                  {repo.name}
                </h4>
                <p className="p-10 mb-20px flex justify-center">
                  {repo.description}
                </p>
              </a>
            </li>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GitHub;
