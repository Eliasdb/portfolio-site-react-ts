const About = () => {
  return (
    <main className="w-full custom-height dark:text-gray-300 text-[#0a192f] dark:bg-[#0a192f] bg-[#b4ccef]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#A5ABBD] dark:text-gray-200 ">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Elias, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
              praesentium consectetur ut minima assumenda perferendis veritatis
              porro provident. Nulla laborum delectus id odit hic nesciunt totam
              quidem eum, similique sit!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default About;
