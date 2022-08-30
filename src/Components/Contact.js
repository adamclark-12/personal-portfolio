import React from "react";
import { SiMinutemailer } from "react-icons/si";

const Contact = () => {
  return (
    <div className="absolute top-48 overflow-y-auto bottom-0 left-0 right-0 dark:text-slate-200">
      <h1 className="font-h1Font text-8xl text-center">Contact page</h1>
      <p className="font-pFont text-sm italic ml-[37rem]">
        Please fill out all fields.
      </p>
      <form className="flex flex-col my-2 pt-10 ">
        <div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
          <div className="-mx-3 md:flex mb-6 justify-center">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="font-pFont block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 "
                htmlFor="form-name"
              >
                Name
              </label>
              <input
                className="font-pFont appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 "
                id="form-name"
                type="text"
                placeholder="Name"
              ></input>
            </div>
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="font-pFont block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="form-email"
              >
                Email
              </label>
              <input
                className="font-pFont appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                id="fomr-email"
                type="email"
                placeholder="Email"
              ></input>
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6 flex justify-center items-center">
            <div>
              <label
                className=" font-pFontblock uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="Message"
              >
                Message
              </label>
              <textarea
                type="text"
                id="large-input"
                placeholder="Your message here"
                className="font-pFont block p-4 w-full h-24 bg-grey-lighter text-black border-grey-lighter rounded py-3 px-4 mb-6 "
              ></textarea>
              <p className="font-pFont text-grey-dark text-xs italic">
                Thank you for contacting me I'll do my best to respond as
                quickly as I can
              </p>
            </div>
            <button
              type="button"
              className="font-pFont bg-[##586880] hover:bg-[#F7B023] text-white px-4 py-2 font-large rounded "
            >
              Send <SiMinutemailer className="inline" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Contact;
