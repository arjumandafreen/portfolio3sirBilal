import React from 'react';

const skills = [
  { name: 'HTML', percentage: 90, color: 'red' },
  { name: 'CSS', percentage: 85, color: 'blue' },
  { name: 'TypeScript', percentage: 70, color: 'green' },
  { name: 'JavaScript', percentage: 80, color: 'purple' },
  { name: 'Node.js', percentage: 75, color: 'maroon' },
  { name: 'React', percentage: 95, color: 'blue' },
  { name: 'Next.js', percentage: 90, color: 'green' },
  { name: 'Tailwind CSS', percentage: 85, color: 'purple' },
];

const Skills = () => {
  return (
    <div id="skills" className="bg-black text-white py-24">
      <h1 className="text-4xl text-center mb-10" style={{ color: 'orange' }}>
        My Skills
      </h1>
      <div className="container mx-auto text-center">
        {skills.map((skill) => (
          <div key={skill.name} className="mb-4">
            <p className="text-xl">{skill.name}</p>
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                <div
                  style={{
                    width: `${skill.percentage}%`,
                    backgroundColor: skill.color,
                  }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
                >
                  {skill.percentage}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;