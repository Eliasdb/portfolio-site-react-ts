const Contact = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center p-4 dark:text-gray-300 text-[#0a192f]">
      <form
        action="https://formspree.io/f/xknaqwyy"
        method="POST"
        className="flex flex-col max-w-[700px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#A5ABBD] dark:text-gray-200 text-[#0a192f]">
            Contact
          </p>
          <p className="py-4">// Submit the form below or send me an email</p>
        </div>
        <input
          className="p-2 dark:bg-[#ccd6f6]  dark:text-[#0a192f]"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 dark:bg-[#ccd6f6] dark:text-[#0a192f]"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="dark:bg-[#ccd6f6] p-2 dark:text-[#0a192f]"
          name="message"
          rows={10}
          placeholder="Message"
          required
        />
        <button className="dark:text-white border-2 dark:border-[#233044] dark:hover:bg-[#A5ABBD] hover:bg-[#0a192f] hover:text-gray-300 px-4 py-3 my-8 mx-auto flex items-center">
          Let's collaborate
        </button>
      </form>
    </div>
  );
};
export default Contact;
