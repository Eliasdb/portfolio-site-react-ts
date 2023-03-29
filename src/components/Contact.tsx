import { Navigate } from "react-router-dom";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4 dark:text-gray-300 text-[#0a192f]"
    >
      <form
        action="https://formspree.io/f/xknaqwyy"
        method="POST"
        className="flex flex-col max-w-[700px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#A5ABBD] dark:text-gray-200 text-[#0a192f]">
            Contact
          </p>
          <p className="py-4">Submit the form below or send me an email</p>
        </div>
        <input
          className="p-2 dark:bg-[#ccd6f6]  dark:text-[#0a192f]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 dark:bg-[#ccd6f6] dark:text-[#0a192f]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="dark:bg-[#ccd6f6] p-2 dark:text-[#0a192f]"
          name="message"
          rows="10"
          placeholder="Message"
        />
        <button className="dark:text-white border-2 dark:border-[#233044] dark:hover:bg-[#233044] px-4 py-3 my-8 mx-auto flex items-center">
          Let's collaborate
        </button>
      </form>
    </div>
  );
};
export default Contact;
