import{BiHomeSmile} from "react-icons/bi";
import {GrMail} from "react-icons/gr";
import {FaGithub, FaUser} from "react-icons/fa";
import { Route, link} from "react-router";
import Homepage from "./Homepage";
import { NavLink } from "react-router-dom";

const SideBar = () => {
    return(
        <div className=" text-slate-500 dark:bg-slate-600 dark:text-slate-200 shadow-xl shadow-sky-800
             top-2 flex flex-row items-center space-x-20 w-screen p-10 m-0 text-4xl fixed overflow-y-auto">
            {<NavLink to='/'>{<SideBarIcon_1 icon={<BiHomeSmile size ="40" />} />/*  home button */} </NavLink>}
            {<NavLink to='/GitHub'>{<SideBarIcon_2 icon={<FaGithub size ="40" />} /> /* github button */}</NavLink>}
            {<NavLink to='/Contact'>{<SideBarIcon_3 icon={<GrMail size ="40" />} />    /* contacts button */}</NavLink>}
        </div>
    )
};

const SideBarIcon_1 = ({icon, text = 'tooltip'}) => (
    <div className="sidebar-icon group">
        {icon}

        <span className="sidebar-tooltip group-hover:scale-100">
            {"Home"}
        </span>
    </div>
)
const SideBarIcon_2 = ({icon, text = 'tooltip'}) => (
    <div className="sidebar-icon group">
        {icon}

        <span className="sidebar-tooltip group-hover:scale-100">
            {"GitHub & Projects"}
        </span>
    </div>
)
const SideBarIcon_3 = ({icon, text = 'tooltip'}) => (
    <div className="sidebar-icon group">
        {icon}

        <span className="sidebar-tooltip group-hover:scale-100">
            {"Contact"}
        </span>
    </div>
)
export default SideBar;
