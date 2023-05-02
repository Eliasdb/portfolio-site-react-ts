import { skills } from "../data/data";

const Skills = () => {
  return (
    <main className="custom-height-skills dark:text-gray-300 text-[#0a192f] w-full dark:bg-[#0a192f] bg-[#b4ccef] mt-20">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#A5ABBD] dark:text-gray-200">
            Skills
          </p>
          <p className="py-4">// Technologies I have experience with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-12 text-center py-8">
          {skills.map((skill) => {
            const { id, text, image } = skill;
            return (
              <div
                className="shadow-smx shadow-[#040c16] hover:scale-110 duration-500 flex flex-col items-center justify-around"
                key={id}
              >
                <img
                  className="w-20 mx-auto"
                  src={`${image}`}
                  alt={`${text} icon`}
                />
                <p className="my-4 font-bold">{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};
export default Skills;
