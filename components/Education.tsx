import React from 'react';
import type { EducationItem } from '../types';

interface EducationProps {
  items: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <div key={index}>
          <h3 className="font-bold text-gray-800">{item.institution}, <span className="font-normal text-sky-600">{item.year}</span></h3>
          <p className="text-gray-500 text-sm">{item.degree}</p>
          {item.description && <p className="text-gray-400 text-xs mt-1">{item.description}</p>}
        </div>
      ))}
    </>
  );
};

export default Education;