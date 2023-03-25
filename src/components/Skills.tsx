import { skills } from "../data/data";

const Skills = () => {
  return (
    <div
      name="skills"
      className="dark:text-gray-300 text-[#0a192f] w-full h-screen"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#A5ABBD]">
            Skills
          </p>
          <p className="py-4">// Technologies I have worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          {skills.map((skill) => {
            const { id, text, url } = skill;
            return (
              <div
                className="shadow-smx shadow-[#040c16] hover:scale-110 duration-500"
                key={id}
              >
                <img
                  className="w-20 mx-auto"
                  src={`${url}`}
                  alt={`${text} icon`}
                />
                <p className="my-4">{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Skills;
