import { BiHomeSmile } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav
      className=" text-slate-500 bg-#586880 dark:text-slate-200 shadow-md shadow-[#586880]
             top-2 flex flex-row items-center space-x-20 w-screen p-10 m-0 text-4xl sticky overflow-y-auto"
    >
      {
        <NavLink to="/">
          {
            <SideBarIcon
              icon={<BiHomeSmile size="40" />}
              text={"Home"}
            /> /*  home button */
          }
        </NavLink>
      }
      {
        <NavLink to="/GitHub">
          {
            <SideBarIcon
              icon={<FaGithub size="40" />}
              text={"GitHub & Projects"}
            /> /* github & Projects button */
          }
        </NavLink>
      }
      {
        <NavLink to="/Contact">
          {
            <SideBarIcon
              icon={<GrMail size="40" />}
              text={"Contact"}
            /> /* contacts button */
          }
        </NavLink>
      }
    </nav>
  );
};

/*Create the sidebar component with 2 paramaters for the icon and the tooltip text */
const SideBarIcon = ({ icon, text }) => (
  <div className=" sidebar-icon group ">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);
export default Header;
