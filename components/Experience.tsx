import React from 'react';
import type { ExperienceItem } from '../types';

interface ExperienceProps {
  items: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <div key={index}>
          <h3 className="font-bold text-gray-800">{item.company} <span className="font-normal text-sky-600">({item.period})</span></h3>
          <p className="text-gray-500 italic">{item.role}</p>
        </div>
      ))}
    </>
  );
};

export default Experience;