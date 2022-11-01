import { BiHomeSmile } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="  text-slate-200 top-2 flex flex-row items-center space-x-20 w-screen p-10 m-0 text-4xl sticky">
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
  <div className=" sidebar-icon group sticky">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);
export default Header;
