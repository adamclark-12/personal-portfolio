import React from "react";
import {SiMinutemailer} from "react-icons/si"

const Contact = () => {
    const[firstName, SetFirstName] = React.useState("")

    function handleChange(event){
      
    }

    return(
        <div class= 'absolute top-48 overflow-y-auto bottom-0 left-0 right-0 text-center dark:text-slate-200'> 
            <h1 class='font-h1Font text-8xl '>
               Contact page
               <p class=" text-sm italic">Please fill out all fields.</p>
            </h1>
            <form class='flex flex-col my-2 pt-10' >
          <div class=" shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                <div class="-mx-3 md:flex mb-6">
                  <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                      First Name
                    </label>
                    <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="First Name"></input>
                  </div>
                  <div class="md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                      Last Name
                    </label>
                    <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Last Name"></input>
                  </div>
                </div>
                <div class="md:w-1/2 px-3 mb-6 md:mb-0 justify-center items-center">
                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                      Email
                    </label>
                    <input class="appearance-none  block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="email" placeholder="Email"></input>
                  </div>
                <div class="-mx-3 md:flex mb-6 flex justify-center items-center">
                  <div class="">
                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="Message">
                      Message
                    </label>
                    <textarea type="text" id="large-input" placeholder="Your message here" class=" block p-4 w-full h-24 bg-grey-lighter text-black border-grey-lighter rounded py-3 px-4 mb-6 " ></textarea>
                    <p class="text-grey-dark text-xs italic">Thank you for contacting me I'll do my best to respond as quickly as I can</p>
                  </div>
                  <button type="button" class=" bg-[##586880] hover:bg-[#F7B023] text-white px-4 py-2 font-large rounded ">Send <SiMinutemailer class="inline" /></button>

                </div>
          </div>
            </form>

        </div>

    )
}
export default Contact;