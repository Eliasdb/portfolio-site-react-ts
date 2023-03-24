const About = () => {
  return (
    <div name="about" className="w-full h-screen  text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#A5ABBD]">
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
    </div>
  );
};
export default About;
