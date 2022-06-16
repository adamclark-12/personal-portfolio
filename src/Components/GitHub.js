import {FaGithub, FaUser} from "react-icons/fa";
import{BsArrowRightShort} from "react-icons/bs"

const GitHub = () => {
    return(
        <div class= 'absolute top-48 overflow-y-auto bottom-0 left-0 right-0 text-center dark:text-slate-200'> 
            <h1 class='font-h1Font text-8xl '>
                GitHub page
            </h1>
            <h2 class='text-center pt-7 text-xl'>
                Here is a link to my GitHub <BsArrowRightShort class='inline'/> <FaGithub class='inline sidebar-icon' />
            </h2>
            <br></br>
            <p class='text-lg'>
                Below are some screenshots and information on some of the current projects 
                that I'm working on. 
            </p>

        </div>

    )
}
const SideBarIcon_2 = ({icon, text = 'tooltip'}) => (
    <div className="sidebar-icon group">
        {icon}

        <span class="sidebar-tooltip group-hover:scale-100">
            {"GitHub"}
        </span>
    </div>
)
export default GitHub;





