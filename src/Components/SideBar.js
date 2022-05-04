import{BiHomeSmile} from "react-icons/bi";
import {GrMail} from "react-icons/gr";
import {FaGithub, FaUser} from "react-icons/fa";
const SideBar = () => {

    return(
<div class=" text-slate-500 dark:bg-slate-600 dark:text-slate-200 shadow-xl shadow-sky-800
             top-2 left-1 flex flex-row items-center space-x-20 w-screen p-10 m-6 text-4xl">

            {<SideBarIcon  icon={<BiHomeSmile size ="40" />} /> /*  home button */}
            { <SideBarIcon icon={<FaUser size ="40" />} />    /*about me button */}
            { <SideBarIcon icon={<FaGithub size ="40" />} /> /* github button */}
            {<SideBarIcon icon={<GrMail size ="40" />} />    /* contacts button */}
            <h1>This piece of shit</h1>
        </div>
    )
};

const SideBarIcon = ({icon}) => (
    <div className="sidebar-icon">
        {icon}
    </div>
)
export default SideBar;
