import React from "react";
import { SiMinutemailer } from "react-icons/si";
import { useForm, ValidationError } from "@formspree/react";
import { useNavigate } from "react-router";
import { AiOutlineRollback } from "react-icons/ai";

const Contact = () => {
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("mvoygyjp");
  if (state.succeeded) {
    return (
      <p className="text-slate-200 text-center content-center font-pFont text-xl mt-40">
        Thank you for getting in touch, I will get back to you as soon as I can!
        <br />
        <br />
        <button
          className=" shadow-lg
          hover:text-gray-700 hover:bg-[#F7B023] rounded-3xl hover:rounded-xl transition-all duration-200
          ease-linear cursor-pointer;"
          onClick={() => navigate(-1)}
        >
          Go Home <AiOutlineRollback className="inline " />
        </button>
      </p>
    );
  }
  return (
    <form className="flex flex-col my-2 pt-10 " onSubmit={handleSubmit}>
      <div className="absolute top-48 overflow-y-auto bottom-0 left-0 right-0 text-slate-200">
        <h1 className="font-h1Font text-8xl text-center">Contact page</h1>
        <p className="font-pFont text-sm italic text-center">
          Please fill out all fields.
        </p>

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
                className="font-pFont appearance-none block w-full text-black border border-red rounded py-3 px-4 mb-3 "
                id="form-name"
                type="text"
                placeholder="Name"
              ></input>
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="font-pFont block uppercase tracking-wide  text-xs font-bold mb-2"
                htmlFor="form-email"
              >
                Email
              </label>
              <input
                className="font-pFont appearance-none block w-full border border-red rounded py-3 px-4 mb-3"
                id="form-email"
                type="email"
                name="email"
                placeholder="Email"
              ></input>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6 flex justify-center items-center">
            <div>
              <label
                className=" font-pFontblock uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="Message"
              >
                Message
              </label>
              <textarea
                name="message"
                type="text"
                id="large-input"
                placeholder="Your message here"
                className="font-pFont block p-4 w-full h-24 bg-grey-lighter text-black border-grey-lighter rounded py-3 px-4 mb-6 "
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <p className="font-pFont text-grey-dark text-xs italic">
                Thank you for contacting me I'll do my best to respond as
                quickly as I can
              </p>
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="font-pFont bg-[##586880] hover:bg-[#F7B023] text-white px-4 py-2 font-large rounded "
            >
              Send <SiMinutemailer className="inline" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
  // made with formspree
};
export default Contact;
