import React from 'react';
import type { Skill } from '../types';

interface SkillsProps {
  skills: Skill[];
}

const categoryStyles: Record<Skill['category'], string> = {
  adobe: 'border-sky-400 text-sky-700',
  strategy: 'border-blue-400 text-blue-700',
  video: 'border-cyan-400 text-cyan-700',
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <span
          key={index}
          className={`bg-white border ${categoryStyles[skill.category] || 'border-gray-300 text-gray-600'} text-sm font-medium px-4 py-2 rounded-full shadow-sm`}
        >
          {skill.name}
        </span>
      ))}
    </div>
  );
};

export default Skills;