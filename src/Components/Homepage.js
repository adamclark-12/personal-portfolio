import{BsArrowRightShort} from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs";


const Homepage = () => {
    return(
        <div class= 'absolute top-48 overflow-y-auto bottom-0 left-0 right-0 text-center dark:text-slate-200'> 
            <h1 class='font-h1Font text-8xl '>
                I'm Adam
            </h1>
            <p class='m-10'>A web developer looking for work</p>
            <p class='m-10'>You can find my current projects and work on GitHub</p>
            <p class='m-10'>And contact me using the contact page or my linkedIn here <BsArrowRightShort class='inline'/> <BsLinkedin class='inline'/></p>
    </div>
    )
} 
export default Homepage;