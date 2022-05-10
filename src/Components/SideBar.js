import{BiHomeSmile} from "react-icons/bi";
import {GrMail} from "react-icons/gr";
import {FaGithub, FaUser} from "react-icons/fa";
const SideBar = () => {
    return(
        <div class=" text-slate-500 dark:bg-slate-600 dark:text-slate-200 shadow-xl shadow-sky-800
             top-2 flex flex-row items-center space-x-20 w-screen p-10 m-0 text-4xl fixed">

            {<SideBarIcon_1 icon={<BiHomeSmile size ="40" />} /> /*  home button */}
            {<SideBarIcon_2 icon={<FaUser size ="40" />} />    /*about me button */}
            {<SideBarIcon_3 icon={<FaGithub size ="40" />} /> /* github button */}
            {<SideBarIcon_4 icon={<GrMail size ="40" />} />    /* contacts button */}
            <h1>Hello there</h1>
        </div>
    )
};

const SideBarIcon_1 = ({icon, text = 'tooltip'}) => (
    <div className="sidebar-icon group">
        {icon}

        <span class="sidebar-tooltip group-hover:scale-100">
            {"Home"}
        </span>
    </div>
)
const SideBarIcon_2 = ({icon, text = 'tooltip'}) => (
    <div className="sidebar-icon group">
        {icon}

        <span class="sidebar-tooltip group-hover:scale-100">
            {"About Me"}
        </span>
    </div>
)
const SideBarIcon_3 = ({icon, text = 'tooltip'}) => (
    <div className="sidebar-icon group">
        {icon}

        <span class="sidebar-tooltip group-hover:scale-100">
            {"GitHub Page"}
        </span>
    </div>
)
const SideBarIcon_4 = ({icon, text = 'tooltip'}) => (
    <div className="sidebar-icon group">
        {icon}

        <span class="sidebar-tooltip group-hover:scale-100">
            {"Contact"}
        </span>
    </div>
)
export default SideBar;
